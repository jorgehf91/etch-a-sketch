const container = document.querySelector('.container');

let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');
let color = 'red';

makeGrid(16, 16);

function makeGrid(r, c) { // r = rows, c = columns
    makeRows(r);
    makeColumns(c);

    //Add an Event listener for each cell div element (256). 
    //The event fires draw function to style the bg color
    for (let j = 0; j < cells.length; j++) {
        cells[j].addEventListener('mouseover', draw);
    }
}

function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
        //let row = [];
        // row[i] = document.createElement('div');
        // container.appendChild(row[i]).className = 'gridRow';     
    }
    
}
    
function makeColumns(cellNum) {
    for (let j = 0; j < rows.length; j++) {
        for (let k = 0; k < cellNum; k++) {  
            let newCell = document.createElement('div')
            rows[k].appendChild(newCell).className = 'cell';
        }
    }
}

//event listener to E key to activate Erasing mode
document.addEventListener('keypress', (e) => {
    console.log(e.code);
    if( e.code === 'KeyE') { //The eraser "color"
      color = 'rosybrown';
    }
    else if (e.code === 'KeyB'){ //The brush default color
      color = 'red';
    }
});

function draw(e) { //drawing function to callback to eventlistener to each cell --inside makeGrid()--
    e.target.style.backgroundColor = color;
}

// function erase(e) { //erasing function to callback to eventlistener to each cell --inside makeGrid()--
//     e.target.style.backgroundColor = 'white';
// }

//Create a clear button
let clearButton = document.createElement('button');
clearButton.textContent = 'CLEAR';
clearButton.id = 'clear-button';
document.body.insertBefore(clearButton, container);

clearButton.addEventListener('click', restart);


function restart(x) {

    let tilesRows = 0;
    let tilesColumns = 0;
    // for (let i = 0; i < cells.length; i++) {
    //     cells[i].style.backgroundColor = 'white'; //All cells to white, erasing the "paint"
    // }
    

    for (let p = rows.length; p > 0; p--) { //loop to remove all the cells
        rows[p-1].remove();  
       }

    //To make sure the input of tiles isn't greater than 100: 

        tiles = prompt('Please enter the number of rows for the new grid: ');
        
    while (tiles > 100 || tiles < 1) {
        alert('You cannot enter a number greater than 100 or less than 1, please try again');
        tiles = prompt('Please enter the number of rows for the new grid: ');

    }
  
    makeGrid(tiles, tiles);

} //end function restart

