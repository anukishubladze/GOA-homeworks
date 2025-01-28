const people = [
    {
        name: "John Smith",
        age: 28,
        height: "5'11\"",
        gender: "Male"
    },
    {
        name: "Sarah Johnson",
        age: 34,
        height: "5'6\"",
        gender: "Female"
    },
    {
        name: "Mike Wilson",
        age: 45,
        height: "6'2\"",
        gender: "Male"
    }
];

for (let i = 0; i < people.length; i++) {
    console.log(`${i + 1}) Person:`);
    console.log(`Name: ${people[i].name}`);
    console.log(`Age: ${people[i].age}`);
    console.log(`Height: ${people[i].height}`);
    console.log(`Gender: ${people[i].gender}`);
    console.log(""); // Empty line for spacing
}