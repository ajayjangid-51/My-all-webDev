// YAHA pe apn JavaScript se node.js k module ko use krke Email-Send krna dekhenge:
// as toh yeh kaam krne k liyeh apn node.js k "nodemailer"-module ko use krenge: as yeh module node.js-compiler meh in-built nhi hai. thus toh mtlb apnko phle yeh "nodemailer"-module download and install krna hoga , thus for installing type this: npm install nodemailer

// as toh now aab apn ess "nodemailer"-module ko import kr lenge:
let nodemailer_moduleFile = require("nodemailer")

// i = 0
// for( i ; i<20 ; i++ ){}

// as apn ess tarah program ko loop meh daalke multiple-times mail-bhej skteh hai ek dam mast tarike se.


let mailtransporter = nodemailer_moduleFile.createTransport({
    service: "gmail",
    auth:{
        user: "physicsfeel@gmail.com",
        pass: "me  physics"
    }
})

let param1_forsendMailfn_mailOption  = {
    from: "physicsfeel@gmail.com",
    // to: "i19ph057@phy.svnit.ac.in",
    to: "csefeel@gmail.com",
    // to: "akjjan7725@gmail.com",
    // 🎆Tip: as apn ek saat multiple-mailIDs pe mail send kr skteh hai by simply putting that mail-ID in the "to"-key as like this:
    // to: "akjjan7725@gmail.com , i19ph057@phy.svnit.ac.in , csefeel@gmail.com ",
    
    subject: "awesome 20 mail will be send Email sent by nodemailer- automation",
    // subject: "You may set your communication preferences here We hope you enjoy receiving news and special offer emails from Flipkart.com. If you would prefer not receiving our emails, please click here to unsubscribe.",
    // text: "kaise hai londe this is the power of automation"

    // 🎆Tip: as apn text ki jagah html-code mtlb ek webpage bhi bhej skteh hai simply by using "html"-key in place of "text"-key  as like this:
    html: ` <!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">  <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="demofile1.css">
        <style>
            h1{
                color: orange;
                border: 2px solid blue;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <h1 >osm bro osm!!</h1>
    </body>
    </html>
    
    `
    // 🎆 AS toh apn ess tarah ek mast pura-html-webpage bhej skteh hai , thus mtlb voh apan webpage kafi accha and attractive lalega. 🎆


}

mailtransporter.sendMail( param1_forsendMailfn_mailOption , (err , infos)=>{
    /* if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  } */
//   or apn directly yeh bhi likh skteh hai as mtlb q ki function meh passed-paramters jaruri nhi hai ki apn unheeh function meh use kare hi.
    console.log("welldone Mail-sent sucessfully")

})
// } this curly-brace is of loop. jo ki apnne use kiya tha for sending 20-times-mail at a time.
