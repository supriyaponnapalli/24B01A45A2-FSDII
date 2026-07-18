let Name:string="supriya";
let Age:number=19;
let isMember:boolean=true;
console.log("Datatype of Name-->"+typeof Name);
console.log("Datatype of Age-->"+typeof Age);
console.log("Datatype of isMember-->"+typeof isMember);
function display(name:string,age:number,active:boolean):void{
    console.log('User:${name}');
    console.log('Age:${age}');
    console.log('Status:${active?"Active":"inactive"}');
}
display(Name,Age,isMember);