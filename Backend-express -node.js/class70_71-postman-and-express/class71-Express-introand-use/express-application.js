// yaha apan apane application ka actual code likhenge:

// yaha apan ek baar k liyeh phle express k bareh meh dekhenge:
// EXPRESS:
// express is web-application framework mtlb web-application ko dhacha dena ka kaam apan esse easily kr skteh hai
// express meh voh functions hoteh hai jin se apan apne server se serving ka kaam easily krva dete hai
// express k apan easily and fastly backend applications banateh hai
// express ka mainly use apan routing krne k liyeh krteh hai(yaha routing ka mtlb hai ki kis url pe kya show hoga ya kis req.url pe kya res.end() hoga etc..)

const express = require('express')
console.log(express)

let port = 80;
const ap = express();
ap.get('/',(req,res)=>{
res.end('hello ji this is response on your url that you type in your search-bar')
} )
ap.get('/hellohello',(req,res)=>{
    res.end('this is a response of get request on localhost/hellohello url')
    } )

    // yaha pe get('url', function{res.end('response')}) is a function jo ki request ko inputed-data ko respond krta hai.  
    
ap.post('/hellohello',(req,res)=>{
    res.end('this is a response of post request on localhost/hellohello url')
    } )
        

ap.listen(port, ()=>{
    console.log(`the server for our website is has been started and it is hosted on localhost on this port no ${port}`)
})

