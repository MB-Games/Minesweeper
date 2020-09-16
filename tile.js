class Tile {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.size = tileSize;
        this.colour = 200;
        this.isMine = this.makeMine();
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
        switch(this.isMine) {
            case true:
                fill(255, 0, 0);
                break;
            default:
                fill(0, 255, 0);
        }
        rect(this.x, this.y, this.size, this.size);
    }

    makeMine() {
        switch(Math.floor(Math.random() * 10)) {
            case 0:
                return true;
            default:
                return false;
        }
    }
}

Tile.prototype.toString = function() {
    return "y: " + this.x + " x: " + this.y;
}