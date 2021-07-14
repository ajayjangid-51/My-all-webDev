// NOW YAHA pe apn Mongodb-database k bareh meh dekhenge:
// as Simply boleh toh Mongodb-database ek interface(mtlb ek programming-language) provide krta hai jiska use krke apn apna database create kr skteh hai and uss database ka use kr skteh hai mtlb uss database meh data store kr skteh hai and stored data ko retrieve kr skteh hai.
// Thus toh now aab apnko simply Mongodb-database ki jo programming-language-interface hai voh sikhna hai , thus ek baar apn voh programming-language(or CLI(command line interface)) sikh gayeh ( 📓note-point: as apn kisi bhi application k CLI-mode ko usss application k respect meh CLI ko programming-language bol skteh hai ya bol deteh hai as bcoz ess CLI-commands mtlb queries mtlb code-statement se apn uss appication ko control kr skteh hai , usmeh program kr skteh hai mtlb usmeh kaam kr skteh hai. )

// Thus toh now aab apn Simply Mongodb-database ka CLI-mode sikhenge mtlb CLI-commands dekhenge takki apn apne Programs meh ess Mongodb-database ko access krke esmeh kuch as per apne according kaam kr sake. ( 💡💡Tip: as Agr apnko sab kuch cheeze program krni hai then vaha apnko needed Application ka CLI-mode aana chahiyeh , as agr apnko voh aata hai then tab toh phir apn apne Program se hi uss Application ko access kr lenge mtlb apnko uss application meh jo kaam krna hai voh apn apne program se kr lenge, thus ek baaar apnne apna programm bana liya mtlb voh kaam aab automated ho chuka hai, thus now aab apnko voh kaam vapise se krne k liyeh bas apne program ko start krna hota hai and sara kaam apne-aap easily ho jata hai.  ) as mtlb overall ki apnko har important-badi badi acchi-acchi Application ka CLI-version aana chahiyeh mtlb voh commands aane chahiyeh jinseh apn uss Application ko apne programm se access kr sake.

// Thus Now yaha pe apn Mongodb-Database ka CLI-version-commands(or mtlb querries) dekhenge and sikhenge takki apn apn programtically Mongodb-Database ko access kr sake (as Mongodb-database -Application voh Application hai jismeh apn ek database create kr skteh hai and uss database meh data store kr skteh hai and stored data ko as apne according retrieve kr skteh hai.whats upp brother alright  kkk 🔥)
// 📓🔔:notice1: as Mongodb-database-Application ka CLI-version node.js language meh bhi hai mtlb thus toh mtlb apn node.js syntax se hi CLI-commands likhteh hai. 🌟 Thus mtlb apn Node.js se apn database-Application bhi bana skteh hai , mtlb voh website , web-app bana skteh hai jo ki database se data retrieve krke show hota hai.

// 🔔:notice2: Mongodb-database NO-SQL database hai , mtlb ess mongodb se ya mongodb meh jo database banta hai voh NO-SQL database banta hai mtlb voh database( mltb structure for stroring data )-Structure Rows and Columns ka structure nhi hota hai , voh toh actually document meh javaScript-Object like Structure hota hai thus toh mtlb yeh ek aachi and mastam baat hai ki apna data document-file meh as a JavaScript-Object meh data stored mtlb assigned hota hai , thus mtlb yeh apne liyeh kafi aasaan ho jata hai data ko store krna and retrieve krna bcoz yeh cheez apn same as like as jaise kisi Object-meh key-value assing kr rhe hai vase hi hota hai.

// Getting-Started With Mongodb-CLI-mode:
// step1: AS toh sbse phle apnko Mongodb-software(mtlb application ) apne pc meh install krni hogi or ya apn Mongodb-Cloud-service-for-database (mtlb mongodb-atlas) ko directly online use kr skteh hai mtlb online uspe kaam kr skteh hai. toh yaha apn dono tarike apn hi try krenge.

/* As for downloading mongodb-sofware visit this: 
https://www.mongodb.com/try/download/community */
/* 👍AS for setting up for "mongodb-atlas"  visit this:
https://www.mongodb.com/cloud/atlas. and create account on mongodb-website and then simply create a cluster (mtlb "database" as yaha pe jo cluster apnne banaya uski location mumbai-india hai mtlb apna jo cluster mtlb database bana hai voh mumbai-server meh bana hai thus esseh apnko jldi respond milega q ki mumbai-se request jldi and directly aajati hai na isiliy.) // (yaha mongodb meh cluster ka mtlb guchha mtlb database ka guchha) */

// now after downloading or setting-Cloud-DAtabase(mtlb "mongodb-atlas" as mongodb-cloud-database ka naam hi hai mongodb-atlas) Mongodb-software(or app) apn Mongodb-CLI-mode install krenge

// Step2: install mongodb-driver
/*
// 🌟 Mongodb-Driver (Mongodb-CLI-mode) 🌟
// Mongodb-Driver ek software-interface hai inbetween user and Mongodb-functinality . mtlb simply application k CLI-mode + executer ko hi simply application-Driver khteh hai , mtlb apn usseh application ko access kr skteh hai and apna kaam kr skteh hai.

// thus for installing-mongodb-driver type this npm-command:
// npm i mongodb

// as mtlb yeh Drivers module hi hoteh hai., thus toh mtlb apn ess module k functions ka use krke uss mongodb-application-CLI-mode ko access kr skteh hai , mtlb inshort apn mongodb ko access kr skteh hai
 */ 
// Thus toh now aab apn ess installed-module ko apni ess file meh import kr leteh hai and then phir eske function ka use krke apne mongodb-database ko access krenge.

let mongodb_driver_module = require("mongodb")
// 💡notice: as ess require()-fn ki return value voh module-file hi hoti hai jo apnne required(import) ki hai.


// Step3: Creating-Mongodb-database
// now aab apn apne Mongodb-application se ya Mongodb-application meh database(mtlb cluster) create krenge. as yeh kaam apn GUI-interface se bhi kr skteh hai and CLI-interface se bhi kr skteh hai mtlb dono apporach se kaam toh ek hi hoga . as yaha pe apn har kaam automated rkhna chahteh hai mtlb programming se krenge tabbhi toh apnne mongodb-driver install kiya hai , (as dono approach meh steps toh same hi hoteh hai as esseh toh apn Graphics se krteh hai and esseh Commands-coding se krteh hai.) 

// so for Creating-Mongodb-database
// we use mongdb-module's MongoClient-Class-Object's k connect()-fn

// var mongoclienobj = require('mongodb').MongoClient;
let mongoclienobj = mongodb_driver_module.MongoClient
// ess "urli" k liyeh apnko phle apna database fully setup krna hoga and then apnko yeh string miljayegi.
let urli = "mongodb+srv://aju_mongodb:ajumongodb@121@cluster0.r7vt8.mongodb.net/aju_database1?retryWrites=true&w=majority"
mongoclienobj.connect( urli , (p1, p2)=>{
    // if(p1 == ture){
    //     // or apn esko directly esseh bhi likh skteh hai.
    //     // if(p1){}
    //     throw p1
    // }
    if(p1) throw p1
    console.log("Alright datbase created");
    p2.close()

})
// as yaha parameter2 meh callback()-fn meh apnne 2-paramter diyeh hai na , as toh yeh connect()-fn apna kuch kaam krke kuch 2-values ess function meh as a input pass kara deta , thus isiliy apn yaha 2-parameters pass kr rhe hai , and thus phir yeh connect()-fn jo bhi 2-value apne ess function meh pass krvayega ,unn values pe apn kuch bhi kaam kr skteh hai mtlb kuch bhi react kr skteh hai thus toh yeh apnko ek acchi power milti hai ki apn unn values pe kuch bhi kaan kr skteh hai.
// mongoclienobj.connect()

// mysql == mongodb
// record == document
// table == collection
// database-group == cluster
// 

// 📓note-point:AS yeh Mongodb meh database tab tk create nhi hota jab tk apnn ess database meh kuch collection add nhi krteh hai. and collection tab tk create nhi hota jab tk uss collection(mtlb table) meh kuch document(mtlb record in js-object-form) insert nhi krteh hai. 





