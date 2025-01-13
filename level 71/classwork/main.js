function match(usefulness, months) {
    // Calculate total usefulness (sum of array)
    const totalUsefulness = usefulness.reduce((sum, skill) => sum + skill, 0);
    
    // Calculate current needs after exponential decay
    // Formula: N(t) = N₀(1 - r)^t
    const initialNeeds = 100;
    const decayRate = 0.15;
    const currentNeeds = initialNeeds * Math.pow(1 - decayRate, months);
    
    // Return match result
    return totalUsefulness >= currentNeeds ? "Match!" : "No match!";
}

console.log(match([15, 26, 19], 0));   // "No match!" (60 < 100)
console.log(match([15, 26, 19], 6));   // "Match!" (60 > 37.974...)
console.log(match([5, 5, 5], 12));     // "No match!" (15 < 14.409...)