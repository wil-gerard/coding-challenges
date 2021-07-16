// --- Synchronous ---

// console.log(" I ");

// console.log(" eat ");

// console.log(" spoon ");

// console.log(" ice cream ");

// console.log(" with a ");

// --- Asynchronous ---

// console.log(" I ");

// console.log(" eat ");

// setTimeout(() => {
//     console.log(" ice cream ");
// }, 4000);

// console.log(" with a ");

// console.log(" spoon ");

// function one (spongebob){
//     spongebob();
//     console.log(" step 1 complete. please call step 2 ");
// }

// function two (){
//     console.log(" step 2 ")
// }

// let bob = () => {
//     console.log("bob")
// }

// one(two);

// let stock = {
//     fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquids: ["water", "ice"],
//     holders: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };

// let order = (fruitName, callProduction) => {

//     setTimeout(() => {
//         console.log(`${stock.fruits[fruitName]} was selected`);
//         callProduction();
//     }, 2000)

//     // console.log("order placed, please call production")
    
// };

// let production = () => {
//     setTimeout(() => {
//         console.log("order recieved, starting production")

//         setTimeout(() => {
//             console.log("the fruit has been chopped");

//             setTimeout(() => {
//                 console.log(`${stock.liquids[0]} and ${stock.liquids[1]} was added`)

//                 setTimeout(() => {
//                     console.log("the machine is on");

//                     setTimeout(() => {
//                         console.log(`${stock.holders[0]} is selected and ready`)

//                         setTimeout(() => {
//                             console.log(`${stock.toppings[0]} is placed on top`)

//                             setTimeout(() => {
//                                 console.log("ice cream has been served 🥳")
//                             }, 4000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000) 
//     }, 0000)
// };

// order(0, production);

// --- Promises ---

let stock = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holders: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = false;

// let order = (time, work) => {

//     return new Promise((resolve, reject) => {

//          if(isShopOpen){
//              setTimeout(() => {
//                  resolve(work());
//              }, time);
//          } else {
//              reject(console.log("our shop is closed"));
//          }
//     });
// };

// order(2000, () => console.log(`${stock.fruits[2]} has been selected`))

//     .then(() => {
//         return order(0000, () => console.log("production has started"))
//     })

//     .then(() => {
//         return order(2000, () => console.log("fruit was chopped"))
//     })

//     .then(() => {
//         return order(1000, () => console.log(`${stock.liquids[0]} and ${stock.liquids[1]} were added`))
//     })

//     .then(() => {
//         return order(1000, () => console.log("machine is started"))
//     })

//     .then(() => {
//         return order(2000, () => console.log(`${stock.holders[0]} is selected`))
//     })

//     .then(() => {
//         return order(3000, () => console.log(`${stock.toppings[0]} is on top`))
//     })

//     .then(() => {
//         return order(1000, () => console.log("ice cream is ready! 🥳"))
//     })

//     .catch(() => {
//         console.log("customer has left")
//     })

//     .finally(() => {
//         console.log("shop has closed for the day")
//     })

// Async/Await

// async function order () {
//     try {
//         await abc;
//     }
//     catch(error) {
//         console.log("abc doesnt exist", error)
//     }
//     finally {
//         console.log("code runs anyways")
//     }
// }

// order()
// .then(() => console.log("what what in butt"))

// let toppingChoice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which topping?"));
//         }, 3000);
//     });
// };

// async function kitchen() {
//     console.log("A")
//     console.log("B")
//     console.log("C")
//     await toppingChoice()
//     console.log("D")
//     console.log("E")
// }

// kitchen()

// console.log("doing dishes")
// console.log("cleaning tables")
// console.log("taking orders")

// let time = (ms) => {
//     return new Promise((resolve, reject) => {
//         if(isShopOpen == true) {
//             setTimeout(resolve, ms);
//         } else {
//             reject(console.log("shop is closed"));
//         }
//     });
// }

// async function kitchen() {
//     try {
//         await time(2000)
//         console.log(`${stock.fruits[3]} selected`);
//         console.log("start production");

//         await time(2000)
//         console.log("fruit is cut")

//         await time(1000)
//         console.log(`${stock.liquids[0]} and ${stock.liquids[1]} added`)

//         await time(1000)
//         console.log("machine is started")

//         await time(2000)
//         console.log(`${stock.holders[0]} is ready`)

//         await time(3000)
//         console.log(`${stock.toppings[0]} was put on top`)

//         await time(2000)
//         console.log("ice cream is served")

//     } catch(error) {
//         console.log("customer left", error);
//     } finally {
//         console.log("shop is now closed");
//     }
// }

// kitchen();

// let thing = ["Table", "Chair", "Fan"];
// let [a, b, c] = thing;

// console.log(a)
// console.log(thing[0])

// function runners() {
//     return ["Sandra", "Ola", "Chi"];
// }

// var [one, b, two] = runners();
// console.log(one); //Output: Sandra
// console.log(b); //Output: Ola
// console.log(two); //Output: Chi

// console.log(runners[1])

// var a, b;
// [a = 40, b = 4] = [];
// console.log(a); //Output: 40
// console.log(b); //Output: 4

// [a = 40, b = 4] = [,600];
// console.log(a); //Output: 1
// console.log(b); //Output: 23

// var [first = "Cotlin", second = first] = [];
// console.log(first); //Output: Cotlin
// console.log(second); //Output: Cotlin

// var [first = "Cotlin", second = first] = ["Koku"];
// console.log(first); //Output: Koku
// console.log(second); //Output: Koku

// var [first = "Cotlin", second = first] = [["bob"], "Lydia"];
// console.log(first); //Output: Koku
// console.log(second); //Output: Lydia
// function pluto(){
//     return Math.random()
// }

// var planets = ["Mercury", "Earth", "Venus", ["bob","doug"], pluto(), ["shit"]];
// var [first, , third, ...others] = planets;

// console.log(first); //Output: Mercury
// console.log(third); //Output: Venus
// console.log(others); //Output: ["Mars", "Pluto", "Saturn"]

// let planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

// let [first, second, ...rest] = [planets, , , , , ...planets];

// console.log(first); //Output: Mercury
// console.log(second); //Output: Earth
// console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]


// var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

// var [first, second, third, fourth, ...rest] = ["Mercury", ...planets];

// console.log(first); //Output: Mercury
// console.log(second); //Output: Mercury
// console.log(third); //Output: Mercury
// console.log(fourth); //Output: Mercury
// console.log(rest); //Output: ["Earth", "Venus", "Mars", "Pluto", "Saturn"]

// var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

// var [first, second, third, fourth, ...rest] = ["Mercury", "Earth", ...planets];

// console.log(first); //Output: Mercury
// console.log(second); //Output: Earth
// console.log(third); //Output: Mercury
// console.log(fourth); //Output: Earth
// console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]

// var a, b;
// [a, b] = ["Male", "Female"];
// [a, b] = [b, a];

// console.log(a); //Output: Female
// console.log(b); //Output: Male

var places = ["first", "second", "third", "fourth"];
var [a, b, , d] = [f, ...rest] = places;

console.log(a); //Output: first
console.log(d); //Output: fourth
console.log(f); //Output: first
console.log(rest); //Output: ["second", "third", "fourth"]