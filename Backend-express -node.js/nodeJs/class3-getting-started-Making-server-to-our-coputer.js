// now YAHA pe apn Node.js se apni website-program banayenge: bas apna node.js apne computer meh installed hona chahiyeh

let http_module = require('http')

http_module.createServer( function(p1_req , p2_res){
    p2_res.writeHead( 200 , {'Content-Type': 'text/html'})
    p2_res.end("heey bro i love programming")
    

}).listen(8080)

// as yeh createServer-fn apne computer ko server bana deta hai. mltlb aab apne computer ko koi apne-browser se visit krta hai then usko yeh cheez render hojayegi mtlb yeh cheez milegi.
// as acche se boleh toh mtlb node.js meh createServer()-fn sbse mast and sbse important function hota hai bcoz esee run krne pr apna computer ek server ban jata hai , thus mtlb jo bhi apne server visit-karega then usko ess function k andar return cheez show hojayegi.
// as yeh createSever()-fn input meh ek function leta hai jo ki 
// and yeh listen()-fn createServer ki return value ko inputed-portnumber pe load , access kr deta hai.

// yeh code mtlb yeh hai ki agr koi orr computer uske browser apne computer ko access krta hai mtlb visit krta hai ess port-number pe then usko cheez show kr na hai. 

// as now aab apnko ess program ko command-line se execute krna hai as like this:
// simply type this : in command-line.


// now visit this from and browser they will get your website. mtlb jab bhi koi ess url pe visit karega then apna computer usee yeh apni website return kr dega.
//  http://localhost:8080
// or  http://ipaddress:8080

// tip: check ip-address by typing ipconfig in command-line.

// thus mtlb aab koi bhi apni-computer ko visit kr skta hai as apnne apne computer ko server bana diya hai mtlb agr koi apne computer ko visit krta hai then usko yeh jo apnne likha hai voh return meh miljayega.
