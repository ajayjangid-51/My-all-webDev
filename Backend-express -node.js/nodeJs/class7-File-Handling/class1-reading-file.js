// AS now YAHA pe JavaScript se File-Handling krna dekhenge:
// where File-Handling mtlb apne computer meh present files ko select krne k open krna and phir usseh create , rename ,  read , write , close and delete , sab kuch krna is known as simply file-Handling krna.

// as now yeh File-Handling k liyeh apne node.js meh ek buitl-in modulefile( named "fs") hai jiske functions se apn yeh file-handling kr skteh hai.

// thus toh sbse phle apn "fs"-module ko import karenge:
let fs_modulefile = require("fs")

// 🌟1: Reading-files
// as now apn file ko read krna dekhenge , mtlb file ko open krke uske content ko dekhna, lena dekhenge. thus mtlb apn uss file ko read krne mtlb uss file k content ko leke apn uss as a respond meh return krva denge. as like this: 
// and yeh kaam apn "fs"-module k readFile()-fn se krteh hai.
let http_modulefile = require("http")
// let fs_modulefile = require("fs")

http_modulefile.createServer( ( p1req , p2_res)=>{
    fs_modulefile.readFile("./demofile1.html" , (p1_err , p2_filecontent)=>{
        p2_res.writeHead(200 , {"Content-Type":"text/html"})
        p2_res.write(p2_filecontent)
        return p2_res.end()

    })

    // as yeh fs_modulefile ka readFile()-fn ka 1st-argument file-name hota jisko apnko read krni hai mtlb uska content lena hai and 2nf-argument ek function hota hai jo ki phir client ko respond return krta hai mtlb website return krta hai. and whereas ess function meh 2-parameters hoteh hai jo ki yeh readfile()-fn usmeh input krta hai.

    // 📓note-point: as apn uss reading-file meh linked file ko read nhi kr payenge.


}).listen(7500)