
const size = 32;
const container = document.querySelector('#grid-container');
container.setAttribute(
    'style', `display: grid; 
    grid-template-columns: repeat(${size}, 1fr [col-start]); 
    grid-template-rows: repeat(${size}, 1fr [row-start])`
);

const div = document.createElement('div');

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

const gridItems= document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('mouseover', function() {
        console.log("Hovered!")
        item.classList.add('colored')
    })
})