// NOW YAHA pe apn mongodb-Cluster(mtlb mongodb-database) meh Collection(mtlb Table) create krna and uss Collection(mtlb table) meh document(mtlb js-Object mtlb record) insert krna dekhenge:

// 🌟 Creating a Collection:
// as toh Collection create krne k liyeh apn createCollection()-fn se krteh hai.

let mongodb_driver_module = require("mongodb")

let mongoclient_object = mongodb_driver_module.MongoClient
let url = "mongodb+srv://aju_mongodb:ajumongodb@121@cluster0.r7vt8.mongodb.net/apimx?retryWrites=true&w=majority"

mongoclient_object.connect(url , (p1 , p2)=>{
    if(p1) throw p1
    console.log("okay database created");
    // as ess second-parameter(p2) meh connect()-fn jo apna database banta hai voh as p2 meh pass kr deta hai.
    // let ourcreated_database_or_cluster = p2.db("mydbi")
    let ourcreated_database_or_cluster = p2.db("apix")
    // p2.db("database-name") or p2.db("collection's database-name") for inserting data.
    // Ajay_Mongodbtesting

    /*
    ourcreated_database_or_cluster.createCollection( "ajucollectn14" , (er , res)=> {
        if(er) throw er
        console.log("okay brother collectio created");
        p2.close()
    
    */

        // 🌟 Inserting-Data into Collection:
        // Now aab apn apne Created-Collection meh data-document(mtlb jsObject insert krenge)
        // and yeh kaam apn database db k insertOne()-fn se krteh hai. as like this:

        // 
        let record_obj = {
            name: "aju jangid",
            div: "K",
            phoneNo: "7877945707"
        }
        // .collection("collection-name") meh collection-name and note-point: agr inputed-collection exists nhi krta hai then ess naam se collection create ho jata hai.

        /*
    ourcreated_database_or_cluster.collection("ajucollectn14").insertOne(record_obj , ( er , re)=>{
        if(er) throw er
        console.log("record Object docuement inserted successfully")
        p2.close()

    })

     */

    // 🌟 Inserting-multiple data(or mtlb documents mtlb jsobjects) and yeh kaam insertMany()-fn se krteh hai. and ess insertMany()-fn ka first-parameter "array-of-JsObject" hota hai and second-parameter toh callback()-fn hi hota hai.

    let array_of_jsObjects = [
        { 
            user1: "i am user1",
            phno1: "787797",
            email: "akjjan7725@gmail.com",
            password: "ajay akj"
        },  
        { 
            user2: "i am user1",
            phno2: "787797",
            email2: "akjjan7725@gmail.com",
            password2: "ajay akj"
        },  
        { 
            user2: "i am user1",
            phno2: "787797",
            email2:"akjjan7725@gmail.com",
            password2:"ajay akj"
        },  
        { 
            user3:  "i am user1",
            phno3:  "787797",
            email3: "akjjan7725@gmail.com",
            password3: "ajay akj"
        },  
        { 
            user4: "i am user1",
            phno4: "787797",
            email4: "akjjan7725@gmail.com",
            password4: "ajay akj"
        },  
    ]

    // })
    ourcreated_database_or_cluster.collection("ourusers").insertMany(array_of_jsObjects , (er , res)=>{
        if(er) throw er
        console.log("all datas inserted");
        p2.close()
    })
})