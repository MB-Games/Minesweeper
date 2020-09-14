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

function checkForClicks() {
    for (let i = 0; i < (gameCanvasSize / tileSize); i++) {
        for (let j = 0; j < (gameCanvasSize / tileSize); j++) {

        }
    }
}

function mousePressed() {
    console.log("Pressed");
    console.log(mouseX);
}