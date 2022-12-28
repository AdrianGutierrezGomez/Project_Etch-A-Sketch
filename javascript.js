var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// Display the default slider value
output.innerHTML = slider.value + ' x '+ slider.value; 

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value + ' x ' + this.value;
}

let userNumberRows = slider.oninput;
let userNumberColumns = slider.oninput;
const clear = document.getElementById("clear");
const container = document.querySelector(".container");

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
}

createGrid(16,16)