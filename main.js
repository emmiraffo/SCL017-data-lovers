import data from './data/lol/lol.js';

import {dropdown} from './data.js';

const button = document.getElementById("dButton");
    button.addEventListener("click", ()=>{
    dropdown()
    });


const container = document.getElementById('container');
const list = Object.values(data.data);
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

};




