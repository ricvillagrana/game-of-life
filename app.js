const Universe = require ('./app/Universe');
const Sleep = require('sleep');

universe = new Universe();

while (true) {
    console.log('\033[2J');
    universe.show();
    universe.nextGeneration();
    Sleep.msleep(500);
}
//console.log("Dimentions: X = " + universe.getDimentions.x + ", Y = " + universe.getDimentions.y)
