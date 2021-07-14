    // YAHA pe apan MODULES kaise create krteh hai and kyu krteh hai k bareh dekhenge:
    // WHY MODULE-creating:
    // MODULES create isiley  kiyeh jateh hai jaise ki apan ne koi program ya koi APP banaee and essmeh apn ne kaphi acche-acche functions banayeh, functions ki class banaee , and yeh joo functions apan ne banayeh hai yeh bahot sare apps,programs meh kafi jda kaam bhi aa skteh hai, and thus ess baat k according apan enn functions ek combined MODULE bana dete hai and thus ess module ko apan distribute kr skteh hai and simply programmers ess module ko install krke apne coding meh enhe simply orr module ki tarah import and use kr skteh hai.
    // as example: jaise javascript meh math-object ya module inbuilt hota hai mtlb actually math-object k andar jo math-functions hai unko simply kisi k duvra create kiya gaya and phir socha ki yeh toh kafi orr jagah bhi kaam aa skteh hai thus simply ennka ek combined object ya module bana diya gaya. 

    // creating MODULE:
    // creating MODULE mtlb simply koi file.js create krna and phir ussmeh fuch important functions banana jo orr bhi bohat sari jagah kaam aa ske and simply ek moudle.exports-object bana kr k sabhi functions include kr dena.
    // and phir agar koi programmer ese use krna chahta hai then voh ese simply import kr lega,

    console.log("This is module")

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
        console.log(` this array ${arr}  "good hai function is running"`)
    });   
    return sum/arr.length;
}

// console.log(average([3,3]))

// module.exports = average;
module.exports = {
    // toh yaha pe modul.exports as a object bhi ban chuka hai and yeh object apne aap ko export krne ka kaam bhi krta hai.
    avg: average,
    name: 'harry',
    channel: "codewithharry"
}
// VERY IMP NOTE-POINT: now yaha pe apan ne ek pura object export kiya hai and ess object ka naam hoga jo esske file ka naam hai voh mtlb-- "modl" but ess ess object ko apan kisi bhi naam se import kr skteh hai.

console.log(module.exports)