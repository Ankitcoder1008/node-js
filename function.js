function add(a,b){
    return a+b;
}
// multiply(); 
function multiply(a,b){
    return a*b;
}
//Invocation 
const sum= add(4,6);
const product= multiply(4,6);
console.log('Function Expression- sum:', sum);
console.log('Function Expression- product:', product);


//Arrow function
const subtract=(a,b)=> a-b;
//Invocation
const difference =subtract(8,3);
console.log('Arrow Function- Differnce:', difference);