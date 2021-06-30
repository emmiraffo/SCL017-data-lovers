import lol from './data/lol/lol.js';

var url = window.location.search;
var urlParams = new URLSearchParams(url);
var name = urlParams.get('id');
var champion = lol.data[name];

const nameChampion = document.getElementById('name');
const img = document.getElementById('img');
const tag = document.getElementById('tag');
const blurb = document.getElementById('blurb');
const partype = document.getElementById('partype');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const magic = document.getElementById('magic');
const difficulty = document.getElementById('difficulty');


img.setAttribute('src',champion.splash) 
nameChampion.textContent = champion.name;
blurb.textContent = champion.blurb;
tag.textContent = "Rol: " + champion.tags;
partype.textContent = "Poder : " + champion.partype;
attack.textContent = "Ataque : " + champion.info.attack;
defense.textContent = "Defensa : " + champion.info.defense;
magic.textContent = "Magia : " + champion.info.magic;
difficulty.textContent = "Dificultad : " + champion.info['difficulty'];
