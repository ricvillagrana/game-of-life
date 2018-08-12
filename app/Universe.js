// Requiring the Cell class
const Cell = require('./Cell');
const grid = require('../data/grids/empty');



// Creating Universe
const Universe = function () {
    this.grid = grid;
    
    this.show = () => {
        let output = ""
        grid.forEach(row => {
            row.forEach(element => {
                if (element == 1) output += "██";
                else output += "   ";
            });
            output += "\n";
        });
        console.log(output);
    }

    this.show_binary = () => {
        console.log(this.grid);
    }

    this.getGrid = () => {
        return this.grid;
    }
}

module.exports = Universe;
