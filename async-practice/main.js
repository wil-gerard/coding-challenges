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

let isShopOpen = true;

let order = (time, work) => {

    return new Promise((resolve, reject) => {

         if(isShopOpen){
             setTimeout(() => {
                 resolve(work());
             }, time);
         } else {
             reject(console.log("our shop is closed"));
         }
    });
};

order(2000, () => console.log(`${stock.fruits[2]} has been selected`))