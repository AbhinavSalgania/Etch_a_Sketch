let gridContainer = document.querySelector(".gridContainer");
let currentColor = "black";
let currentlyActive = false;

function createGrid(size){

for (let i = 0; i < size*size; i++) {
    gridContainer.style.gridTemplateColumns = "repeat(${size}, 1fr)";
    gridContainer.style.gridTemplateRows = "repeat(${size}, 1fr)";
    let square = document.createElement("div");
    square.style.backgroundColor = "white";
    square.style.border = "1px solid black";
    square.addEventListener('mouseenter', colorSquare);
    gridContainer.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

function colorSquare(){
    if(currentlyActive)
    this.style.backgroundColor = currentColor;
}

document.querySelector('body').addEventListener('click', () =>{
    currentlyActive = !currentlyActive;
});


const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function(){
    currentColor = this.value;
});

// reset button function to make the background of the squares white

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
    let squares = document.querySelectorAll('.gridContainer div');
    squares.forEach(square => square.style.backgroundColor = 'white');
});