import data from './data/lol/lol.js';

import {dropdownTags} from './data.js';
import {dropdownPower} from './data.js';
import {dropdownDifficulty} from './data.js';


const container = document.getElementById('container');
const list = Object.values(data.data);
//listeners
const buttonTags = document.getElementById("buttonT");
buttonTags.addEventListener("click", ()=>{
    dropdownTags()
});
document.querySelectorAll(".rol").forEach(function(element) {
    element.addEventListener("click", filtrarPorRoles)
}); 

const buttonPower = document.getElementById("buttonP");
buttonPower.addEventListener("click", ()=>{
    dropdownPower()
});
document.querySelectorAll(".power").forEach(function(element) {
    element.addEventListener("click", filtrarPorPoder)
}); 

const buttonDifficulty = document.getElementById("buttonD");
buttonDifficulty.addEventListener("click", ()=>{
    dropdownDifficulty()
});
document.querySelectorAll(".dificultad").forEach(function(element) {
    element.addEventListener("click", filtrarPorDifficultad)
}); 

const limpiadorFiltros = document.getElementById("clearFilter");
    limpiadorFiltros.addEventListener("click",  ()=>{
        limpiarFiltros()
    });
//FinListeners

function limpiarLista() {
    while(container.hasChildNodes())
        container.removeChild(container.firstChild);
}

function filtrarPorRoles(event) {
    var filterTag = event.currentTarget.dataset.tags
    const tagsList = list.filter(elementoArray => elementoArray.tags.includes(filterTag));
    limpiarLista();
    dibujarHeroes(tagsList)
}

function filtrarPorPoder (event) {
    var filterPower = event.currentTarget.dataset.power
    const powerList = list.filter(elementoArray => elementoArray.partype == filterPower);
    limpiarLista();
    dibujarHeroes(powerList)  
}

function filtrarPorDifficultad (event) {
    var filterDifficulty= event.currentTarget.dataset.difficulty
    const difficultyList = list.filter(elementoArray => elementoArray.info.difficulty == filterDifficulty);
    console.log(event.currentTarget.dataset.difficulty)
    limpiarLista();
    dibujarHeroes(difficultyList)
}

function dibujarHeroes(list) {
    
    for (let i=0; i < list.length; i++){

        const champCard = document.createElement('div');
        champCard.classList.add('champCard');
    
        const name = document.createElement('p');
        name.classList.add('name');
        name.textContent = list[i].name;
    
        const title = document.createElement('p');
        title.classList.add('title')
        title.textContent = list[i].title;
    
        const img = document.createElement('img');
        img.src = list[i].img; 
        img.classList.add('photos');
    
        
        champCard.appendChild(img);
        champCard.appendChild(name);
        champCard.appendChild(title);
       
    
        container.appendChild(champCard);
    }
}
dibujarHeroes(list);

function limpiarFiltros (){
    limpiarLista ()
    dibujarHeroes (list)
}