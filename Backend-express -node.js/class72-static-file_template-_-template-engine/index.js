// YAHA pe apan STATIC-file-folder and its serving and phir TEMPLATE and TEMPLATE-engine k bareh meh dekhenge:
// STATIC-file ya folder:
// STATIC-file ya folder mtlb voh file jo hamesa static rheta hai mtlb uska content execute,processed,compile nhi hota hai as like, jaise ki uss meh koi .js file hai and essmeh javascript-code likha huaa hai then usseh apan jab apne server se serve krayenge as a static then vaha pe voh js-code jo hai execute,processed,compile etc nhi hoga mtlb jo written hai simply vahi show hojayega.

// aab now agar apnko kisi file ya folder ko STATIC bana k serve krna chahteh  hai then simply apan express-module k static('file or folder-name')  function ka use krenge:z

const express = require("express")
const fs = require("fs")
const api = express()
const path = require('path')
let  port = 80;
// let fi= fs.readFileSync('ht.html')

//NOTE: now ess tarah files ya folder ko as a static banaya and server kiya jata hai.
api.use('/ful', express.static('static'))
// NOTE-point: yaha pe /ful as a url end-point hai and 'static' is a folder name and agr apnko kabhi kisi file ko as a static-file ki tor pe serve krvani hogi then uss file ko apan ess folder meh daal denge and jis bhi node.js file se apn ese serve krva rhe hai usmeh yeh code ya ess template simply copy paste kr denge ya enn files ko apne code ya template meh access kr lenge.     
// NOTE-point-2: yaha jo bhi code hai voh as template hi hai mtlb jaise express.static('static') meh static is a content-place jaha pe static namak folder lag jata hai ya dal jata hai.

api.get('/', (req,res)=>{
    res.send('this is home page for this or of this website')
})
api.get('/home', (req,res)=>{
    res.send('all okay hai ji')
})

api.listen(port,()=>{
    console.log(`all okay our server is started and its is running on localhost at port-no ${port}`)
})

// TEMPLATE and TEMPLATE-ENGINE:
// template mtlb simply ek sacha ya format hota hai jis meh as according to that content daala ja skta hai, and yeh sacha ya format kuch design se animated bhi ho skta hai, ya simple bhi ho skta hai.
// now TEMPLATE different-types k hoteh hai on the basis of its inputing-content jaise:
// 1.photo-template (ese templates meh photo as a content hota hai and voh daala jata hai for eg. microsof-word meh kisi business-letter k liyeh koi business-template hoti hai mtlb apan sirf apna letter likhenge and phir ess business-template meh daal denge(mtlb apn toh sirf ess letter ko la k rhk denge phir baad meh ess template ka jo TEMPLATE-ENGINE hai voh ese apne template meh add ya daal dega) thus phir apna simple-written-letter uss template k tarah designed and animated ho jayega)
// 2.text-template (as like: a javascript-code:
//    console.log(`the name is ${name}`)  (this is a template jismeh koi ${name} ki jagah koi text-content aayega)
//    let name="harry" (this is text-content)
//    the name is harry (this is a result of TEMPLATE-ENGINE jisne template meh content ko daal k ya laga k esko template ki jaise bana diya)
// and orr bhi kaee types ki templates hoti hai and apn bhi enhe bana hai bcoz actually animated-program-file hi hoti hai.
     
// )
let rname = "harry"
console.log(`the real name of cwh is ${rname}`)
// now the TEMPLATE-ENGINE will put-up this text-content in the above TEMPLATE.
// toh mtlb TEMPLATE-ENGINE simply apne aap uss file ko uthayega and apne template meh daal dega but jaise apn simply dekhe toh apn phle uss file ko read krva k unhe store kr liya krteh the and phir unn files ko template meh access kr lete the toh mtlb aab apnko yeh sara kaam nhi krna padega
// mtlb apan template-engine ko inputs dete hai and enn inputs ko uski template meh kaha or kis tarah lagana hai voh set krke lga bhi deta hai and as a result use laga k output deta hai.
// toh mtlb sbse main TEMPLATE-ENGINE hota hai phir usske baad meh usske according template-file banae jati jaise agr template-engine pug hai toh template file .pug hogi and phir template-file banane k baad meh eska template-engine jis file esko use kiya gaya hai uss file k arguments ko yeh eski template-file meh pass kr dega.

// yaha set('this' , 'this') means ki "set this as this"
// api.set('view engine','pug')
api.set('view engine','pug')
//yaha pe template engine and view engine ka mtlb ek hi hai
// kisi template k liyeh jo template engine hai voh kisi template k liyeh phle as a "view engine" hota hai toh yaha apan .set('view engine', 'pug') meh view engine ko as a pug-engine set kr rhe hai
// where yaha pe pug ek template engine hai and eske according eski .pug files bnti hai mtlb yeh engine sirf enhi file-format ko scan krta hai and enhi ko hi samaj skta hai esliy pug-engine se kaam krvane k liyeh apnko  .pug files hi banani pdti hai and yeh .pug files as a text-template hi hoti hai jis meh kafi sare content-space chode jateh hai, and phir enko apn simply pug-engine se enko apne content se ful-fill kra lete hai, bt esse phle apnko engine ko set krna hona and phir  uss folder ko set krna hoga jismeh .pug files daali huee hai and phir atlast apan app.get('endpoint',(req,res)=>{
    // res.render('pug file name', make object for the key  to its values as like: {key1: hello ji, key2: harry, key3: etc.. etc..} )
// } )
// actual-point: mtlb ess kaam ko apan agar kr lenge then vaha pe abhi file meh se  kisi ek file ko bhi  readsync nhi krna padega as bcoz ki apan ek html-text-content-TEMPLATE banate hai jismeh apan kafi sari key values rkhteh hai and phir agar apnko kabhi unhe alag values se serve krna hoga toh voh apan res.render meh object unn keys ki-value ko edit and set krke easily serve krva skteh hai. 

// api.set('views', 'views')
api.set('views', path.join(__dirname, 'views'))
// api.set('views' , path.join(__dirname , 'class72'))
// api.get('/pugfile', (req,res)=>{
//     res.render('pugfile', {title: 'Hey', message: 'Hello there!'})
// })
// api.get('/ff', function (req, res) {
//     res.render('pugfile', { title: 'Hey', message: 'Hello there!' })
//   })
  api.get('/ff', function (req, res) {
    res.render('pugfile', { title: 'Hey', message: 'Hello there!' })
  })
