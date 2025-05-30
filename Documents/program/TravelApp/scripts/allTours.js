import { data } from './tours.js' 
import { describeAge, describeService, describeStyle, describePhysic, describeType } from './descriptions.js'

// scrolling button / more
const scrollBtn = document.querySelector('.scroll-arrow')

scrollBtn.addEventListener('click', () => {
  const target = document.querySelector('.page-tours')

  const top = target.getBoundingClientRect().top + window.pageYOffset + 50
  window.scrollTo({top, behavior: "smooth"})
})



// modal variables

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');


const modalTitle = document.getElementById('title');
const modalImg = document.getElementById('modalPhoto')
const modalText= document.getElementById('more-text');
const modalTravelStyle = document.getElementById('travelStyle');
const modalServiceLevel = document.getElementById('serviceLevel');
const modalPhysicalRating = document.getElementById('physicalRating');
const modalTripType = document.getElementById('tripType');
const modalAgeReq = document.getElementById('ageReq');
const modalPrice = document.getElementById('price')


// getting the region from the URL
function getRegion(){
  const params = new URLSearchParams(window.location.search);
  return params.get('region')
}

const continentData = getRegion()

document.querySelector('.main').classList.add(continentData)

const formatTitlePage = continentData
  .replace(/([A-Z])/g, ' $1') 
  .replace(/^./, str => str.toUpperCase());

  document.title = `${formatTitlePage} Tours`

// naming
const mainH1 = document.querySelector('#toursContinent')
const mainP = document.querySelector('#descriptionContinent')
const allTours = document.querySelector('#allToursPlace')

mainP.textContent =  data[continentData].description
mainH1.textContent = continentData
allTours.textContent = `All tours: ${continentData.toUpperCase()}`



// carousel

const carouselTour = document.querySelector('.carousel-tours')
const infoTours = data[continentData]

console.log(infoTours)
if (infoTours){

  infoTours.tours.forEach((tour) => {
    const newContainer = document.createElement('div');
    newContainer.classList.add("card");

    const tourImgage = tour.img ? tour.img : '../assets/no-img.png'

    if(!tour.img){
      newContainer.style.backgroundSize = '80%';
      newContainer.style.backgroundPosition = 'center';
      newContainer.style.backgroundRepeat = 'no-repeat';
    }


    
    newContainer.innerHTML = `
    <div class="tour-info">
    <div class="title">
    <h6 id="card-title">${tour.title}</h6>
    </div>
    <span><b id="days">${tour.days} days</b> in ${tour.place}</span>
    <div class="tour-description">
    <div class="more">
    Difficulty: <span id="difficulty">${tour.rating}</span>
    <span id="group">${tour.type}</span>
    </div>
    <div class="prices">
    <strong id="priceId">${tour.price}</strong>
    <span id="date">on ${tour.date}</span>
    </div>
    </div>
    <div class="btn-tour">
    <a class="openModal">VIEW TOUR
    <span></span><span></span><span></span><span></span></a>
    </div>
    </div>
    `;
    
    
    newContainer.style.backgroundImage = `url(${tourImgage})`;
    carouselTour.appendChild(newContainer);
    
    

    // Add click listener to show modal with member info
    newContainer.addEventListener('click', () => {
      console.log('its a modal')
      // Populate modal fields directly from info object
      modalTitle.textContent = tour.title;
      modalText.innerHTML = `<p>${tour.text}</p>`
      modalTravelStyle.innerHTML = `<strong>${tour.style}</strong> - ${describeStyle(tour.style)}`// create functions that describe it
      modalServiceLevel.innerHTML = `<strong>${tour.service}</strong> – ${describeService(tour.service)}`
      modalPhysicalRating.innerHTML = `<strong>${tour.rating}</strong> – ${describePhysic(tour.rating)}`
      modalTripType.innerHTML = `<strong>${tour.type}</strong> – ${describeType(tour.type)}`
      modalAgeReq.innerHTML = `<strong>${tour.age}</strong> – ${describeAge(tour.age)}`
      modalPrice.innerHTML = `$${tour.price}`
      modalImg.src = tourImgage
;
      
      
      
      modal.style.display = 'flex';
    });
  })

  };
  
  
  // Close modal function
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Close modal via X button
  modalClose.addEventListener('click', closeModal);
  
  // Close modal on background click
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
});

