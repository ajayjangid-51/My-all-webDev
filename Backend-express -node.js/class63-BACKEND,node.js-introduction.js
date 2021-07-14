// YAHA pe apan BACKEND , backend-programming in JAVASCRIPT and node.js k bareh meh dekhenge:

// BACKEND-INTRODUCTION:(server-introduction)

// backend define hota hai website k liyeh mtlb jo website ka html,css,js code and voh programs jo client-requests actually respond krteh etc hai voh kha rkha gaya hai..  toh mtlb voh jaha rkha gaya hai usse backend kha jata hai (jaise apan ne vs-code se koi bhi website bana ee and go-live kiya toh browser meh dekhne wali website ka backend kha pr hai toh ess website ka backend(ya server) apane pc meh hi hai bcoz ess website ka html,css,js code apne pc meh rkha gaya hai and jaise apan ne facebook.com website kholi toh ess facebook-website ka backend kha hai toh voh actually facebook-company california meh hai mtlb vaha pe store hai and vaha se ess facebook-website ka html,css,js code aa rha hai and kaphi sari client-requests etc unka respond bhi eske backend se hi aa raha hai.)
// BACKEND-prgramming means backend k liyeh program banana. 

// NOW aab apan javascript ko script krenge "backend(server) of website" k liyeh programs banane meh mtlb website k backend ya server pe agar apanko koi process krvani hai toh simply apan uss process k liyeh program bana lete hai by the javascript.
// and yeh program actually apan banateh jab apanko server pe incoming client requests ko respond krna ho.
// simply boleh toh apn apne server k liyeh program banayenge jaise abhi tk apan webpage pe run hone-wale program bana rhe the by the "IN-BROWSER javascript" but as apan aab apne server(apne pc) pe run hone wale program banayenge by the javascript only but yaha javascript-compiler koi browser nhi hoga yaha apan ek alag se  compiler "node.js-compiler" ka use krenge.

// NODE.js INTRODUCTION:

// NODE.js ek compiler hai and yeh node.js-compiler chrome-browser-compilers meh se nikala huaa hai which is initially called V8javascript-engine but essmeh phir esmeh kaphi sareh alag se aur features jaise modules,libraries etc add ya IN-built kiyeh gayeh hai and aur bhi kaphi accchi tarah se es compiler ko enhance and modify kiya gaya hai and then it is named as "NODE.js".
// as bcoz FRONT-end scripting meh itne ase kuch advanced features ki jarurat nhi hoti but BACK-end k liyeh ese features jaruri hai. thus isiliy node.js-COMPILER ka use back-end programs ko banane meh use krteh hai as simply apan programming krteh time ess node.js meh in-built modules,libraries etc ko simply import and run krva skteh hai.

// note-point: as apan frontend-programs k liyeh apan apne code ko browser se compile krvateh hai bcoz vaha pe apanko simple-JAVASCRIPT k saat-saat HTML,CSS bhi run krvani hoti hai, as ki apan janteh hai ki browser meh HTML-compiler, CSS-compiler and JAVASCRIPT-compiler tino present hoteh hai.

// mtlb apan apne backend(server) meh chalne wale programs banayenge ya boleh website k server pe chalne wale programs orr yeh programs on the basis of jaise website-serverr ko kaise manage krna hai, server pe incoming requests(incoming informations inputed by website user client, incoming-data inputed by client) ko kaise manange krna, incoming requests ko kaise respond krna etc etc...


// NOTE:apan jdatar beckend pe voh programs banateh hai jo incoming client-request ko respond kr skteh hai.

// MORE on NODE.js
// 1.node.js simply ek compiler hai jo ki website-beckend k programs ko compile krta hai and ese kaphi sari companies bhi apne server k programs k liyeh node.js as compiler ka use krti hai bcoz yeh kaphi accha hai, fast hai(mtlb jldi compile kr run krdega), or essmeh kaphi sareh acche-acche MODULES in-built hai.
// ("Module" mtlb voh code jo apanne nhi likha ho but apan ess code ko apne code meh import kr skteh hai and ya phir ase bol skteh hai ki Module ek chota-program hai ya ek function hai jis meh multiple functions embeded hai and ese(Module) ko import krne and phir ese call kr k ese execute kr skthe hai)

// 2.node.js is a modified version of chrome's V8javascript-engine ya compiler.

// 3.node.js se scalabel-network-appilcations ko support krta hai.
// 4.node.js is open-source server (mtlb agar apan node.js k development apna yogdan dena chahteh then voh freely de skteh
// hai )
// 5.node.js kaphi sari languages ko compile krta hai and mainly JAVASCRIPT ko bhi compile krta hai.
// 6.yeh node.js sabhi OS pe chalta hai.




// TERMINAL:
// TERMINAL mtlb voh jagah jaha apan apne compiler ko call krteh hai and usseh bolteh hai ki meri ess file ko compile and run krdo and vaha pe apan kuch additional-code likh k haato-haat use compile and run bhi kra skteh hai.
// TERMINAL-features:
// 1.REP-loop in TERMINAL:
// mtlb terminal meh har command k liyeh REP-Loop chalta hai.
// REP-Loop(read evaluate, print loop) toh simply REPL ek loop hai jiska kaam TERMINAL meh input-command(jaise a=34,b=1.or
// and a+b toh enn sab pe REP-LOOP serial-wise apna kaam krenga ) ko read krna and phir usse variable meh evaluate krna and
// atlast print krna
// mtlb:
// jaise we write
// a=34
// toh yaha repl ess work krta hai
// sbse phle repl ess a=34 meh 34 read krega mtlb 34 ko dekhega, then ess 34 ko a-variable se store ya evaluate kr dega and
// then phir print kr dega and atlast vapis se ussi starting meh aa jayega for the other vaiable or commmand in the
// terminal.

// 2._ in TERMINAL:
// _(underscore) se apan just-last command pe jo loop chala tha uski evaluated value ko access ya call kr skteh hai and esi
// tarah MATLAB meh apan ans se just-last-command pe loop chala tha usko value ko call kr skteh hai

// 3. terminal meh "double-TAB" krne se node.js k sareh in-builted modules,objects show hoteh hai.toh kabhi kisi module ka use krna ho then apan yaha se dekh skteh hai.

// NOTE:IMPORTING-modules in JS from node.js:
// toh jaise kabhi beckend JAVASCRIPT meh kisi module ko import krna chahteh hai we simply type:
//                      require('module-name')



// <!-- beckend mtlb server pe chalne wala program nhi hota backend toh ek platform hai jaha website-data store hota hai -->


// JAVASCRIPT-code FOR BECKEND:

console.log("good")

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// toh jaise apan ne yaha upar ek program banaya jo ek simply "hello world" webpage create krta hai ya bana deta hai 
// toh jaise agar apan yeh program banana nhi janteh toh ek simple "hello-world" webpage banane k liyeh apnko sbse phle ek .html file banani pdti and phir usmeh sara html-format likna pdta and phir uss .html file ko run with browser ya go live krna pdta but yeh sara kaam apan simply ek program bana k krva liya jis ko apan ne 
// node.js compiler se compile and run krvaya tha.

//     toh ase apan orr bhi bohat sareh program bana skteh hai jo ki apne server(computer) pe chalenge or incoming request to server ko handle krenge;
