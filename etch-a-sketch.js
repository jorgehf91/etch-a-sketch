const container = document.querySelector('.container');
const buttonsDiv = document.querySelector('.buttons');

let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let color = 'red'; //default color of brush

makeGrid(16, 16);

function makeGrid(r, c) { // r = rows, c = columns
    makeRows(r);
    makeColumns(c);

    //Add an Event listener for each cell div element (256). 
    //The event callbacks draw function to style the bg color
    for (let j = 0; j < cells.length; j++) {
        cells[j].addEventListener('mouseover', draw);
    }
}

function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';   
    }
}
    
function makeColumns(cellNum) {
    for (let j = 0; j < rows.length; j++) {
        for (let k = 0; k < cellNum; k++) {  
            let newCell = document.createElement('div');
            rows[k].appendChild(newCell).className = 'cell';
           
        }
    }
}

//event listener to E key to activate Erasing mode
document.addEventListener('keypress', (e) => {
    console.log(e.code);
    if( e.code === 'KeyE') { //The eraser "color"
        for (let i = 0; i < cells.length; i++) { //the eventlistener from the R keypress event was still active, this solves it.
         cells[i].removeEventListener('mouseover', randomColors);
        }
        color = 'rosybrown';
    }
    else if (e.code === 'KeyB'){ //The brush default color
        for (let i = 0; i < cells.length; i++) { //the eventlistener from the R keypress event was still active, this solves it.
        cells[i].removeEventListener('mouseover', randomColors);
      }
      color = 'red';
    }
    else if (e.code === 'KeyR') {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('mouseover', randomColors);
        }
        //color = randomColors();
    }
});

function draw(e) { //drawing function to callback to eventlistener to each cell --inside makeGrid()--
    e.target.style.backgroundColor = color;
}

function randomColors(e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return color = `rgb(${r}, ${g}, ${b})`;
}

//Make a new grid button
let newGrid = document.createElement('button');
newGrid.textContent = 'NEW GRID';
newGrid.id = 'new-grid-button';
document.body.insertBefore(newGrid, buttonsDiv);

newGrid.addEventListener('click', restart);

//Clear the color of the entire grid
let clearButton = document.createElement('button');
clearButton.textContent = 'CLEAR';
clearButton.id = 'clear-button';
document.body.insertBefore(clearButton, buttonsDiv);

clearButton.addEventListener('click', clear);


function restart(x) {

    let tilesRows = 0;
    let tilesColumns = 0;
    

    for (let p = rows.length; p > 0; p--) { //loop to remove all the cells
        rows[p-1].remove();  
    }

    
    tiles = prompt('Please enter the number of rows for the new grid: ');
    
    //To make sure the input of tiles isn't greater than 100 or less than 0  
    while (tiles > 100 || tiles < 1) {
        alert('You cannot enter a number greater than 100 or less than 1, please try again');
        tiles = prompt('Please enter the number of rows for the new grid: ');

    }
  
    makeGrid(tiles, tiles);

} //end function restart

function clear(e) {
     for (let i = 0; i < cells.length; i++) {
        cells[i].style.backgroundColor = 'rosybrown'; //All cells to the background color of the cells themselves
    }
}
