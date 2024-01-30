// for loop- Exceutes a block of code a specified number of times.
for(let i=0;i<5;i++){
    console.log(i);
}
//while loop- Repeats a block of code while a specified condition is true.
let count =0;
while(count<5){//entry control loop
    console.log(count);
    count++;

}
//do-while= similar to while loop but it ensures that the code block is executed at least once.
do{
    console.log(count);
}while(count<5);
//for........in loop= iterates over the properties of an object
let person ={name: "John", age: 30, occupation:"Developer"};
for(let key in person){
    console.log(key+": "+person[key]);
}
