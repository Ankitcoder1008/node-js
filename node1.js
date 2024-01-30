function example(){
    if(true){
        // var funScopedvar="I am function-scoped";
        let funScopedvar="I am function-scoped";
        console.log(funScopedvar);
    }
    console.log(funScopedvar);//"i am function-scoped"
}
example();
//console.log(funScopedvar);//error: functionscoped is not defined