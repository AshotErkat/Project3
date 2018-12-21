var livingCreature = require("./livingCreature.js");
module.exports = class Grass extends livingCreature {
    constructor(x, y) {
        super(x,y);
    }
       getNewCoordinates(){ 
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);

    }
    mul() {
        var array = this.chooseCell(0);
        this.multiply++;
        var empty = array[Math.floor(Math.random() * array.length)];
        this.multiply++
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}


