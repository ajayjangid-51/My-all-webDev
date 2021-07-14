// YAHA pe apan .pug file meh kuch variables rkenge and enke saat-saat meh HTML-content bhi likhne takki apan HTML-content ko dynamically change kr ske simply just by passing the different agruments in the .pug file's variables via its engine:
const express = require('express')
const api = express() 
const fs = require('fs') 
const path = require('path') 

// EXPRESS working STUFF


// pug related STUFF
api.set('view engine','pug')
// NOTE: VS-CODE clues meh set(setting: string ,val:any) mtlb set setting to its-value or setting's return value and yaha pe setting:string mtlb write setting-name if form of string and val:any mtlb write the value-name in any form it may be string, or any created-varialbe.

// now setting the view-setting ya template-setting to its value mtlb template konse folder meh hai
api.set('views','./view')
api.use(express.urlencoded())

// END-POINTS for the requests
api.get('/',(req,res)=>{
    // let params = {
    //     title: "hello title ji",
    //     content: "awesome hai ji"
    // }
    const params = {'helloji': "hello ji i m title", 'content':'mast hai ji'}
    res.status(200).render('htmlandvar.pug', params)
    // IMP NOTE-point: toh apanko kabhi ess tarah template file meh HTML daal ke and phir kuch variables bhi daalne hai then phir apan unn variables ki "KEY-name" apan ess #{ } meh daalteh hai and ess 'KEY-value' apan jis file meh render krva rhe hai vaha pe set kr teh hai voh bhi phle ek object bana kr k jis meh KEY-name and its value ek STRING meh hi likhni hoti hai.     

})
api.post('/hhhh', (req,res)=>{
    console.log(req.body)
    Name = req.body.Name
    age = req.body.age
    email = req.body.email
    ph = req.body.ph
    address = req.body.address
    // mtlb ess req.body se jo information client ne html-page ki body fill ki hai voh toh agr apan console.log(req.body) krteh hai then client ne jo bhi body meh fill kiya hai voh simply console meh in a form of OBJECT print ho jayega bcoz dekhe toh yeh "req.body" ek OBJECT hi hai.
let clientinfo = `the name of client is ${Name} and its age is ${age} its email is ${email} and ph is ${ph}`
    fs.writeFileSync('info.txt', clientinfo)
    // toh esseh apne pass ek file ban jayegi and uss yeh "clientinfo" content aajayega but apan ese nhi krenge apan ess clientinfo ko directly apne "DATABASE" meh daalenge. yaha database mtlb jaha pe apna sara data store hai and jaha apna website ka data and website pe aane-wala data manage hota ho.
    // as like jaise facebook.com pe kisi ne apni info daal k ek apni id banaee thus fir voh id-information facebook.com k database pe jayegi and store hogi and phir uss info data k according facebook.com ka database uss id-info k liyeh ek alag hi block bana dega and phir kuch if else lga k usi id pe ese kuch shown hoga voh apn aage or acche se dekhege:
    let dta = req.body
    const params = {'message': "your form is submitted succesfully", 'content':'mast hai ji'}
    res.status(200).render('htmlandvar.pug', params)
})
// agar yaha upr apan dekhe toh ess end-point pe koi template as a response serve ki ja rhi hai jis yeh arguments:var1 and var2 pass kiye jayenge.
// TIP-point: toh apan aab hamesa jdatr ese template- meh hi HTML and diff KEY:VALUES serve krvayenge takki apni website dynamic lage.

// START the SERVER
let port =80;
api.listen(port,()=>{
    console.log(`okay the status is 200 and the server is started at localhost on the port-no ${port}`)
})


