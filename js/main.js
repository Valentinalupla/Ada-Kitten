'use strict'

const list = document.querySelector('.js-list');

const kittenImageOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameAnastacio = 'Anastacio';
const kittenDescOne = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceSiames = 'Siamés'
const kittenOne = `
<li class="card js-card-one">
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
<li class="card js-card-two">
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
<li class="card js-card-three">
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


const inputSearchDesc = document.querySelector('.js_in_search_desc').value;
const cardOne = document.querySelector('.js-card-one');
const cardTwo = document.querySelector('.js-card-two');
const cardThree = document.querySelector('.js-card-three');
let race = ''

if (kittenDescOne.includes(inputSearchDesc) ) {

}else{
  cardOne.classList.add('collapsed');
}
if (kittenDescTwo.includes(inputSearchDesc) ) {

}else{
  cardTwo.classList.add('collapsed');
}
if (kittenDescThree.includes(inputSearchDesc) ) {

}else{
  cardThree.classList.add('collapsed');
}
// race.innerHTML = `Uy que despiste, no sabemos su raza`;


const addButton = document.querySelector('.js-btn-add');
const cancelButton = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form')
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

addButton.addEventListener('click', () => {

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo'
  } else {
  
}
})

cancelButton.addEventListener('click', () => {
  newForm.classList.add('collapsed')
})
