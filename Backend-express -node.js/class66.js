// YAHA pe WEBSITE ka SERVER create krna and HTML-FILES ko server k duvra serve krane k bareh meh dekhenge:

// BACKEND ka most important kaam hota hai ki client-requests ko respond krna, unko jo chahiyeh voh server krna.

const http = require('http');
const fs= require('fs')
// console.log(http)
let webst=fs.readFileSync('class34-Box shadow and text shadow.html')

// host mtlb aayojit krna ya kisi cheez ko rkhna, and;
// and website ki respect meh host ka mtlb jo ess website-k-content ko rkha hai ya ess website ko organise ya aayojit kr rha hai voh, and hostname mtlb jo host kr rhe hai uska naam and yeh hostname hamesa host-server ki ip-address ki form meh diya hai.
const hostname = '172.20.10.10';
// toh 172.20.10.10 yeh apne pc ka ip address hai and yaha pe apna pc physicsfeel-website ko host kr rha hai toh apan simply eske liyeh ek program likhenge jo ki apne ess pc ko as a server bana dega mtlb voh cheez bana dega jo ek network meh apni ess physicsfeel-website ko serve kr rha hoga. and phir in the created network meh agar koi member ese access krna chahta hai then uske apan internet protocol k according eska host krne wale ka name "hostname" mtlb as address assign krna hota hai jis se member ess server pe ja sake and website ko acces kr skeh
const port = 3000;
// port number mtlb jaise kisi host-server pe kafi sari website ki hosting hoti hai(mtlb aayojit hoti hai) toh sabhi website k liyeh alag-alag port(mtlb khache) banayeh jata hai orr unki numbering ki jati hai from 1to200 or 100 to upto no. of ports made or available etc.  

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(webst);
});
// .createserver is a function in http module jo ki apne pc ko as a server bana deta hai. and yeh function ek callBACK leta hai mtlb jb createserver se server create ho jayega then yeh inputed callback action fire kr dega,



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//yaha http meh  listen-function ka use yeh set krne k liyeh hota ki apan ne jo server create kiya hai usska address kya hoga mtlb jaise port no. and hostname. and listen mtlb jaha jis k pass apan ne apni website ko host krvaya hai vaha apan listen krenge, mtlb liten function meh as a input apan port no. and hostname dete hai and simply koi callback function bhi daal dete jisse jb yeh .listen function run hojayega tb simply yeh callback fire hojayega..

// NOW AAb inta sab kuch krne se apni website and its server chalu hojayega mtlb aab simply network meh koi client apne browser meh jake apni ess website ko search and access kr skta hai. TOH ess tarah kisi machine ko kisi website ka server banaya jata hai and phir essi tarah website-material ko serve kiya jata hai
