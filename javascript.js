var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// Display the default slider value
output.innerHTML = slider.value + ' x '+ slider.value; 
let userNumberRows = 16;
let userNumberColumns = 16;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + ' x ' + this.value;
  userNumberColumns = this.value;
  userNumberRows = this.value;
}

let currentMode = "color";
let currentColor = "#000000";

const clearBtn = document.getElementById("clearBtn");
const container = document.querySelector(".container");
const generateBtn = document.getElementById("generateBtn");
const colorPicker = document.getElementById("colorpicker");
const randomBtn = document.getElementById("randomBtn");
const colorBtn = document.getElementById("colorBtn");
const eraserBtn = document.getElementById("eraserBtn");


colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value;
  });


function activateButton(newMode) {
    if (currentMode === 'random') {
      randomBtn.classList.remove('active');
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active');
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active');
    }
  
    if (newMode === 'random') {
      randomBtn.classList.add('active');
    } else if (newMode === 'color') {
      colorBtn.classList.add('active');
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active');
    }
  }

function setCurrentMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
}

function reloadGrid() {
    let allColumns = document.querySelectorAll(".column");
    for(let i = 0; i < allColumns.length; i++){
        allColumns[i].setAttribute('style', 'background:white');
    };
}
function newGrid(){
    let allColumns = document.querySelectorAll(".column");
    let allRows = document.querySelectorAll(".row");
    for(let i = 0; i < allRows.length; i++){
        allRows[i].remove();
    };
    for(let i = 0; i < allColumns.length; i++){
        allColumns[i].remove();
    };
    createGrid(userNumberColumns,userNumberRows);
};

function changeColor(e) {
    
    if (currentMode === 'random') {
      const randomR = Math.floor(Math.random() * 256);
      const randomG = Math.floor(Math.random() * 256);
      const randomB = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe';
    }
  };

function createGrid(numberRows,numberColumns){
    for(let i = 0; i < numberRows; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for(let j = 0; j < numberColumns; j++){
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);        
        }
    }
    let coloredColumns = document.querySelectorAll(".column");
    coloredColumns.forEach((coloredColumn) => {
        coloredColumn.addEventListener("mouseenter", changeColor);
    });
};

createGrid(16,16);

colorBtn.onclick = () => setCurrentMode('color');
randomBtn.onclick = () => setCurrentMode('random');
eraserBtn.onclick = () => setCurrentMode('eraser');
clearBtn.onclick = () => reloadGrid();
generateBtn.onclick = () => newGrid();

