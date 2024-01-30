var shadowedVar= "I am global";//in var and let is no difference in the output of this code
function example(){
    var shadowedVar= "I am local";//this function is doesnot have any connection to the global scoped variable
    console.log(shadowedVar);
}
example();
console.log(shadowedVar);
//let doesn't allows re-declaring of the variable in the same scope but var does.