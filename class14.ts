interface Slip {
    customerName:string,
    timestamp:string
}
let bill:Slip = {
    customerName:"Haseeb",
    timestamp:"12:05PM"
}
console.log(bill)
// type literal is used when developer knows the user's input
let juice: "small"|"medium"|"large"
juice = "medium"
console.log(juice)
// Topic      loops          run code again and again
for(let i = 1; i <=5 ; i++) {
console.log(i)}
    // e.g
for(let i =5 ; i <=25 ; i= i+5) {                                           
    console.log(i)
    }
    for(let a=5 ; a>= 1; a--){
        console.log(a)
    }
let abc = 1
while (abc <= 15){
    console.log(abc);
// or abc ++         OR abc = abc + 3
    abc = abc + 3
}

let fruits = ["Apple","Banana","Mango","Peach","Orange"]
fruits.push("began")
fruits.unshift("karela")

// console.log(fruits.length)
for(let i = 0 ; i < 4; i++){
    console.log(fruits[i])
}
for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i])
}
//  for of loop use on array only
for(let phal of fruits){
    console.log(phal)
}
console.log(fruits.length)
// Topic             enums                            same as type literals
enum Direction{
North = "North",
South = "South",
East ="East",
West="West"
}
console.log(Direction.North)
enum TimeSlot{
    Morning = "9 to 12",
    Afternoon ="2 to 5",
    Evening = "7 to 10",
    PhoneNumber = 921263489
}
console.log(TimeSlot.Evening)
console.log(TimeSlot.PhoneNumber)
// Tappals
type DataBase = [number,string,number]

const empData:DataBase[] = [[45,"bushra",70000],[39,"Ali",85000],[66,"Ammar",49000]]

console.log(empData)

console.log(empData[1])

for(let emp of empData){
    console.log(emp)
}





