// YAHA pe apan SYNCHRONISE( or blocking)-code and ASYNCHRONISE( or non-blocking)-code k bareh meh dekhenge:

// mtlb jaise program meh code-lines(code-line mtlb koi function,variable,loop,if-else etc ) hoti hai toh voh code ya toh SYNCHRONISE-CODE hoga ya phir ASYNCHORNISED-CODE hoga;
// toh mtlb agar SYNCHORNISED(ya BLOCKING)-code huaa toh mtlb voh synchronisely(means line-wise) run hoga ya apan ese bol skteh hai ki yeh-code agle code run hone se block kr dega..jb tk yeh code run and complete hojayega. and agar apnko yeh dekhna hai toh simply apan enn code-lines ko console meh print krva k dekh lenge. 
// simply boleh toh SYNCHRONISED-code apne agle-wale code ko block kr k rkta hai jb tk khud run na hojaye. 

// and agar code ASYNCHRONISED(or NON-BLOCKING) hai then mtlb yeh code apne agle wale code ko BLOCK-NAHI krega mtlb eske agle wala easily run joyega(until and unless yeh bhi koi "more-time-taking" ASYNCHRONISED-code na ho mtlb tab toh yeh khud se phle apne-aage-wale code ko run hone dega) no matter ki eske phle-wala code run and complete huaa hai ka nahi and simply jab yeh ASYNCHORNISED code run and complete ho jayega tb yeh apna kaam kr dega and ese bhi apanko dekh na hai toh simply console meh print krva k dekh skteh hai.
// and simply boleh toh yeh ASYNCHRONISED-code apne agle-wale code ko block nhi krta mtlb usse run hone deta hai and jo bhi apane uss meh callback dala hai voh simply uske run hone k baad console meh show ho jata hai. 


// actually..  compiler toh code ko line-wise hi scan krta hai but kisi code ka output ya call-back function voh depend krta hai jo code hai voh synchronised hai ya unsynchronised hai,
// CALL-BACKS in functions:
// callback hamesa in a form function hi hota hai and yeh parent-function ki as a return-value ki tarah hota hai mtlb jb parent-function run and complete ho jayega tb yeh ess callback ko return kr dega and important baat ki.. yeh callbacks sirf ASYNCHRONISED-function meh hi dale jateh hai aur daalne hi pdteh hai. and agar enn callbacks ko apan SYNCHRONISED-code meh dalenge tb kuch bhi return nhi hoga. 


// as-like:
let fs=require('fs')
// console.log(fs)
console.log("line-1")
let text = fs.readFileSync('zzz.txt','utf-8')
console.log(text)
console.log("code-line no.1 after synchronise(blocking) read-function")

console.log("code-line before asynchronise(or non-blocking) read-function")
let texti = fs.readFile('zzz.txt','utf-8', ()=>{console.log("this is an output of callback function")})
console.log(texti)
// yaha upar wale code se undefined show ho rha hai bcoz texti meh jo code hai voh abhi run huva hi nahi hai and apan usse prnt krva rhe hai, but agar yeh SYNCHROnised hota toh phle read-function run hota hi chahe jitna time lage phir hi yeh agla code console.log(texti) run hota and simply ess read-function ka output dikha deta.

console.log("code-line no.1 after asynchronise(or non-blocking) read-function")
console.log("code-line no.2 after asynchronise(or non-blocking) read-function")

