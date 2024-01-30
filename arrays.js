//creating an array
let fruits=["apple", "banana", "orange", "grape"];
//Accessing element
console.log(fruits[0]);   //Outputs: appple
console.log(fruits[2]); //Outputs: orange
//Adding elements to the end
fruits.push("Kiwi");
console.log(fruits);
//Adding elements to the beginning
fruits.unshift("mango");
console.log(fruits);
//Removing the last elements
let removedLast=fruits.pop();
//Removing the first element
let removedFirst =fruits.shift();
//finding index of an element
let indedxOfOrange=fruits.indexOf("orange");
//Iterating using a for loop
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//slicing an array
let citrus=fruits.slice(1,3);
console.log(citrus);
//Splicing an array(modifying original array)
let removed=fruits.splice(1, 2, "pear", "melon");
console.log(fruits);
//concatenating arrays:- it combines multiple arrays in one new array
let moreFruits =["grapefruit", "pineapple"];
let allFruits=fruits.concat(moreFruits);
console.log(allFruits);
//Arrays in javascript are ordered list of values