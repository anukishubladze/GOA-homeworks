function AnimalCountermeasure(animalType, threatLevel, effectiveRange) {
    this.animalType = animalType;
    this.threatLevel = threatLevel;
    this.effectiveRange = effectiveRange;
    
    // Method to deploy the countermeasure
    this.deploy = function() {
        return `Deploying countermeasure for ${this.animalType} with threat level ${this.threatLevel} at range of ${this.effectiveRange} meters.`;
    }
}

// Creating some example countermeasures
const bearCountermeasure = new AnimalCountermeasure("Bear", "High", 50);
const deerCountermeasure = new AnimalCountermeasure("Deer", "Low", 30);
const wolfCountermeasure = new AnimalCountermeasure("Wolf", "Medium", 40);

// Testing the deploy method
console.log(bearCountermeasure.deploy());
console.log(deerCountermeasure.deploy());
console.log(wolfCountermeasure.deploy());