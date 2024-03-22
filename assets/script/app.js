'use strict';

// Arrays are used to store shape objects
const shapes = [];

// Class definition for Shape
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

    // Method for returning shape and color information
    getInfo() {
        return `Shape: ${this._name}, Color: ${this._color}`;
    }
}

// Function to convert color code to color name using a map
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

// Function to create a new shape
function createShape() {
    // Check if the quantity of shapes exceeds 24
    if (shapes.length >= 24) {
        console.log('The quantity cannot exceed 24');
        return; 
    }

    // Get selected shape type and color code from HTML elements
    const shapeType = document.getElementById('shape-selector').value;
    const colorCode = document.getElementById('color-selector').value;

    // Convert color code to color name
    const colorName = colorCodeToName(colorCode);

    // Create a new Shape object and add it to the shapes array
    const newShape = new Shape(shapeType, colorName);
    shapes.push(newShape);

    // Create a new HTML element for the shape
    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shapeType}`;
    shapeDiv.style.backgroundColor = colorCode;

    // Calculate unit number and add click event to display shape information
    const unitNumber = shapes.length;
    shapeDiv.onclick = function () {
        const infoDiv = document.getElementById('shape-info');
        infoDiv.textContent = `Unit ${unitNumber}: ${shapeType} ${colorName} `;
    };

    // Append the shape element to the container in HTML
    document.getElementById('shape-container').appendChild(shapeDiv);
}
