// Now first-of all visit mongodb.com as to set-up database for our whatsapp
// note-point : as mongodv-databse nosql-database hai mtlb voh apn baad meh dekhenge; as mtlb yeh mongodb-super-begineer-friendly mtlb yeh  super-easy to understand and super-easy to use hai.

// so visit mongodb.com >> loging with csefeel@gmail.com >> click on create-cluster >> click on leftsidebar-project >> click on new-project >> now write the project-name and continue all simple-forward things.  >> now click on build-Cluster >> 

// so after-all that , aab apn apne vscode meh aake apni First API-banateh hai.

// now for Costruction-API : we will these steps one by one:
// step1: importing all requirements
// step2: app-config
// step3: middleware
// step4: DB config
// step5: ??(surprise)
// step6: api-routes
// step7: listerner


  // add this in package.json -file :  "type": "module",
//   as toh esko add krne se apn nodejs-k-module ko react-syntax k according import kr skteh hai. as like this:

// imports:
// import express from "express"
// import variable-name from "variaalbe-file-name"
// for // "type": "module",
// let app = express()
// app.get()
// or 
let mongoose_modulefile = require("mongoose")
let  express_modulefile = require("express")
let message_modulefile = require("./dbMesaages")
// as toh ess express-module apnnko function( anonyms-fn ) return krta hai mtlb voh function ess "express_modulefile"-container meh store hojega , thus toh mtlb apn phir ess container meh assigned funcition ko ess tarah call krlenge. meh class hai jo apnko return hojayegi ess container meh. toh apn phle 
let app  = express_modulefile()
// console.log(express_modulefile)

app.use(express_modulefile.json())
// app-config:

// db-config
// as now apn apne application ko database se connect krenge , takki apn uss database ko access kr ske and yeh kaam apn mongoose-module se kr leteh hai.
// mongoose_modulefile.connect("mongodb+srv://admin-whatsapp-mern:<password>@cluster0.ig6ng.mongodb.net/<dbname>?retryWrites=true&w=majority")
//  📓note-point: as yaha apn password and dbname ko replace krke unki values daalni hai.
 mongoose_modulefile.connect("mongodb+srv://admin-whatsapp-mern:XgKygDCNa68A9hf6@cluster0.ig6ng.mongodb.net/whatsappmerndb?retryWrites=true&w=majority" , {
     useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true
 } )
//  mongoose_modulefile.connect() as apnko connect() function k parameters suggestion se pata chal jayege.
//  or ya apn esseh bhi kr skteh hai:
// let onlinedatabase_url = `mongodb+srv://admin-whatsapp-mern:<password>@cluster0.ig6ng.mongodb.net/<dbname>?retryWrites=true&w=majority`
// mongoose_modulefile.connect(onlinedatabase_url)

// NOw-aab apn "dbMesaages.js" naam se ek file banayenge jismeh apn sara data store krenge..

// routes:
app.get("/" ,(p1_req , p2_res)=> {
    p2_res.status(200).send("hey bros kaisa hai. awesome hu yrr tuh bata")
} )


// toh api mtlb application ki programming , thus api create krna mtlb application ki programming create krna mltb application jo kaam krta hai voh likhna.
// as fronend se mainly yeh-yeh requests aa skti hai jaise: get-request , post-request , delete-request and many-more other.

app.post("/messages/new",(p1_req,p2_res)=>{
    let dbMessage = p1_req.body

    message_modulefile.ag.create(dbMessage , (p1_err , p2_data)=>{
        if(p1_err){
            p2_res.status(500).send(p1_err)
        }
        else{
            p2_res.status(201).send(p2_data)
        }
    })
    })

    // as esseh apna sara inputed-data apne database meh chala jayega , and now eske k baad meh apn APi-banayenge mtlb application-programming likhenge jisseh apni aaplication database meh stored data utha lega.

    🌟🌟 🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔 CONTINUE-THIS VIDEO FROM THIS 2:26:45 
    //🔔🔔🔔🔔🔔🔔🔔  https://www.youtube.com/watch?v=gzdQDxzW2Tw&list=PLXNYPgeFRwVFA7AvN5LQki8ZU2QEKBOT8&index=7&t=3427s 🔔🔔🔔🔔🔔🔔🔔
    // open all these pages before resuming:
    // 1.mongodb-datbase  => https://cloud.mongodb.com/v2/5f719f8bf6e8a81f7c6a0f71#clusters
    // 2.material-Ui => https://material-ui.com/components/material-icons/
    🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔




// Listen:
app.listen( 9000 , ()=> console.log("awesome sever-started"))

// or install the nodemon by typing this: npm i -g nodemon
// as agr apn nodemon install krlenge toh apnko server ko baar stop and start nhi krna padega . as esiliy bolteh hai ki nodemon is for developement-purpose and node is for production-level-propose bcoz production meh toh apnko apna server sirf ek baar start krna hota hai , but development-mode meh apnko apne server ko baar-baar ko stop and start krna hota hai q ki apn vaha development kr rhe hai mtlb apn sari defined cheeze testing bhi krteh hai.

// 🎆 Setuping Database online , as not downloading the database and then doing all things as jaise apn mysql-database meh krteh thee.
// now aab apn apne database ko connect krenge: 
// before that go to mongodb-account >> click on >> database-acces >> click on add new datbase user>>  set the user-name and password >> click on add-user 
// password-for-mongodb XgKygDCNa68A9hf6

// after-that: go to network-Acess >> click on add IP-address >> input the IP-address and all 

// now go to cluster >> click on connect >> click on connect your application >> copy that string-code and paste it in :
// > mongodb+srv://admin-whatsapp-mern:<password>@cluster0.ig6ng.mongodb.net/<dbname>?retryWrites=true&w=majority