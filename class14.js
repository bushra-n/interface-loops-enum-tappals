var bill = {
    customerName: "Haseeb",
    timestamp: "12:05PM"
};
console.log(bill);
// type literal is used when developer knows the user's input
var juice;
juice = "medium";
console.log(juice);
// Topic      loops          run code again and again
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
// e.g
for (var i = 5; i <= 25; i = i + 5) {
    console.log(i);
}
for (var a = 5; a >= 1; a--) {
    console.log(a);
}
var abc = 1;
while (abc <= 15) {
    console.log(abc);
    // or abc ++         OR abc = abc + 3
    abc = abc + 3;
}
var fruits = ["Apple", "Banana", "Mango", "Peach", "Orange"];
fruits.push("began");
fruits.unshift("karela");
// console.log(fruits.length)
for (var i = 0; i < 4; i++) {
    console.log(fruits[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//  for of loop use on array only
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var phal = fruits_1[_i];
    console.log(phal);
}
console.log(fruits.length);
// Topic             enums                            same as type literals
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
var TimeSlot;
(function (TimeSlot) {
    TimeSlot["Morning"] = "9 to 12";
    TimeSlot["Afternoon"] = "2 to 5";
    TimeSlot["Evening"] = "7 to 10";
    TimeSlot[TimeSlot["PhoneNumber"] = 921263489] = "PhoneNumber";
})(TimeSlot || (TimeSlot = {}));
console.log(TimeSlot.Evening);
console.log(TimeSlot.PhoneNumber);
var empData = [[45, "bushra", 70000], [39, "Ali", 85000], [66, "Ammar", 49000]];
console.log(empData);
console.log(empData[1]);
for (var _a = 0, empData_1 = empData; _a < empData_1.length; _a++) {
    var emp = empData_1[_a];
    console.log(emp);
}
