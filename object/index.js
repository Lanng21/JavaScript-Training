// let day1 = {
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running"],
// };
// console.log(day1.squirrel);
// // → false
// console.log(day1.wolf);
// // → undefined
// day1.wolf = false;
// console.log(day1.wolf);
// // → false

// let anObject = {left: 1, right: 2};
// console.log(anObject.left);
// // → 1
// delete anObject.left;
// console.log(anObject.left);
// // → undefined
// console.log("left" in anObject);
// // → false
// console.log("right" in anObject);
// // → true


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
