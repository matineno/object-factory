'use strict';

//import movies from './movies.js';

// Basic utility function
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function print(arg) {
  console.log(arg);
}

const searchBar = select('.search-bar');
const searchButton = select('.search-button');
const dropList = select('.drop-list');

onEvent('click', searchBar, function() {
    dropList.classList.toggle('visible');
});
  


// document.addEventListener('keydown', function(input) {
//     if (input.key > 2) {

//     }
// });