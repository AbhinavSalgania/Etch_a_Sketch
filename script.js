let gridContainer = document.querySelector(".gridContainer");
let currentlyActive = true;

function createGrid(size){

for (let i = 0; i < size*size; i++) {
    gridContainer.style.gridTemplateColumns = "repeat(${size}, 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(${size}, 1fr)";
    let square = document.createElement("div");
    square.style.backgroundColor = "yellow";
    square.style.border = "1px solid black";
    square.addEventListener('mouseenter', colorSquare);
    gridContainer.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function colorSquare(){
    if(currentlyActive)
        this.style.backgroundColor = "black";
    else
        this.style.backgroundColor = "purple";
}

document.querySelector('body').addEventListener('click', () =>{
    currentlyActive = !currentlyActive;
});