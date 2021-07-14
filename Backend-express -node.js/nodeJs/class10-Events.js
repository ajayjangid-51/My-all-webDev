// Now YAHA pe apn node.js-JavaScript se apn khud k, maan marzi k Events ko create krna , fire-krna and fired event ko listen ya handle krna dekhenge:
// as node.js-JavaScript se Events ko create , fire and listen krne meh ek dam mast hai as bcoz jis module se apn yeh kaam krteh voh module mast hai , accha hai.

// As now yeh Events  create , fire and listen krna apn node.js k in-built Module named "events" se mtlb eske functions se krteh hai:
// thus toh sbse phle apn ess "events"-module ko apni ess current file meh fetch kr leteh mtlb import kr leteh hai.
let events_modulefile = require("events")
// as now ess module meh ek "EventEmitter"-class hai and eske functions ka use krke hi apn events ko create , fire and listen krteh hai: thus toh apn phle ess "EventEmitter"-classOBject ki copy bana leteh hai. takki apn voh sare functions aajayeh. as like this:
let copy_ofEventEmitter_classObject = new events_modulefile.EventEmitter()

// as now apn ess EventEmitter-classOBject k "on()"-function se apn event ko create and uska event-listerner/handler set krteh hai. as like this:

// as but apnko yeh eventlisterner/handler mtlb event-fired-executing-function define krna padega.
let event1_handlerorlistner = ()=> console.log("awesome! event1 is fired")

copy_ofEventEmitter_classObject.on( "event1" , event1_handlerorlistner)
copy_ofEventEmitter_classObject.emit("event1")


// Firing-event:
// and NOw aab apn ess Event Jab chahiyeh , Jaha Chahiyeh fire kr skteh hai , and apn apne khud k created event ko EventEmitter-classOBject k "emit()"-function se fire krteh hai. as like this:
/* 
function fn1(){
    copy_ofEventEmitter_classObject.emit("event1")

}

// now aab apn ess event ko website pe user-onclick event pe fire krvayenge:
let http_modulefile  = require("http")

http_modulefile.createServer( (p1_visitor_Req , p2_res)=>{
    p2_res.writeHead(200 , { 'Content-Type': 'text/html'})
    p2_res.write('<h1 >osm bro osm!!</h1>');
    p2_res.write('<h3 id="demo"></h3>');
    p2_res.write('<button onclick="fn1()">click me</button>');
    p2_res.end()
}).listen(8080)
*/
// 👍check and explore about this code-working..


// 🎆 Creating our own-Events:
// As node.js javascript se apn apne khud k events bana skteh hai and unheh pgir fire pe krva skteh kisi kaam k hone pr and and then uss fired-event ko listen bhi kr skteh hai... Thus sab kaam apn node.js Javascript-langauge se kr skteh hai..

// as toh now apn ess tarah event banateh hai:

// eventEmitter.on( "our-event-name" , our-event-handler )
// Where yaha event-handler voh cheez hai jo apne event ko handle krta hai jab voh fire hota hai. As event ko handle krna mtlb kisi event k hone(fire hone) pr koi kamm krvana . Toh basically yeh event-handler ek Function hi hota hai jo event k fire hone pr execute ho jata hai.



// 🎆   pre-Existing function which create and fire event: on open and close of any file🎆
// // as fs-module meh ek esa function bhi hai jo ki file k open ya close hone pr event-fire krta hai. as toh mtlb apnko sirf ess fired-event pe event-listener set krna hota , mtlb ek function-blockcode set krna hota hai jo ek event k fire hone pr run/execute hota hai. 
// and yeh function ka naam "createReadStream"-function hai.
// as toh apn ess tarah apn eske fired event pe event-listener-functions set krteh hai.
// let fs_modulefile = require("fs")
// let evnenti = fs_modulefile.createReadStream("./class8-url-module.js")
// evnenti.on("open" , ()=> console.log("okay i am event-listner for yeh createreadstream event"))
// fn-suggestion :  on(event: "close", listener: () => void): ReadStream  
// yaha suggestion meh listener mtlb event-listerner jo ki funcition hi hota hai jo ki event- ki fire hone pr execute ho jata haii.
