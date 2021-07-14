// AS now YAHA pe apn Modules k bareh meh dekhenge:
// as Modules simply code-files hi hoti hai jismeh kafi sare machine-level-functions ya languge-level-functions hoteh hai, as module-file apn khud bhi bana skteh hai and module-file banaee bani bhi hoti hai where voh bannee bani module-file kafi acche hoteh bcoz voh machine-level-functions hoteh hai toh mtlb apn unseh kafi acche-acche kaam kr skteh hai jaise apn unn functions se apne computer ko server bana skteh hai , and many more bohat sareh kaam kr skteh hai.

// as now JavaScript meh node.js k module-files ko simply require()-fn se import kiya jata hai. as like this:
//                          require( "module_name_mtlb_modulefile_name mtlb module-path")

// as now mouduel-file ko import krne se mtlb voh module-file apne code-file meh upar hi upar as it is fetch ho jayegi ya kisi variable-container meh fetch ho jayegi.


// Creating-Our-Own-Modules:
// as apn apne khud ka Module-file bhi create kr skteh hai and phir usseh kahi pr bhi mtlb kisi bhi file meh import krke use kr skteh hai.
// as toh eske liyeh apnko "exports"-keyword ka use krna hota hai on the functions , variables , Objects jisko apnko avialable krvana hai jab koi apni ess file ko import kare toh. thus mtlb apn jin functions , Objects , variables pe "exports"-keyword use krenge vohhi outside this file available honge mtlb , and others jinpe "exports"-keyword ka use nhi kiya gaya hai voh outside this file available nhi honge mtlb apnn enn functions ko file ko import krne k baad use nhi krpayenge.
// as toh apn esseh bhi bol skteh hai ki jis javascritp-code-file meh "exports"-keyword ka use kiya gaya hai then mtlb voh ek module hai mtlb apn uss file k functions ko apni kisi orr code-file meh use kr skteh hai.
// thus toh apn as like this "exports"-keyword ka use krteh hai.

// exports.function_1(){
//     console.log("hello bro kaisa hai")
// }

exports.fn_ofmodule = ()=>{
    console.log("hey bro i love programming")
    return "i am fn_ofmodule"
}

let fn2 = ()=> {
    console.log("i am fn2 without using exports-keyword")
}
// thus mtlb apn ess fn2 ko kisi orr file meh ess file ko import krne k baad meh bhi use nhi kr payenge.


exports.fn2 = (p1 , p2)=> {
        console.log("i am fn2 without using exports-keyword")
    }
// as esko function ko apn import kr skteh hai. and as vs-code ess function ko apnko suggestion meh bhi batadega.


a = 5
b = 6
console.log(a + b)
// as apn JavaScript-language meh toh variable ko esseh directly bhi define kr skteh hai. but react-language meh apnko let , var or const se define krne hoteh hai.

exports.a1 = 43