// 'use strict';

// // Basic utility function
// function onEvent(event, selector, callback) {
//   return selector.addEventListener(event, callback);
// }

// function select(selector, parent = document) {
//   return parent.querySelector(selector);
// }

// const shapeSelect = select('#shape'); // Changed to select, not button
// const colorSelect = select('#color'); // Changed to select, not button
// const createButton = select('#create-button');
// const grid = select('#grid');

// let selectShape = '';
// let selectColor = '';

// onEvent('change', shapeSelect, () => { // Changed to 'change' event
//   selectShape = shapeSelect.value; // Retrieve value from select, not button
// });

// onEvent('change', colorSelect, () => { // Changed to 'change' event
//   selectColor = colorSelect.value; // Retrieve value from select, not button
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

const shapes = []; // Arrays are used to store shape objects

class Shape {
    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    // Accessor properties get the shape's name
    get name() {
        return this._name;
    }

    // Accessor properties get the color's name
    get color() {
        return this._color;
    }

    // methods of returning shape, color
    getInfo() {
        return `Shape: ${this._name}, Color: ${this._color}`;
    }
}


// Use a map to convert color code to color name
function colorCodeToName(colorCode) {
    const colorMap = {
        '#09f': 'blue',
        '#9f0': 'green',
        '#f09': 'pink',
        '#90f': 'purple',
        '#f90': 'orange',
    };
    return colorMap[colorCode.toLowerCase()] || 'unknown';
}

function createShape() {
    if (shapes.length >= 24) {
        console.log('The quantity cannot exceed 24');
        return; // 
    }

    const shapeType = select('#shape').value;
    const colorCode = select('#color').value;
    const colorName = colorCodeToName(colorCode); //Use a map to convert color code to color name
    const newShape = new Shape(shapeType, colorName);
    shapes.push(newShape); // 保存新创建的形状对象到数组Save the newly created shape object to the array

    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shapeType}`;
    shapeDiv.style.backgroundColor = colorCode;// 设置背景颜色为颜色代码

    // unit 编号：Calculate unit number: use current shape position as number
    const unitNumber = shapes.length;
    shapeDiv.onclick = function () {
        const infoDiv = select('#shape-info');
        // output the text: Unit3:square orange
        infoDiv.textContent = `Unit ${unitNumber}: ${shapeType} ${colorName} `;
    };

    document.getElementById('grid').appendChild(shapeDiv);
}