// Requiring the Cell class
const Cell = require('./Cell');
const grid = require('../data/grids/empty');

// Creating Universe
const Universe = function () {
    this.grid = grid;

    this.show = () => {
        console.log(this.grid);
    }
}

module.exports = Universe;
