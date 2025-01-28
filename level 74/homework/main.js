function Car(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
 }
 
 // Animal Constructor
 function Animal(species, name, age, color, weight) {
    this.species = species;
    this.name = name;
    this.age = age;
    this.color = color;
    this.weight = weight;
 }
 
 // Student Constructor
 function Student(name, id, major, grade, age) {
    this.name = name;
    this.id = id;
    this.major = major;
    this.grade = grade;
    this.age = age;
 }
 
 // Creating three cars
 const car1 = new Car("Toyota", "Camry", 2020, "Silver", 35000);
 const car2 = new Car("Honda", "Civic", 2021, "Blue", 22000);
 const car3 = new Car("Ford", "Mustang", 2019, "Red", 45000);
 
 // Creating three animals
 const animal1 = new Animal("Dog", "Max", 5, "Brown", "30 lbs");
 const animal2 = new Animal("Cat", "Luna", 3, "Black", "10 lbs");
 const animal3 = new Animal("Parrot", "Rio", 2, "Green", "2 lbs");
 
 // Creating three students
 const student1 = new Student("John Smith", "S001", "Computer Science", "A", 20);
 const student2 = new Student("Sarah Johnson", "S002", "Biology", "B+", 19);
 const student3 = new Student("Mike Wilson", "S003", "Engineering", "A-", 21);
 
 // Logging all objects to verify
 console.log("Cars:", car1, car2, car3);
 console.log("Animals:", animal1, animal2, animal3);
 console.log("Students:", student1, student2, student3);
 