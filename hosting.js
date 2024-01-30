console.log(x);//undefined
var x= 5;
console.log(x); //5
// the first console.log(x); OUTPUTS undefined because the decleartion is hoisted, but the assingment (x=5) happpens later in the code.
// console.log(z);//undefined 
// let z=5;
//HOISTING WITH FUNCTIONS
hello();//"hello, world"
function hello(){
    console.log("hello, world");
}

