import lol from './data/lol/lol.js';

var url = window.location.search;
var urlParams = new URLSearchParams(url);
var name = urlParams.get('name');
var champion = lol.data[name];

console.log(champion)

const nameChampion = document.getElementById('name');
const img = document.getElementById('img');
const tag = document.getElementById('tag');

nameChampion.textContent = champion.name;
img.setAttribute('src',champion.splash) 
tag.textContent = champion.tags;
