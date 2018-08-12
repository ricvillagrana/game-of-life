// Requiring the Cell class
const Cell = require('./Cell');
//const grid = require('../data/grids/repeat');
//const grid = require('../data/grids/spaceships/glider');
const grid = require('../data/grids/spaceships/lwss');

let gridToCells = gird => { // Convert the 0 and 1 matrix to Cell class matrix
    let newGrid = [];
    grid.forEach((row, x) => { // X axis
        newGrid[x] = [];
        row.forEach((element, y) => { // Y axis
            // Asign new cell, died when element equals to 0 and alive when 1
            newGrid[x][y] = new Cell(element == 1, x, y); 
        });
    });
    return newGrid;
}


// Creating Universe
const Universe = function () {
    this.grid = gridToCells(grid);
    
    this.show = () => { // Show grid in a more friendly way
        let output = "";
        this.grid.forEach(row => {
            row.forEach(cell => {
                output += cell.alive && "██" || "  ";
            });
            output += "\n";
        });
        console.log(output);
    }
    
    this.getGrid = () => {
        return this.grid;
    }
    
    this.getDimentions = () => {
        return {
            x: this.grid.length,
            y: this.grid[0].length
        };
    }
    
    this.nextGeneration = () => { // Create parallel matrix to count alive neighbors
        let neighborsCountGrid = [] // Contains the number of alive neighbors 
        
        this.grid.forEach((row, x) => {
            neighborsCountGrid[x] = [];
            row.forEach((cell, y) => {
                neighborsCountGrid[x][y] = this.countNeighbors(cell);
            });
        });
        this.applyRules(neighborsCountGrid);
        
        return neighborsCountGrid;
    }
    
    this.countNeighbors = cell => { // Count alive neighbors
        let totalNeighbors = 0;
        const size = this.getDimentions();
        
        for (let x = cell.position.x-1; x <= cell.position.x+1; x++) {
            for (let y = cell.position.y-1; y <= cell.position.y+1; y++) {
                let skip = false;
                if(x < 0 
                    || x >= size.x 
                    || y < 0 
                    || y >= size.y 
                    || (cell.position.x == x && cell.position.y == y)
                ) skip = true; // Skip if the nighbor is out of bounds
                
                if(!skip && this.grid[x][y].alive) totalNeighbors++;
            }           
        }
        return totalNeighbors;
    }
    
    this.applyRules = neighborsGrid => {
        neighborsGrid.forEach((row, x) => {
            row.forEach((neighbors, y) => {
                let live = false;
                if(this.grid[x][y].alive){ // Any live cell ...
                    // ... with fewer than two live neighbors dies, as if by under population.
                    if(neighbors < 2) live = false;
                    // ... with two or three live neighbors lives on to the next generation.
                    if(neighbors == 2 || neighbors == 3) live = true;
                    // ... with more than three live neighbors dies, as if by overpopulation.    
                    if(neighbors > 3) live = false;
                }else{
                    //Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                    if(neighbors == 3) live = true;
                }
                this.grid[x][y] = new Cell(live, x, y)
            });
        });
    }
}

module.exports = Universe;
