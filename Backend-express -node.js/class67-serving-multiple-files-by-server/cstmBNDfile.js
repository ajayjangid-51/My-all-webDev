// YAHA pe apan CUSTOM-BACKEMD-programs k bareh meh dekhenge:(custom mtlb phle se chlti aae huee reet)

//first simply-- "website-BACKEND ka jo main and important kaam hota hai voh yeh hai ki clients ko website-files serve krna and yeh files apan apne BACKEND pe program bana kr k usse serve krvateh hai. toh yaha pe jo BACKEND ka main-important part hai usse simply CUSTOM-BACKEND kha jata hai and thus CUSTOM-BACKEND meh custom-program daale jateh hai" and custom-program mtlb simply voh program jo client's request k hisab se website files ko serve krta ho. 


const http = require('http')
const fs = require('fs')
const portno = 80
const hostername = '172.20.10.10'

let abpage = fs.readFileSync('./about.html')
let cnpage = fs.readFileSync('./contact.html')
let inpage = fs.readFileSync('./info.html')
let hmpage = fs.readFileSync('./home.html')

const ourserver = http.createServer((req, res) => {
    console.log(req.url)
    //req.url means all requests by the client on the website in the url-"form" , thus console.log(req.res) will print all the client request in url form.
    // jasie /anchor-name or /koi bhi icon pe click " or koi bhi client-request jaise client k duvra home button pe click kiya gaya then yeh ek request hai and esski url form is equal to "/home")

    // ya phir jo bhi client ne request ki hai voh simply url meh chali jayegi toh "req.url" ka mtlb hai ki req se jo url edit huaa hai voh jaise info pe click krne /info url meh chala gaya toh res.url ka mtlb yeh yeh /info...
    // simply boleh toh res.url ka mtlb hostname k baad jo kuch hai voh req.url hai

  linkk = req.url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end(abpage)

if (linkk == '/' ) {
    res.end(hmpage)
}
else if (linkk == '/about') {
    res.end(abpage)
  }
  else if (linkk == '/contact') {
    // res.end(cnpage)
    res.end("hello ji this is response on the /contact request by me(API)")
  }
  else if (linkk == '/info') {
    res.end(inpage)
  }
else{
    res.statusCode = 404;

    res.end('content 404 not found')
}
   
});

ourserver.listen(portno, hostername, () => {
    console.log(`Server running at http://${hostername}:${portno}/`);
})

    //   else if{kaam krdo} (mtlb agar esa nhi and agar yeh hai toh yeh kaam krdo)

    // VERY-IMP-NOTE-point: apan ne jo upar kaam kiya hai voh apan asani se express-moudle k functions se asani se krva skteh toh.. agar kabhi apanko esa kaam phir se krna ho voh apan express-functions se  easily krenge: