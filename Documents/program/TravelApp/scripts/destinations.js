import { data } from '../scripts/tours.js'
import { describeAge, describeService, describeStyle, describePhysic, describeType } from './descriptions.js'


// modal


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

//////////////////////////////////////////


const allTours = document.querySelector('.all-tours')

Object.entries(data).forEach(([continent, obj]) => {

  const newRow = document.createElement('div')
  newRow.classList.add('row', `${continent}-row`)
  newRow.id = `${continent}`

  newRow.setAttribute('data-target', `${continent}-section`)

  newRow.innerHTML = `
    <h2>${continent.toUpperCase()}</h2>
    <p>${obj.description}</p>
    <div class='tours'></div>
  `

  allTours.appendChild(newRow)

  const toursContainer = newRow.querySelector('.tours')

obj.tours.slice(0, 4).forEach((tour) => {
    const tourBlock = document.createElement('div')
    tourBlock.classList.add('tour-card')

    tourBlock.innerHTML = `
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
    `
    tourBlock.style.backgroundImage = `url(${tour.img})`
    toursContainer.appendChild(tourBlock)


    const btnViewTour = tourBlock.querySelector('.openModal');

    // Add click listener to show modal with member info
    toursContainer.addEventListener('click', () => {
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
      modalImg.src = tour.img;
      
      
      
      modal.style.display = 'flex';
    });

    


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
    }})


  })
})


// scroll effect 

const cards = document.querySelectorAll(".card")

cards.forEach(card => {
  card.addEventListener('click', () => {
    
    const targetId = card.getAttribute('data-target')
    
    window.location.href = `./allTours.html?region=${encodeURIComponent(targetId)}`

  })
})
