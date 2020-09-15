var gridTileX = 0;
var gridTileY = 0;
var gameCanvasSize = 400;
var tileSize = 20;

var gameTiles = [];

function setup() {
    let myCanvas = createCanvas(gameCanvasSize, gameCanvasSize);
    myCanvas.parent("canvas");
    background(230);
    for (let i = 0; i < (gameCanvasSize / tileSize); i++) {
        var tempTiles = [];
        for (let j = 0; j < (gameCanvasSize / tileSize); j++) {
            tempTiles.push(new Tile(gridTileX, gridTileY, tileSize));
            tempTiles[j].display();
            gridTileX = gridTileX + tileSize;
        }
        gameTiles.push(tempTiles);
        gridTileY = gridTileY + tileSize;
        gridTileX = gridTileX - gameCanvasSize;
    }
}

function draw() {
    
}

function mousePressed() {
    for (let i = 0; i < (gameCanvasSize / tileSize); i++) {
        for (let j = 0; j < (gameCanvasSize / tileSize); j++) {
            if((mouseX - gameTiles[i][j].getX() < 20 && mouseX - gameTiles[i][j].getX() > 0) && (mouseY - gameTiles[i][j].getY() < 20 && mouseY - gameTiles[i][j].getY() > 0)) {
                gameTiles[i][j].clicked();
            }
        }
    }
}