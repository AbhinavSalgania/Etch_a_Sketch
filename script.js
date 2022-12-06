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
    square.addEventListener('mouseover', colorSquare);
    gridContainer.insertAdjacentElement("beforeend", square);
    }
}

createGrid(16);

// color the squares when mouse is over them
function colorSquare(){
    if(currentlyActive)
    this.style.backgroundColor = currentColor;
}

// turn currently active on and off
// on when clicked in the grid and off when clicked in the grid again

gridContainer.addEventListener('click', () => {
    currentlyActive = !currentlyActive;
    if(currentlyActive){
        document.querySelector('.mode').textContent = "Mode: Coloring";
    } else {
        document.querySelector('.mode').textContent = "Mode: Not Coloring";
    }
});


// color picker function to change the color of the squares
const chooseColor = document.querySelector('#color');
chooseColor.addEventListener('input', function(){
    currentColor = this.value;
});

// reset button function to make the background of the squares white
// and change color back to black
// and show the current color in the color picker

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
    let squares = document.querySelectorAll('.gridContainer div');
    squares.forEach(square => square.style.backgroundColor = 'white');

    currentColor = "black";
    chooseColor.value = currentColor;
});

// slider function to change the size of the grid

const slider = document.querySelector('#slider');
slider.addEventListener('input', function(){
    let squares = document.querySelectorAll('.gridContainer div');
    squares.forEach(square => square.remove());
    createGrid(this.value);
});

// when page is reset, make color picker show black
chooseColor.value = currentColor;

