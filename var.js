//var-Function-level Scope:
function exampleFunction(){
    if(true){
        var functionScopedVar="i am function-scoped";

    }
    console.log(functionScopedVar); //"I am function-scoped"
}
exampleFunction();
console.log(functionScopedVar); //Error:functionScopedVar is not defined
//let-block level scope:
function examole2Function(){
    

}