const express = require('express');
const exp = express();
// yaha apn ne express object ko store-kr liya hai
const fs = require('fs');
const path = require('path');

exp.use('static' , express.static('staticfiles'))
exp.use(express.urlencoded())

exp.set("views engine" , 'pug')
exp.set("views" , path.join(__dirname , 'templates'))

// file-reading-writing by "fs"
let homehtml = fs.readFileSync('workma-content.html')
let htmlcollege = fs.readFileSync('clg.html')
let htmlcoaching = fs.readFileSync('coa.html')
let htmlschools = fs.readFileSync('sch.html')
let htmlsupport = fs.readFileSync('sup.html')
let cssfile = fs.readFileSync('workma.css')



// END-POINTS:
// get-requests:
exp.get('/', (req,res)=>{
    console.log('okay get end-point started')
    // res.status(200).send('workma-content.html')
    res.status(200).end(homehtml, cssfile)
})







// Post-requests:
exp.post('/signin', (req,res)=>{
    res.status(200).send('signin.html')
})
let port = 80
// STARTING-Server
exp.listen(port , ()=>{
    console.log(`all right server has been started at the port no ${port}`)
})






