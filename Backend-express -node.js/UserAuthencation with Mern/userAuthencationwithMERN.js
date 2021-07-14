//
// JWT mtlb Json-Web-Token
// just follow this tut for user-authencation  using mern::
// https://medium.com/swlh/user-authentication-using-mern-stack-part-1-backend-cd4d193f15b1#:~:text=Set%20up%20a%20MongoDB%20database,our%20API%20routes%20using%20Postman%20.s

// or apn just apna tutorial- follow kr skteh hai:
// step1: npm init
// step2: make indes.js
// step3. install this all npm-packages:
// npm i express jsonwebtoken bcrypt body-parser cors mongoose dotenv

// thoda ek chota sa brief-baateh about these packages jo apnne install kiyeh hai:
/* 1. express ( as express node.js-ka-framework hai , jisseh apn kafi smoothly and easily rest-API bana skteh hai.)
   2.bcrypt ( yeh library(mtlb group-of-files or combo-of-files) hash-passwords k liyeh hai.) where hash-passwords or hashing-the-password mtlb Hashing performs a one-way transformation on a password, turning the password into another String, called the hashed password. “One-way” means that it is practically impossible to go the other way - to turn the hashed password back into the original password.
//    as mtlb password ki hashing krna mtlb password ko one-way transform krna into the string , where one-way meh uss password ko uss string meh transform krne ka ek hi tarika or uss hashed-password(mtlb password-string) ko vapis se uss actual-or-original-password meh transform krne ka ek hi tarika hai mtlb koi orr tarika nhi hai. toh mtlb yeh hashing-of-password security purpose k liyeh ki jati hai. and yeh hashing wala set-algorithm se kiya jata hai.
(visit this for defination of password-hasing: https://www.google.com/search?q=what+is+hash+password&oq=what+is+hash+pass&aqs=chrome.1.69i57j0i457j0i22i30l6.5401j0j7&sourceid=chrome&ie=UTF-8)

  3.mongoose (mongoose toh ek ODM(object data modelling) hai for mongodb and node.js mtlb apn ess moongoose-library se mtlb mongooose-library k functions se mongodb-database se connect ho skteh hai. where connect hone ka mtlb ki apn phir uss mongodb-database meh apna kaam kr skteh hai. )

  4.body-parser: (It is used to parse incoming request bodies in a middleware. mtlb ess library k functions se apn yeh kaam kr skteh hai.)

  5.jsonwebtoken: (This package creates a token used for authorization for secure communication between client and server.)

  6.cors: (CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.)

  7.dotenv: (Dotenv is a zero-dependency module hai jo ki environment-variables of the .env file ko load krta hai.)


  */

// step4:install nodemon (bcoz yeh node se sahi hai for the development-purpose and node sahi hai for production-purpose)
// npm i -D nodemon

// step5:setting up our express.js server: as toh now apn phle apna express se mtlb express-library se mtlb express-library-k-functions se apna server-create kr leteh hai.
// as apn yeh kaam index.js-file meh krenge.. so visit this file.

// step6: settuping up env-file and connectiong our server with mongodb:
// so sbse phle apn .env-file banayenge by the help of command: touch .env
// and now setup-mongodb-database: for short-complete-guide about mongodb-visit this: https://www.knowi.com/blog/getting-started-with-mongodb-atlas-overview-and-tutorial/

// or just continue as we prior:
// mongodb-password: cw10PCopnrRGtPml
// and mongodb-url is : mongodb+srv://ajuadmin:<password>@cluster0.dellx.mongodb.net/<dbname>?retryWrites=true&w=majority

// now go to .env-file and add port and database-url.
//  then after doing this:

// step7: as now aab apn apne server ko mongodb-se connecto krenge.. so eske liyeh kuch likhenge in the index.js , so go to index.js-file

// step8: defining user-Schema:
// so phle create a models-folder and then usmeh create a User.js-file , then go this User.js-file
