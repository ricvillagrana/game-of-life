const Cell = function (alive) {
    
    this.alive = alive || false;
    
    this.dead = () => { 
        this.alive = false; 
    }
    this.live = () => { 
        this.alive = true; 
    }
    this.state = () => {
        return this.alive;
    }
}

module.exports =  Cell;