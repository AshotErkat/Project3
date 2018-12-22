var livingCreature = require("./livingCreature.js");
module.exports = class Dier extends livingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
        this.maxMulCount = 7;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    eat() {
        var array = this.chooseCell(1);
        var empty = array[Math.floor(Math.random()* array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            for (var i in vayreniArr) {
                if (vayreniArr[i].x == newX && vayreniArr[i].y == newY) {
                    vayreniArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
            this.energy+=2

        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in dierArr) {
                if (dierArr[i].x == this.x && dierArr[i].y == this.y) {
                    dierArr.splice(i, 1)
                }
            }
        }
    }
}