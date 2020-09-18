var gridTileX = 0;
var gridTileY = 0;
var gameCanvasSize = 200;
var tileSize = 20;

var gameTiles = [];

function setup() {
    let myCanvas = createCanvas(gameCanvasSize, gameCanvasSize);
    myCanvas.parent("canvas");
    background(230);
    placeTiles();
    determineValue();
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