const continentData = {
  asia: ['AF', 'AM', 'AZ', 'BH', 'BD', 'BT', 'BN', 'KH', 'CN', 'CY', 'GE', 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KP', 'KR', 'KW', 'KG', 'LA', 'LB', 'MO', 'MY', 'MV', 'MN', 'MM', 'NP', 'OM', 'PK', 'PS', 'PH', 'QA', 'SA', 'SG', 'LK', 'SY', 'TW', 'TJ', 'TH', 'TL', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE', 'RU', 'XK' ], 
  africa: [  'DZ', 'AO', 'BJ', 'BW', 'BF', 'BI', 'CM', 'CV', 'CF', 'TD', 'KM', 'CG', 'CD', 'CI', 'DJ', 'EG', 'GQ', 'ER', 'ET', 'GA', 'GM', 'GH', 'GN', 'GW', 'KE', 'LS', 'LR', 'LY', 'MG', 'MW', 'ML', 'MR', 'MU', 'MA', 'MZ', 'NA', 'NE', 'NG', 'RW', 'ST', 'SN', 'SC', 'SL', 'SO', 'ZA', 'SS', 'SD', 'SZ', 'TZ', 'TG', 'TN', 'UG', 'EH', 'ZM', 'ZW'], 
  europe: [ 'AL', 'AD', 'AT', 'BY', 'BE', 'BA', 'BG', 'HR', 'CZ', 'DK', 'EE', 'FI',
  'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT',
  'MD', 'MC', 'ME', 'NL', 'MK', 'NO', 'PL', 'PT', 'RO', 'RU', 'SM', 'RS',
  'SK', 'SI', 'ES', 'SE', 'CH', 'UA', 'GB', 'VA', 'XK'], 
  northAmerica: [  'AG', 'BS', 'BB', 'BZ', 'CA', 'CR', 'CU', 'DM', 'DO', 'SV', 'GD', 'GT',
  'HT', 'HN', 'JM', 'MX', 'NI', 'PA', 'KN', 'LC', 'VC', 'TT', 'US', 'PR'], 
  southAmerica: [  'AR', 'BO', 'BR', 'CL', 'CO', 'EC', 'GY', 'PY', 'PE', 'SR', 'UY', 'VE', 'FK'], 
  oceania: ['AU', 'FJ', 'KI', 'MH', 'FM', 'NR', 'NZ', 'PW', 'PG', 'WS', 'SB', 'TO', 'TV', 'VU']
};

const modal = document.getElementById('mapModal');
const modalContent = modal.querySelector('.modal-content');
const startBtn = document.getElementById('start');
const closeBtn = modal.querySelector('.close');

startBtn.addEventListener('click', () => {
  fetch('assets/worldLow.svg')
    .then(res => res.text())
    .then(svgText => {
      if (!svgText.includes('viewBox')) {
        svgText = svgText.replace(
          /<svg([^>]*?)>/,
          '<svg$1 viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">'
        );
      }

      modalContent.insertAdjacentHTML('beforeend', svgText);

      const svg = modalContent.querySelector('svg');
      const allPaths = Array.from(svg.querySelectorAll('path'));

      // Group countries by continent into <g> elements
      for (const [continent, countryIds] of Object.entries(continentData)) {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.classList.add('continent-group', continent);

        countryIds.forEach(id => {
          const country = svg.querySelector(`#${id}`);
          if (country) {
            g.appendChild(country); // Move country into the group
            country.classList.add('land');
          }
        });

        svg.appendChild(g);

        g.addEventListener('mouseenter', () => {
          g.querySelectorAll('path').forEach(path => {
            path.style.fill = getContinentColor(continent);
          });
        });

        g.addEventListener('mouseleave', () => {
          g.querySelectorAll('path').forEach(path => {
            path.style.fill = '';
          });
        });

        g.addEventListener('click', () => {
          window.location.href = `/allTours.html?region=${continent}`;
        });
      }

      modal.style.display = 'flex';
    })
    .catch(err => console.error('Error loading SVG:', err));
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  const svg = modalContent.querySelector('svg');
  if (svg) svg.remove();
});

function getContinentColor(continent) {
  switch (continent) {
    case 'asia': return '#4ecdc4';
    case 'africa': return '#ff6b6b';
    case 'europe': return '#ffd93b';
    case 'northAmerica': return '#1a535c';
    case 'southAmerica': return '#f0a500'
    case 'oceania': return '#9b59b6';;
    default: return '#ccc';
  }
}


// Close modal when clicking outside the modal-content
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
    const svg = modalContent.querySelector('svg');
    if (svg) svg.remove();
  }
});
