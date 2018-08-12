const Universe = require ('./app/Universe');
const Sleep = require('sleep');
const RandomGrid = require('./data/grids/RandomGrid');
const line = require('./data/grids/patterns/line');

randomGrid = new RandomGrid(30); // Size should be smaller than the console rows
// grid = randomGrid.getGrid();
grid = line; // Line pattern grid

universe = new Universe(grid);

while (true) {
    console.log('\033[2J');     // "Clear" console 
    universe.show();            // Show grid
    universe.nextGeneration();  // Generate next generation
    Sleep.msleep(300);          // Speed
}
