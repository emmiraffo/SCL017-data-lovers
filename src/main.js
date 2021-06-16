import data from './data/lol/lol.js';

import {dropdown} from './data.js';


const container = document.getElementById('container');
const list = Object.values(data.data);

//listeners
const button = document.getElementById("dButton");
button.addEventListener("click", ()=>{
    dropdown()
});

function limpiarLista() {
    while(container.hasChildNodes())
        container.removeChild(container.firstChild);
}


function filtrarPorRoles(event) {
    console.log(event.path[1].dataset.tags)
    var filterTag = event.path[1].dataset.tags
    const filteredList = list.filter(function(elementoArray){
       return elementoArray.tags.includes(filterTag)
    })
    console.log(filteredList)

    limpiarLista()
    dibujarHeroes(filteredList)
}

document.querySelectorAll(".rol").forEach(function(element) {
    element.addEventListener("click", filtrarPorRoles)
});


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

dibujarHeroes(list)





