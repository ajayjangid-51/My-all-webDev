console.log("awesome bro")

let class4_modulefile = require("./class4-modules")
class4_modulefile.fn_ofmodule()
class4_modulefile.fn2()
console.log(class4_modulefile.a1)

class4_modulefile.fn_ofmodule()
// as apn yaha IDE-functions-suggestion meh dekh skteh hai ki ess function ki return-value koi string hai. as voh suggestion kuch ess tarah hota hai:  functionname(): return-value-datatype

class4_modulefile.fn2()
// as apnko yaha IDE-functino-suggestion meh yeh mil raha hai = fn2(): void  thus mtlb ess function ki return-value void hai mtlb function ki return-value nhi hai.


class4_modulefile.fn2()
// as apnko yaha IDE-function-suggestion meh yeh mil raha hai =  fn2(p1: any, p2: any): void , thus mtlb ki ess function meh 2-paramters hai where first-paramter-ka-naam p1 hai and uska data-type : any hai. and as like this 2nd-parameter ka naam p2 hai and voh bhi kuch bhi datatype ka ho skta hai.
// 🎆🎆 toh thus mtlb apn kisi bhi koi bhi function meh kya-kya and kaise-kaise agruments pass krne hai voh apn simply IDE-function-suggestion se aaram se easily samaj skteh hai.