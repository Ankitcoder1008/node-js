//define object
//objects literal notation
let car={
    make: "Toyota",
    model: "Camry",
    year: 2022,
    isElectric: false,
    start: function(){
        console.log("Engine started!");
    }
};
//Accessing properties
console.log(car.make);     //outputs:Toyota
console.log(car.year);    //outputs:2022
//calling a method
car.start();           //outputs:Engine started!

//object Constructor
//object Constructor function
function Book(title, author, year){
    this.title=title;
    this.author=author;
    this.year=year;
}
//creating instance of object
let book1=new Book("The Catcher in the rye", "J.D> Salinger", 1951);
let book2=new Book("TO kill a Mockingbird", "Harper Lee", 1960);
console.log(book1.title);
console.log(book2.title);