// AS YAHA pe apn "http"-module k bareh meh dekhenge: mltb apn http-module k andar jo functions hai unko dekhenge, as mtlb apn function ki generally and importantly 3-cheeze dekheteh hai:
/*  1. voh kya kaam krteh hai ,
    2. unka inputs kya hota hai, and
    3. unki return kya hoti hai.
    */

// as yeh http-module node.js meh built-in hai toh mtlb apnko ess module-file ko download and install nhi krna hoga.
// as yeh http-module hyper-text-transfer-portocol pe data ko transfer kr deta hai. thus apnko data ko transfer over the htt-protocol pe krne k liyeh krteh hai.

// as toh now sbse phle apn ess "http"-module ko use import kr leteh hai kisi container meh. as bcoz require()-fn ki return- value voh module-file hi hoti hai.

let http_modulefile = require("http") 

// as now aab apn ess http-module k functions dekhenge:
// 🌟1. createServer()-fn ( yeh function apne computer ko server bana deta hai, mtlb jab koi visitor apne browser se apne computer pe visit karega then phir apna computer usseh return kuch provide karayega. 📓🔥: and as yeh createServer node.js meh sbse mast and most important-function hai.)
// and as now ess createServer()-fn ka input ek koi function hota hai jo ki tab execute hojayega , tab koi visit apne computer pe visit krta hai tab.  as like this but ess inputing-function meh 2-argument hone chahiyeh and 2nd-agrument pe apnko write and end function use krna hota hai as like this : otherwise apnko error milega.:

// http_modulefile.createServer( ()=>{
//     console.log("hlo that is awesome")
// }).listen(8000)
// yeh inputing-fn galat hai.


// http_modulefile.createServer( ( p1 , p2)=>{
//     p1.write("helo brother that is awesome")
//     // console.log("hlo that is awesome")
//     p1.end()
// }).listen(8000)
// yeh inputing-fn galat hai.


// http_modulefile.createServer( ( p1 , p2)=>{
//     p2.write("helo brother that is awesome this right inputed function")
//     // console.log("hlo that is awesome")
//     p2.end()
// }).listen(8000)

// 🌟Adding-HTTP-Header:
// as esseh kabhi-kabhi client-computer-browser apne-server ki return-value access nhi kr pata hai , thus toh mtlb esseh thoda bohat delay ho jata hai, thus toh apn eskeliy http-reader bhi apni inputing-function meh daal dete hai takk client-browser jldi se return-value samaj le and delay na ho.
// thus toh we add http-header as like this:

// http_modulefile.createServer( ( p1 , p2)=>{
//     p2.writeHead(200, {'Content-Type': 'text/html'})
//     p2.write("helo brother that is awesome this right inputed functio as here we are adding httpheader")
//     // console.log("hlo that is awesome")
//     p2.end()
// }).listen(8000)

// as ess writeHead()-fn ka 1st-parameter status-code hota hai. and 2nd-agrument ek Object hota hai jo ki reasponse-headers ko contain krta hai.
// 📓note-point: where status_code 200 means ki all is Ok . and as yeh sare status-code apn detail- meh aage dekhenge.

// 🌟2:reading the query-String:
// as craateServer()-fn meh jo function apnne pass krvaya hai uss function meh first-argument user or client-request ko represent krta hai mtlb jo request visition-user pe maari hai usseh represent krta hai. mtlb user-request ess agrument meh store hoti hai by key-value-pairs as toh mtlb voh first-arguement as a Object hai.
// as toh now ess first-argument jo ki object-container hai esmeh bohat sari key-value pairs hoteh hai , where one of key is url-key jismeh user-inputed url ko contain krta hai. mtlb ess url-key ki value user-inputed url meh domain-name k baad wala url hoti hai and essi cheez ko query-String bolteh hai. 
// thus mtlb apn ess url-key access bhi skteh hai as like this:
/*
http_modulefile.createServer( ( p1 , p2)=>{
    p2.writeHead(200, {'Content-Type': 'text/html'})
    p2.write(p1.url)
    p2.write("helo brother that is awesome this right inputed functio as here we are adding httpheader")
    console.log("hlo that is awesome")
    p2.end()
}).listen(8000) */

// thus toh mtlb apn anchor-tag se url ko update krke voh url as ess p1.url-key meh lelenge and phir eske according client ko respond kr denge. toh mtlb yeh ek kafi acchi baat hogayi mtlb apnko pata chal jayega ki client ko chahiyeh kya.


// 🌟Splitting the querry-String
// Splitting querry-string mtlb querry-string ko split krna takki voh acche se readable ho sake. and yeh kaam apn simply node.js ek built-in module( url-module ) k functions se kr leteh hai. as like this:  
// thus toh phle apn url-module ko import kr leteh hai and phir querry-string ko split krenge takki voh readable ban jayeh.


let url_modulefile = require("url")

http_modulefile.createServer( ( p1 , p2)=>{
    p2.writeHead(200 , {'Content-Type': 'text/html'})
    var q = url_modulefile.parse(p1.url , true).query
    // as ess url-module meh ek parse()-fn hai jo ki querry-string as a input meh leta hai and out meh kuch return krta hai jisko apnne querry bana diya hai.
    // and now apn ess q-querry ko access kr lenge as like this:
    let txti = q.year
   
    // console.log("hlo that is awesome")
    p2.end(txti)
}).listen(8000) 


