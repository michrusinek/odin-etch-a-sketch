const size = 16;
const container = document.querySelector('#container');
container.setAttribute(
    'style', `display: grid; grid-template-columns: repeat(${size}, 1fr [col-start]); grid-template-rows: repeat(${size}, 1fr [row-start])`
)