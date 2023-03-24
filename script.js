// inital grid size
let size = 16;
let startDrawing = false;

function createGrid(size) {
    // creating grid
    const container = document.querySelector('#grid-container');
    container.setAttribute(
        'style', `display: grid; 
        grid-template-columns: repeat(${size}, 1fr [col-start]); 
        grid-template-rows: repeat(${size}, 1fr [row-start])`
    );
    // putting divs inside the grid
    for (let row = 1; row <= size; row++) {
        for (let col = 1; col <= size; col++) {
            const div = document.createElement('div')
            div.setAttribute(
                'style', `grid-column: ${col} / span 1; grid-row: ${row} / span 1`
            );
            div.setAttribute('class', 'grid-item');
            container.appendChild(div);
        }
    }


}

function addBlackPen(event) {
        event.target.classList.add('black');
}

function addGridColoring() {
    const gridItems= document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', function(event){
            console.log(event.target);
            addBlackPen(event)
        });
    })
}

function clearSketchArea() {
    const gridItems= document.querySelectorAll('.grid-item')
    gridItems.forEach((item) => {
        item.classList.remove('black');
    })
}

createGrid(size);

document.addEventListener('keydown', (event) => {
    const keyCode = event.code;
    if (keyCode == 'KeyX') {
        startDrawing = !startDrawing;
        addGridColoring();
    }
})


const input = document.querySelector('input');
const errorMsg = document.querySelector('#error-msg');

// Changing the size of the grid, 
// based on the input from the user
input.addEventListener('input', function() {
    size = parseInt(input.value);
    console.log(size);
    if (size > 100) {
        errorMsg.textContent = "Size cannot exceed 100.";
    } else if (isNaN(size)) {
        errorMsg.textContent = "Size must be a number.";
    } else {
        errorMsg.textContent = "";
        clearSketchArea();
        createGrid(size);
    }
})

const clearBtn = document.querySelector("#clear-btn");
clearBtn.addEventListener('click', clearSketchArea);
