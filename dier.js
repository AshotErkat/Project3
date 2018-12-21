var livingCreature = require("./livingCreature.js");
module.exports = class Dier extends livingCreature {
    constructor(x, y) {
        this.energy=1;
        this.x = x;
        this.y = y;
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

    getNewDirections() {
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
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found;
    }
    eat() {
        var food = random(this.chooseCell(4))
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
        }
    }
    die() {
        if (this.energy = 0) {
            matrix[this.y][this.x] = 0
            for (var i in dierArr) {
                if (dierArr[i].x == this.x && dierArr[i].y == this.y) {
                    dierArr.splice(i, 1)
                }
            }
        }
    }
}