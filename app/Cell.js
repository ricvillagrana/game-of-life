const Cell = function (alive, xPosition, yPosition) {
    
    this.alive = alive || false;
    this.position = {
        x: xPosition || 0,
        y: yPosition || 0
    };
    
    this.dead = () => { 
        this.alive = false; 
    }
    this.live = () => { 
        this.alive = true; 
    }
}

module.exports =  Cell;