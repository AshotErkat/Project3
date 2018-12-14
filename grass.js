var livingCreature = require("./livingCreature.js");
module.exports = class Grass extends LivingCreature {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 60;
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
    mul() {
        this.multiply++;
        var newCell = random(this.yntrelVandak(0));
        if (this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1]);
            grassArr.push(newGrass);

            this.multiply = 0;
        }
    }
}

