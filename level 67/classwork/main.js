function catAndMouse(x){
    const dots = String.length - 2;
    return dots > 3 //"Escaped" : "Caught";
}
console.log(catAndMouse("C...M")); //caught
console.log(catAndMouse("C....M")); //caught
console.log(catAndMouse("C.....M")); //escaped
console.log(catAndMouse("C..M")); //caught