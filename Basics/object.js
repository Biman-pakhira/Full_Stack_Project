//singlton
//object literals
// Object.create
const mySym = Symbol("key1");
const JsUser ={
    name: "Biman",
    age: 24,
    [mySym]: "myKey1",
    location: "Joypur",
    dist: "howrah",
    email: "bimanpakhira@gmail.com"
}
//access process1:
console.log(JsUser);
console.log(JsUser.age);
console.log(JsUser.dist);
console.log(JsUser.email);
console.log(JsUser.location);

//Access process2:
console.log(JsUser["age"]);

//Access Process3:
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

//Freeze method:
                // Object.freeze(JsUser);

//Adding greeting:

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`hello Js User, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());