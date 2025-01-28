function Human(name, age, height, id) {
    this.name = name;
    this.age = age; 
    this.height = height;
    this.id = id;
 }
 
 // Creating three human objects
 const human1 = new Human("John Smith", 25, "5'10\"", "H001");
 const human2 = new Human("Sarah Johnson", 31, "5'6\"", "H002");
 const human3 = new Human("Mike Wilson", 42, "6'1\"", "H003");
 
 // Let's verify by logging each object
 console.log(human1);
 console.log(human2); 
 console.log(human3);






