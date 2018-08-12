
const RandomGrid = function (size) {
    this.size = size;
    this.grid = [];

    this.getGrid = () => {
        this.generateGrid();
        return this.grid;
    }

    this.generateGrid = () => {
        for (let x = 0; x < this.size; x++) {
            this.grid[x] = [];
            for (let y = 0; y < this.size; y++) {
                this.grid[x][y] = Math.floor((Math.random() * 2));
            }
        }
    }
}

module.exports = RandomGrid;