let gridSquareX = 0;
let gridSquareY = 0;
let gameCanvasSize = 600;
let shapeSize = 20;

function setup() {
    let myCanvas = createCanvas(gameCanvasSize, gameCanvasSize);
    myCanvas.parent("canvas");
    background(230);  
}

function draw() {
    fill(255, 0, 0);
    if (gridSquareX != gameCanvasSize) {
        rect(gridSquareX, gridSquareY, shapeSize, shapeSize);
        gridSquareX = gridSquareX + shapeSize;
    } else if (gridSquareY != gameCanvasSize) {
        gridSquareX = gridSquareX - gameCanvasSize;
        rect(gridSquareX, gridSquareY, shapeSize, shapeSize);
        gridSquareY = gridSquareY + shapeSize;
    }
}
