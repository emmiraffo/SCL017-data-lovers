import data from './data/lol/lol.js';
import {dropdownTags, dropdownPower, dropdownDifficulty} from './data.js';

import { filtrarPorRoles, filtrarPorPoder , filtrarPorDifficultad, barraBuscadora} from './hero.js';



const container = document.getElementById('container');
const list = Object.values(data.data);


function limpiarLista() {
    while(container.hasChildNodes())
        container.removeChild(container.firstChild);
}



/*function filtrarPorDifficultad (event) {
    var filterDifficulty= event.currentTarget.dataset.difficulty
    const difficultyList = list.filter(elementoArray => elementoArray.info.difficulty == filterDifficulty);
    limpiarLista();
    dibujarHeroes(difficultyList)
}*/

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

        const enlaceChampion = document.createElement('a');
        enlaceChampion.classList.add('enlace');
        enlaceChampion.setAttribute("href","champion?name=" + list[i].name);
        
        champCard.appendChild(img);
        champCard.appendChild(name);
        champCard.appendChild(title);
        enlaceChampion.appendChild(champCard)
    
        container.appendChild(enlaceChampion);
    }
}
dibujarHeroes(list);

function limpiarFiltros (){
    limpiarLista ()
    dibujarHeroes (list)
}




//listeners
const buttonTags = document.getElementById("buttonT");
buttonTags.addEventListener("click", ()=>{
    dropdownTags()
});

document.querySelectorAll(".rol").forEach(function(element) {
    element.addEventListener("click", (event) => {
        let listaFiltrada = filtrarPorRoles(event.currentTarget.dataset.tags, list);
        limpiarLista();
        dibujarHeroes(listaFiltrada);
    })
}); 


const buttonDifficulty = document.getElementById("buttonD");
buttonDifficulty.addEventListener("click", ()=>{
    dropdownDifficulty()
});

document.querySelectorAll(".difficulty").forEach(function(element) {
    element.addEventListener("click", (event) => {
        let listaFiltrada = filtrarPorDifficultad(event.currentTarget.dataset.difficulty, list);
        limpiarLista();
        dibujarHeroes(listaFiltrada);
    })
});



const buttonPower = document.getElementById("buttonP");
buttonPower.addEventListener("click", ()=>{
    dropdownPower()
});

document.querySelectorAll(".partype").forEach(function(element) {
    element.addEventListener("click", (event) => {
        let listaFiltrada = filtrarPorPoder(event.currentTarget.dataset.partype, list);
        limpiarLista();
        dibujarHeroes(listaFiltrada);
        console.log(event.currentTarget.dataset.partype);
    })
}); 
    



/*document.querySelectorAll(".dificultad").forEach(function(element) {
    element.addEventListener("click", filtrarPorDifficultad)
});*/ 

const searchbar = document.getElementById('searchbox');
searchbar.addEventListener('keyup', (e) => {
    let search = barraBuscadora ( e.target.value.toLowerCase()  , list);
    limpiarLista();
    dibujarHeroes(search);
    })


const limpiadorFiltros = document.getElementById("clearFilter");
    limpiadorFiltros.addEventListener("click",  ()=>{
        limpiarFiltros()
    });

//FinListeners

