"use strict";
let Name = "supriya";
let Age = 19;
let isMember = true;
console.log("Datatype of Name-->" + typeof Name);
console.log("Datatype of Age-->" + typeof Age);
console.log("Datatype of isMember-->" + typeof isMember);
function display(name, age, active) {
    console.log('User:${name}');
    console.log('Age:${age}');
    console.log('Status:${active?"Active":"inactive"}');
}
display(Name, Age, isMember);
