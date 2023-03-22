let size = 16;

function createGrid(size) {
    const container = document.querySelector('#grid-container');
    container.setAttribute(
        'style', `display: grid; 
        grid-template-columns: repeat(${size}, 1fr [col-start]); 
        grid-template-rows: repeat(${size}, 1fr [row-start])`
    );

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

function addBlockColoring() {
    const gridItems= document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', function() {
            item.classList.add('colored');
        })
    })
}

function clearSketchArea() {
    const gridItems= document.querySelectorAll('.grid-item')
    gridItems.forEach((item) => {
        item.classList.remove('colored');
    })
}

createGrid(size);
addBlockColoring()

const input = document.querySelector('input')
const errorMsg = document.querySelector('#error-msg')

input.addEventListener('input', function() {
    size = parseInt(input.value);
    console.log(size);
    if (size > 100) {
        errorMsg.textContent = "Size cannot exceed 100.";
    } else if (isNaN(size)) {
        errorMsg.textContent = "Size must be a number."
    } else {
        errorMsg.textContent = "";
        clearSketchArea();
        createGrid(size);
        addBlockColoring();
    }
})