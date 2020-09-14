class Tile {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.size = tileSize;
        this.colour = random(0, 255)
    }

    display(){
        fill(this.colour)
        rect(this.x, this.y, this.size, this.size);
    }
}