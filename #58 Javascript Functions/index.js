function nice(name){
    console.log("Hey " + name + " You are nice!");
    console.log("Hey " + name + " You are good!");
    console.log("Hey " + name + " You are innocent!");
    console.log("Hey " + name + " You are cute!");
}

nice("Ankita");
nice("Srushti");

function sum(a, b, c=2){
    // console.log(a + b)
    return a + b + c;
}

res = sum(5, 9);

console.log("The sum of these numbers is: ",res);


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(67);
func1(12);