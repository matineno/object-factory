// 'use strict';

// // Basic utility function
// function onEvent(event, selector, callback) {
//   return selector.addEventListener(event, callback);
// }

// function select(selector, parent = document) {
//   return parent.querySelector(selector);
// }

// const shapeButton = select('#shape');
// const colorButton = select('#color');
// const createButton = select('#create-button');
// const grid = select('#grid');

// let selectShape = '';
// let selectColor = '';

// onEvent('click', shapeButton, () => {
//   selectShape = shapeButton.value;
// });

// onEvent('click', colorButton, () => {
//   selectColor = colorButton.value;
// });

// class Shape {
//   constructor(name, color) {
//     this._name = name;
//     this._color = color;
//   }

//   getName() {
//     return this._name;
//   }

//   getColor() {
//     return this._color;
//   }

//   getInfo() {
//     return `Name: ${this._name}, Color: ${this._color}`;
//   }
// }

// function createShape() {
//   const newShape = new Shape(selectShape, selectColor);

//   const shapeDiv = document.createElement('div');
//   shapeDiv.classList.add('shape');
//   shapeDiv.classList.add(newShape._name);
//   shapeDiv.classList.add(newShape._color);
//   //shapeDiv.textContent = `${newShape.getName()} (${newShape.getColor()})`;

//   shapeDiv.addEventListener('click', () => {
//     alert(newShape.getInfo());
//   });

//   grid.appendChild(shapeDiv);
// }

// onEvent('click', createButton, createShape);

'use strict';

// Basic utility function
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

const shapeSelect = select('#shape');
const colorSelect = select('#color'); 
const createButton = select('#create-button');
const grid = select('#grid');

let selectShape = '';
let selectColor = '';

onEvent('change', shapeSelect, () => { 
  selectShape = shapeSelect.value; 
});

onEvent('change', colorSelect, () => { 
  selectColor = colorSelect.value;
});

class Shape {
  constructor(name, color) {
    this._name = name;
    this._color = color;
  }

  getName() {
    return this._name;
  }

  getColor() {
    return this._color;
  }

  getInfo() {
    return `Name: ${this._name}, Color: ${this._color}`;
  }
}

function createShape() {
  const newShape = new Shape(selectShape, selectColor);

  const shapeDiv = document.createElement('div');
  shapeDiv.classList.add('shape');
  shapeDiv.classList.add(newShape._name);
  shapeDiv.classList.add(newShape._color);
  //shapeDiv.textContent = `${newShape.getName()} (${newShape.getColor()})`;

  shapeDiv.addEventListener('click', () => {
    alert(newShape.getInfo());
  });

  grid.appendChild(shapeDiv);
}

onEvent('click', createButton, createShape);