function placeTiles() {
    for (let i = 0; i < (gameCanvasSize / tileSize); i++) {
        var tempTiles = [];
        for (let j = 0; j < (gameCanvasSize / tileSize); j++) {
            tempTiles.push(new Tile(gridTileX, gridTileY, tileSize));
            tempTiles[j].makeMine();
            tempTiles[j].display();
            gridTileX = gridTileX + tileSize;
        }
        gameTiles.push(tempTiles);
        gridTileY = gridTileY + tileSize;
        gridTileX = gridTileX - gameCanvasSize;
    }
}


function determineValue() {
    for (let i = 0; i < (gameCanvasSize / tileSize); i++) {
        for (let j = 0; j < (gameCanvasSize / tileSize); j++) {
            var value = 0;
            if (!gameTiles[i][j].getIsMine()) {
                for (let xCord = -1; xCord < 2; xCord++) {
                    for (let yCord = -1; yCord < 2; yCord++) {
                        try {
                            if (gameTiles[i + xCord][j + yCord].getIsMine()) {
                                value = value + 1;
                            }
                        }
                        catch(error){
                        }
                    }
                }
                gameTiles[i][j].setValue(value);
            }
        }
    }
}