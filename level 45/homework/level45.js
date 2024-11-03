//შევქმნათ ფუნქცია რომელსაც გადაეცემა წუთები და აბრუნებს შესაბამის წამების რაოდენობას 
function minutesToSeconds(minutes) {
    return minutes * 60;
}
const seconds = minutesToSeconds(6); //6 min=360wams
console.log(seconds);

//შევქმნათ ფუნქცია რომელსაც გადაეცემა სამი რიცხვი და აბრუნებს პირველი ორი რიცხვის ჯამის ნამრავლს მესამე რიცხვზე

function sumAndMultiply(a, b, c) {
    return  (a + b) * c;
}
const result=sumAndMultiply(1,2,3);
console.log(result);

//შევქმნათ ფუნქცია რომელსაც გადაეცემა ორი რიცხვი და აბრუნებს True-ს თუ პირველი რიცხვი მეტია, ხოლო მეორეზე აბრუნებს False ( if statment-ის გარეშე )

function firstNumber(a,b){
    return a >b;
}
console.log(fisrtnumber(10,3));
console.log(firstNumber(1,10));

//შევქმნათ ფუნქცია რომელსაც კონსოლში გამოაქვს ( "Elemenet: "  და გადაცემული ელემენტი )

function Element(element) {
    console.log("Element" + element);
}
element("world");

//შევქმნათ ფუნქია რომელსაც გადეცემა, id-ელემენტის და სტრინგი, ფუნქციამ სტრინგი შესაბამის ელემენტში უნდა ჩასვას
function setStringById() {}
 