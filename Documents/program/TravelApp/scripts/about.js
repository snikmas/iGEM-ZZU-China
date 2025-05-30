import { guides } from '../scripts/guides.js'

// modal
// carousel of team members

const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

const modalName = document.getElementById('modal-name');
const modalSpecialization = document.getElementById('modal-specialization');
const modalDescription = document.getElementById('modal-description');
const modalImg = document.getElementById('modal-img');
const modalTours = document.getElementById('modal-tours');
const carouselTeam = document.querySelector('.carousel-team');

Object.entries(guides).forEach(([memberKey, info]) => {

  const newContainer = document.createElement('div');
  newContainer.classList.add("card", 'member');

  newContainer.innerHTML = `
    <div class="member-info">
      <h3 class="name">${info.fullName}</h3>
      <p>Specialization: ${info.specialization}</p>
    </div>
  `;

  newContainer.style.backgroundImage = `url(${info.img})`;

  carouselTeam.appendChild(newContainer);

  // Add click listener to show modal with member info
  newContainer.addEventListener('click', () => {
    // Populate modal fields directly from info object
    modalName.textContent = info.fullName;
    
    modalSpecialization.textContent = Array.isArray(info.specialization) && info.specialization.length > 0 ? info.specialization.join(', ') : 'N/A';

    modalTours.textContent = Array.isArray(info.tours) && info.tours.length > 0 
    ? info.tours.join(', ') 
    : 'N/A';

    modalDescription.textContent = info.intro || 'No description available.';
    modalImg.src = info.img;

    modal.style.display = 'flex';
    });

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
  }
});


const btnReadMore = document.querySelector('.button')
btnReadMore.addEventListener('click', () => {
  const target = document.querySelector('.idea');
  const top = target.getBoundingClientRect().top + window.pageYOffset - 100;

  window.scrollTo({top, behavior: 'smooth'})
})