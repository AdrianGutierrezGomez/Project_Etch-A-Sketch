var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// Display the default slider value
output.innerHTML = slider.value + ' x '+ slider.value; 
let userNumberRows = 16
let userNumberColumns = 16
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + ' x ' + this.value;
  userNumberColumns = this.value;
  userNumberRows = this.value;
}


const clearBtn = document.getElementById("clear");
const container = document.querySelector(".container");
const generateBtn = document.getElementById("generate");
const colorPicked = document.getElementById("colorpicker").value;

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
        coloredColumn.addEventListener("mouseenter", () => {
            coloredColumn.setAttribute('style', `background:${colorPicked}`)
        }); 
    });
}

createGrid(16,16);


clearBtn.addEventListener('click',()=>{
    let allColumns = document.querySelectorAll(".column");
    for(let i = 0; i < allColumns.length; i++){
        allColumns[i].setAttribute('style', 'background:white');
    };
});

generateBtn.addEventListener('click', ()=>{
    let allColumns = document.querySelectorAll(".column");
    let allRows = document.querySelectorAll(".row");
    for(let i = 0; i < allRows.length; i++){
        allRows[i].remove();
    };
    for(let i = 0; i < allColumns.length; i++){
        allColumns[i].remove();
    };
    createGrid(userNumberColumns,userNumberRows);
    
   console.log(userNumberColumns, userNumberRows);
});



