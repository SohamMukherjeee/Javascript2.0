const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser["age"]);
// console.log(JsUser[mySym]);
// console.log(JsUser[mySym]);
// JsUser.email="soham@media.com"
// console.log(JsUser["email"]);
// Object.freeze(JsUser)
// JsUser.email="soham@Mayurakhi.com"
// console.log(JsUser["email"]);

JsUser.ipAddress=function(){
    console.log(763276376);
}
console.log(JsUser.ipAddress())

