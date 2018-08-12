const Cell = require('./Cell');

let gridToCells = grid => { // Convert number matrix into Cell matrix
    let newGrid = [];
    grid.forEach((row, x) => { // X axis
        newGrid[x] = [];
        row.forEach((element, y) => { // Y axis
            // Asign new cell, dead when element equals to 0 and alive when 1
            newGrid[x][y] = new Cell(element == 1, x, y); 
        });
    });
    return newGrid;
}

const Universe = function (grid) {
    this.grid = gridToCells(grid);
    
    this.show = () => { // Show grid in a more friendly way
        let output = "";
        let line = ""
        const size = this.getDimentions();

        for (let i = 0; i < size.x; i++) { // Generate line of edges
            line += "══";
        }
        output += "╔" + line + "╗\n"; // Top edge
        this.grid.forEach(row => {
            output += "║"; // Left edge
            row.forEach(cell => {
                output += cell.alive && "██" || "  "; // Cell alive or dead
            });
            output += "║\n"; // Right edge
        });
        console.log(output + "╚" + line + "╝"); // Bottom edge
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
        
        for (let x = cell.position.x-1; x <= cell.position.x+1; x++) { // From X-1 to X+1
            for (let y = cell.position.y-1; y <= cell.position.y+1; y++) { // From Y-1 to Y+1
                let skip = false;
                if(x < 0 
                    || x >= size.x 
                    || y < 0 
                    || y >= size.y 
                    || (cell.position.x == x && cell.position.y == y)
                ) skip = true; // Skip if the nighbor is out of bounds
                
                if(!skip && this.grid[x][y].alive) totalNeighbors++; // Increments when neighbor exists and it is alive
            }           
        }
        return totalNeighbors;
    }
    
    this.applyRules = neighborsGrid => {
        neighborsGrid.forEach((row, x) => {
            row.forEach((neighbors, y) => {
                let lives = false;
                if(this.grid[x][y].alive){ // Any live cell ...
                    // ... with fewer than two live neighbors dies, as if by under population.
                    if(neighbors < 2) lives = false;
                    // ... with two or three live neighbors lives on to the next generation.
                    if(neighbors == 2 || neighbors == 3) lives = true;
                    // ... with more than three live neighbors dies, as if by overpopulation.    
                    if(neighbors > 3) lives = false;
                }else{
                    //Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
                    if(neighbors == 3) lives = true;
                }
                if(lives) this.grid[x][y].live();
                else this.grid[x][y].dead();
            });
        });
    }
}

module.exports = Universe;
