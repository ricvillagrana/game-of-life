const Cell = function (alive) {
    
    this.alive = alive || false;
    
    this.dead = () => { 
        this.alive = false; 
    }
    this.live = () => { 
        this.alive = true; 
    }
}

module.exports =  Cell;