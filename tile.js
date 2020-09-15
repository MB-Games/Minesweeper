class Tile {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.size = tileSize;
        this.colour = 200;
    }

    display() {
        fill(this.colour);
        rect(this.x, this.y, this.size, this.size);
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    clicked() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.size, this.size);
    }
}

Tile.prototype.toString = function() {
    return "y: " + this.x + " x: " + this.y;
}