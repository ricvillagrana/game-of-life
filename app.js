const Universe = require ('./app/Universe');
const Sleep = require('sleep');
const RandomGrid = require('./data/grids/RandomGrid');

grid = new RandomGrid(30);
universe = new Universe(grid.getGrid());

while (true) {
    console.log('\033[2J');
    universe.show();
    universe.nextGeneration();
    Sleep.msleep(200);
}
