'use strict';

const list = document.querySelector('.js-list');

const inputSearchDesc = document.querySelector('.js_in_search_desc');
const cardOne = document.querySelector('.js-card-one');
const cardTwo = document.querySelector('.js-card-two');
const cardThree = document.querySelector('.js-card-three');
const buttonSearch = document.querySelector('.js-button-search');



const addButton = document.querySelector('.js-btn-add');
const cancelButton = document.querySelector('.js-btn-cancel');
const newForm = document.querySelector('.js-new-form');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');
const form = document.querySelector('.js-form')

function uy() {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  }
}

function addKitten() {
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  const kitten = `
 <li class="card">
 <img
   class="card_img"
   src="${valuePhoto}"
   alt="maine-coon-cat"
 />
 <h3 class="card_title">${valueName}</h3>
 <h4 class="card_race">${valueRace}</h4>
 <p class="card_description">
   ${valueDesc}
 </p>
 </li>`;
  return kitten;
}


function addNewKitten(event) {
  event.preventDefault();
  uy();
  list.innerHTML += addKitten();
  form.reset();
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
  // race: 'Maine Coon',
};

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];



function renderKittenList (){
 
  for(const kittenItem of kittenDataList){
    let race = kittenItem.race;
    if (kittenItem.race === undefined) {
      race = 'Uy no sabemos su raza';
    }

    list.innerHTML += `
    <li class="card">
    <img
      class="card_img"
      src="${kittenItem.image}"
      alt="maine-coon-cat"
    />
    <h3 class="card_title">${kittenItem.name}</h3>
    <h4 class="card_race">${race}</h4>
    <p class="card_description">
      ${kittenItem.desc}
    </p>
    </li>`;
  }
}

renderKittenList()

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

const filterKitten = (event) => {
  event.preventDefault();
  const searchDesc = inputSearchDesc.value;
  list.innerHTML = '';

  for (const kittenItem of kittenDataList) {
     if (kittenItem.desc.includes(searchDesc)){
      list.innerHTML += renderKitten(kittenItem)
     }
  }
};

buttonSearch.addEventListener('click', filterKitten);

