'use strict'

const list = document.querySelector('.js-list');

const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameAnastacio = 'Anastacio';
const kittenDescOne = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceSiames = 'Siamés'
const kittenOne = `
<li class="card">
<article>
<img class="card_img" src="${kittenImageOne}" alt="siames-cat" />
<h3 class="card_title">${kittenNameAnastacio.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceSiames}</h4>
<p class="card_description">
${kittenDescOne}
</p>
</article>
</li>
`;


const kittenImageTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameFiona = 'Fiona';
const kittenDescTwo = 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRaceSphynx = 'Sphynx'
const kittenTwo = `
<li class="card">
<img class="card_img" src="${kittenImageTwo}" alt="sphynx-cat" />
<h3 class="card_title">${kittenNameFiona.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceSphynx}</h4>
<p class="card_description">
  ${kittenDescTwo}</p>
</li>`

const kittenImageThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameCielo = 'Cielo';
const kittenDescThree = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRaceMaine = 'Maine Coon'
const kittenThree = `
<li class="card">
<img
  class="card_img"
  src="${kittenImageThree}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenNameCielo.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceMaine}</h4>
<p class="card_description">
  ${kittenDescThree}
</p>
</li>`;
list.innerHTML = kittenOne + kittenTwo + kittenThree;