// Requiring the Cell class
const Cell = require('./Cell');
const grid = require('../data/grids/empty');

let gridToCells = gird => { // Convert the 0 and 1 matrix to Cell class matrix
    let newGrid = [];
    grid.forEach((row, x) => { // X axis
        newGrid[x] = [];
        row.forEach((element, y) => { // Y axis
            // Asign new cell, died when element equals to 0 and alive when 1
            newGrid[x][y] = new Cell(element == 1); 
        });
    });
    return newGrid;
}


// Creating Universe
const Universe = function () {
    this.grid = gridToCells(grid);
    
    this.show = () => { // Show grid in a more friendly way
        let output = ""
        this.grid.forEach(row => {
            row.forEach(element => {
                output += element.alive && "██" || "   ";
            });
            output += "\n";
        });
        console.log(output);
    }

    this.getGrid = () => {
        return this.grid;
    }
}

module.exports = Universe;
