'use strict';

const list = document.querySelector('.js-list');
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona',
  desc: 'Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.',
  race: 'Sphynx',
};
const kittenData_3 = {
  image: 'https://dev.adalab.es/maine-coon-cat.webp',
  name: 'Cielo',
  desc: 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.',
  race: 'Maine Coon',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

function renderKitten(data) {
  let race = data.race;
  if (data.race === undefined) {
    race = 'Uy no sabemos su raza';
  }
  const kitten = `
 <li class="card">
 <img
   class="card_img"
   src="${data.image}"
   alt="maine-coon-cat"
 />
 <h3 class="card_title">${data.name}</h3>
 <h4 class="card_race">${race}</h4>
 <p class="card_description">
   ${data.desc}
 </p>
 </li>`;
  return kitten;
}
const kittenOne = renderKitten(kittenDataList[0]);
const kittenTwo = renderKitten(kittenDataList[1]);
const kittenThree = renderKitten(kittenDataList[2]);

list.innerHTML = kittenOne + kittenTwo + kittenThree;
// const renderRace = ()

const inputSearchDesc = document.querySelector('.js_in_search_desc');
const cardOne = document.querySelector('.js-card-one');
const cardTwo = document.querySelector('.js-card-two');
const cardThree = document.querySelector('.js-card-three');
const buttonSearch = document.querySelector('.js-button-search');

const filterKitten = (event) => {
  event.preventDefault();
  const searchDesc = inputSearchDesc.value;
  list.innerHTML = '';

  if (kitttenData_1.desc.includes(searchDesc)) {
    list.innerHTML += kittenOne;
  }
  if (kitttenData_2.desc.includes(searchDesc)) {
    list.innerHTML += kittenTwo;
  }
  if (kitttenData_3.desc.includes(searchDesc)) {
    list.innerHTML += kittenThree;
  }
};

buttonSearch.addEventListener('click', filterKitten);

const addButton = document.querySelector('.js-btn-add');
const cancelButton = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');

function addNewKitten(event) {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  }
}

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    newForm.classList.remove('collapsed');
  } else {
    newForm.classList.add('collapsed');
  }
}

cancelButton.addEventListener('click', hideNewCatForm);
const plusButton = document.querySelector('.js-plus-btn');
plusButton.addEventListener('click', handleClickNewCatForm);
addButton.addEventListener('click', addNewKitten);
