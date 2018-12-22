var livingCreature = require("./livingCreature.js");
module.exports = class Vayreni extends livingCreature {
    constructor(x, y) { super(x, y);
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
    move() {
        var array = this.chooseCell(0);
        var empty = array[Math.floor(Math.random() * array.length)];
        this.energy--;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }
    eat() {
        var array = this.chooseCell(1);
        var food = array[Math.floor(Math.random()* array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
            this.energy+=2

        }
    }
    eat1() {
        var array = this.chooseCell(2);
        var food = array[Math.floor(Math.random()* array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
            this.energy+=2

        }
    }
    eat2() {
        var array = this.chooseCell(3);
        var food = array[Math.floor(Math.random()* array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
            this.energy+=2

        }
    }
    eatDier() {
        var array = this.chooseCell(4);
        var food = array[Math.floor(Math.random()* array.length)];
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            for (var i in dierArr) {
                if (dierArr[i].x == newX && dierArr[i].y == newY) {
                    dierArr.splice(i, 1)
                }

            }
            this.x = newX
            this.y = newY
            this.energy+=2

        }
    }
    die() {
        if (this.energy = 0) {
            matrix[this.y][this.x] = 0
            for (var i in vayreniArr) {
                if (vayreniArr[i].x == this.x && vayreniArr[i].y == this.y) {
                    vayreniArr.splice(i, 1)
                }
            }
        }
    }
}