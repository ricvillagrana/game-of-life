const Universe = require ('./app/Universe');
const Sleep = require('sleep');
const grid = require('./data/grids/spaceships/lwss');

universe = new Universe(grid);

while (true) {
    console.log('\033[2J');
    universe.show();
    universe.nextGeneration();
    Sleep.msleep(100);
}
//console.log("Dimentions: X = " + universe.getDimentions.x + ", Y = " + universe.getDimentions.y)
