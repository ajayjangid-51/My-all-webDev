console.log("here is the code of our software-idea")

const f1= require("")
const f2= require("")
const f3= require("")

function printfn(p1,p2,p3) {
    let sum = p1+p2+p3;
    let sumhf = sum/2
    return `the sum is ${sum} and its half is ${sumhf}  `
}
// PACKAGE:
// package define hota hai kisi software k liyeh 
// package mtlb ek folder jo ki software(software ki file) ko contain krta ho and eske saat-saat software ki package.json file, its dependency-package content, its history.md file , its license file, its readme.md file etc ko contain krta ho.
// thus isiley har software ka package banana ya hona jaruri hota hai booz vaha pe software k related sari baateh hoti hai.
// and toh agar apnko alpne writing software ka package banana hai then voh simply apan software-language package manager k bana ya banva lete hai: aslike ki jaise software-language javascript hai toh vaha pe npm is a package manager and agr software-language python hai then vaha pe "pip" is a package manager and yeh package manager simply apne software k package banane meh help krte hai.

// and phir simply package ko install krne pr yeh sara package-content load ho jata hai

// module.exports = printfn;
module.exports = {
    printf: printfn
}
// okay all okay now aab apni yeh software-file kaam kr rhi hai and aab ready hai 
// and now aab apnko ess ka allover ek package bana lete hai but yeh kaam apne node.js ka npm apne file creating k saat-saat meh hi simply and fastly kr dega 

// NOTE-POINT: jaise apanko yeh pta hai ki har software k liyeh uska package jaruri hai toh isiley apan software-writin and designing k saat-saat hi "npm" se uska package bhi bana lete hai.
// thus har software ki designing node.js and its npm se ess tarah hoti hai.

// NOTE: toh aab kabhi bhi apan koi bda software kisi bade project pe kaam kr rhe hote hai toh ess tarah npm k saat hi kaam krna hota hai.