class Tile {
    constructor(x, y, tileSize) {
        this.x = x;
        this.y = y;
        this.size = tileSize;
        this.colour = 200;
        this.isMine = false;
        this.value = 0;
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

    getValue() {
        return this.value;
    }

    getIsMine() {
        return this.isMine;
    }

    setValue(value) {
        this.value = value;
    }

    clicked() {
        switch(this.isMine) {
            case true:
                fill(255, 0, 0);
                rect(this.x, this.y, this.size, this.size);
                alert("Boom");
                location.reload();
                break;
            default:
                switch(this.value) {
                    case 0:
                        fill(0, 255, 0);
                        rect(this.x, this.y, this.size, this.size);
                        break;
                    default:
                        fill(0, 255, 0);
                        rect(this.x, this.y, this.size, this.size);
                        fill(0);
                        textSize(this.size);
                        textAlign(RIGHT);
                        text(this.value, this.x, this.y, this.size, this.size);
                }
        }
        
    }

    makeMine() {
        switch(Math.floor(Math.random() * 10)) {
            case 9:
                this.isMine = true;
                break;
            default:
                this.isMine = false;
                break;
        }
    }
}

Tile.prototype.toString = function() {
    return "y: " + this.x + " x: " + this.y;
}