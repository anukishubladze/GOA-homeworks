//?მომხმარებელს prompt-ით შემოაყვანინეთ ორი რიცხვი და შემდეგ კი მიმატება ან გამოკლება, პროგრამამ უნდა გამოიტანოს მათემატიკურად შესრულებული შესაბამისი ოპერაცია
let num1 = (prompt(""));
let num2 = (prompt(""));
let operation = prompt("+,-");

let result;
if (operation == "+") {
    result = num1 + num2;
} else if (operation == "-") {
    result = num1 - num2;
} else {
    result = "";
}

console.log("" + result);