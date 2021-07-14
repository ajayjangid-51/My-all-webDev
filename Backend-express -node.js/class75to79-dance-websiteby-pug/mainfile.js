const express = require('express')
// console.log(express)
const api = express()
// this means ki express k andar ek exprss namak function hai jismeh 
// console.log(api)
const fs = require('fs')
const path = require('path')
// yeh path function kisi bhi directory path apne aap le leta hai bs apanko sirf uss directory name likhna hota hai.
let port = 80;

// EXPRESS related STUFF:
api.use(express.urlencoded())

// STATIC FILE related STUFF:
api.use('/staticsfls', express.static('staticsfls'))
// esseh staticsfls ki files hamesa k liyeh static bani rhegi and toh ese koi include bhi krta hai then ussmeh voh staticly hi behave kregi. and yeh kaam ata hai jb apan .pug-file meh .css-file and .js-file include krteh hai tab. 
// here this api.use means ki api meh ek use namak function hai and simply usse apan use krna chahteh hai and essmeh express.static means ki static ek function hai jo ki express ka hai isiley ess function ko tag krne k liyeh apne express.static likhna hota hai.

// PUG related STUFF:
api.set('views engine' ,'pug')
// api.set('views' , 'views')
api.set('views' , path.join(__dirname , 'views'))
api.use(express.urlencoded())




// END-POINTS:
api.get('/',(req,res)=>{
    const params ={}
    res.status(200).render('pugfile1.pug', params)
})
api.get('/contactus',(req,res)=>{
    const params ={}
    res.status(200).render('pugfile3.pug', params)
})
api.post('/contactus/hhhhtb',(req,res)=>{
    console.log(req.body)
    let ff = req.body.email
    fs.writeFileSync('userdata.txt', ff)
    const params ={}
    res.status(200).render('pugfile3.pug', params)

})


// STARTING the server
api.listen(port ,()=>{
    console.log(`allright the status-code is 200 and our server is started at the localhost on the port-no ${port}`)
})

// TIP-POINT: Toh ess tarah kisi project start krne se phle apnko yeh sara kaam krna hona hai takki aage apnko asani ho and apna project achhi tarah se manage rhe.



