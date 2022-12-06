let gridContainer = document.querySelector(".gridContainer");
let currentColor = "black";
let currentlyActive = false;

//create the grid with the size of the slider
// and call the colorSquare function when mouse is over the squares
// using appendChild instead of insertAdjacentElement because it is faster
// Also, add a border to the squares to make them visible
// and make the background of the squares white

function createGrid(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.border = "1px solid black";
        square.style.backgroundColor = "white";

        square.addEventListener('mouseover', colorSquare);
        gridContainer.appendChild(square);
    }
}

// create the grid with the size of 16
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

// When reset button is clicked, make all the squares white
// and make the color picker show black and the slider show 16
// and make the grid 16x16

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function(){
    let squares = document.querySelectorAll('.gridContainer div');
    squares.forEach(square => square.style.backgroundColor = "white");

    currentColor = "black";
    chooseColor.value = "black";
    slider.value = 16;
    document.querySelector('.value').textContent = 16;

    let squares2 = document.querySelectorAll('.gridContainer div');
    squares2.forEach(square => square.remove());
    createGrid(16);
});

// slider function to change the size of the grid

const slider = document.querySelector('#slider');
slider.addEventListener('input', function(){
    let squares = document.querySelectorAll('.gridContainer div');
    squares.forEach(square => square.remove());
    createGrid(this.value);
});

// when page is reset, make color picker show black and slider show 16
chooseColor.value = currentColor;
slider.value = 16;

// As the user changes the slider, the slider value is shown

slider.addEventListener('input', function(){
    document.querySelector('.value').textContent = this.value;
});