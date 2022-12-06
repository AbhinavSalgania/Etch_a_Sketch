let gridContainer = document.querySelector(".gridContainer");

function createGrid(size)
{
    for (let i = 0; i < size*size; i++) 
        {
            gridContainer.style.gridTemplateColumns = "repeat(${size}, 1fr)";
            gridContainer.style.gridTemplateRows = "repeat(${size}, 1fr)";

                let square = document.createElement("div");
                square.style.backgroundColor = "yellow";
                square.style.border = "1px solid black";

                square.addEventListener('mouseenter', function(e) {
                    e.target.style.backgroundColor = "black";
                    });

                gridContainer.insertAdjacentElement("beforeend", square);
            }
}

createGrid(16); 