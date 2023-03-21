const size = 16;
const container = document.querySelector('#container');
container.setAttribute(
    'style', `display: grid; 
    grid-template-columns: repeat(${size}, 1fr [col-start]); 
    grid-template-rows: repeat(${size}, 1fr [row-start])`
)

const div = document.createElement('div')

for (let row = 1; row <= size; row++) {
    for (let col = 1; col <= size; col++) {
        const div = document.createElement('div')
        div.classList.add('grid-box')
        div.setAttribute(
            'style', `grid-column: ${col} / span 1; grid-row: ${row} / span 1` 
        )
        container.appendChild(div) 
    }
}
// col = 3
// row = 1
// div.classList.add('grid-box')
// div.setAttribute(
//     'style', `grid-column: ${col} / span 1; grid-row: ${row} / span 1` 
// )
// container.appendChild(div)