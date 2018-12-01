
class Grass extends LivingCreature {

    mul() {
        this.multiply++;
        var newCell = random(this.yntrelVandak(0));
        if(this.multiply >= 8 && newCell) {
            var newGrass = new Grass(newCell[0],newCell[1]);
            grassArr.push(newGrass);
         
            this.multiply = 0;
        }
    }
}
