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


// visit this: https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp