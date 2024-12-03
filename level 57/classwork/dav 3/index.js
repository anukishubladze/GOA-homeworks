function checkEligibility() {
    const age = document.getElementById("age").value;
    const experience = document.getElementById("experience").value;

    if (age > 25 && experience >= 5) {
        console.log("You are accepted at work :)");
    } else {
        console.log("You aren't accepted at work :(");
    }
}