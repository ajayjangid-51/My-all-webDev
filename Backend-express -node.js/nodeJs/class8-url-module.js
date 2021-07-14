// YAHA pe apn Url-module k bareh meh dekhenge: mtlb eske functions se apn kya kya kaam kr skteh hai and kaise kr skteh hai voh dekhenge:

// 🎆 Url or WebAddress or querry-string: 🎆
// As browser k url-bar meh jo Web-address fetch hota hai usseh hi simply url bolteh hai and yeh url 3-cheezo se mil k bana hota hai mtlb simply ki uss url meh mainly 3-cheeze hoti hai...:
// 1.hostname
// 2.pathname
// 3.search

// Mtlb url-meh sbse phle hostname hota hai then "/" pathname hota hai and then "?" Search_name hota hai.
// As pathname forwardslash(/) k baad wala hota hai and search-name questionmark(?) K baad wala hota hai..

// And now es search-name k bhi parts hote hai as bcoz mtlb yeh searchname ek object hi hota hai jo stringfy-form meh url meh fetch krvaya jata hai... 

// Thus mtlb ess search-name k jo parts hoteh hai mtlb voh ess search-Object ki Keys hi hoti hai..

// 🔥🔥 As toh apn kisi bhi url ko uske parts and part k parts meh break kr skteh hai... 
// And yeh kaam apn url-module k parse()-fn se krteh hai mtlb krva leteh hai.. and yeh parse()-fn inputed url ko break krke ek "object" return krta hai jismeh voh parts(mtlb host , pathname and search) as a key-value pairs hoteh hai..

// Then mtlb apn kisi bhi url ko parse krke usseh access kr skteh hai mtlb uss url ko samaj skteh hai, and phir uske according user-ko respond kr skteh hai.

// Parse krna mtlb hi yeh hota hai ki kisi cheez meh jo पद (mtlb parts) hoteh unheh व्याख्या करना (mtlb unheh find krna or locate krna or point krna)

// as ess parse-fn ki return value meh voh keys-ka-name url-part-k-naam se hi hota hai mtlb: uss retrun-value-object meh host-key , pathname-key , search-key and querry-key .. yeh sab keys hoti hai
// and querry-key meh ess seachname k parts ka object hota hai..
// As apn janteh hai ki ess url ko querry-string bhi bolteh hai..


// thus toh sbse phle apn url-module ko directly import kr lenge bcoz yeh url-module node.js meh in-builted hai.
/*
let url_modulefile = require("url")

let user_requestedURL = "http://iamthehostname/iamalsopathname?iamserchname=searchi&searchnamekey2=awesome"

let parsefnreturnObject = url_modulefile.parse(user_requestedURL , true)

console.log(parsefnreturnObject.hostname)
console.log(parsefnreturnObject.host)
console.log(parsefnreturnObject.pathname)
console.log(parsefnreturnObject.search)
console.log(parsefnreturnObject.query)
console.log(parsefnreturnObject.query.iamserchname)

 */

// thus toh as like this apnko url-parsed hoke mil jata hai.


// Thus now aab apn user-request k according file ko serve krenge , as bcoz apnko pata hota hai ki user ka request kr raha hai , bcoz user apni request url-bar meh likhta hai and voh url-bar meh url apne pass aa jata hai , and thus apn uss url ko parse krke and then samaj k user ko respond kr deteh hai.
// now suppose ki user apne url-bar meh diff-diff request marta hai, thus toh uss request k according apnko usko respond krna hai.

let http_modulefile = require("http")
let fs_modulefile = require("fs")
let url_modulefile = require("url")

http_modulefile.createServer( (p1_req , p2_res)=>{
    // let requesturlrequest = p1_req.url
    let parseuserreqest = url_modulefile.parse(p1_req.url , true)
    let userfilerequestname = "." + parseuserreqest.pathname
    console.log(userfilerequestname)
    
    fs_modulefile.readFile( userfilerequestname , (err , data)=>{
        if(err){
            p2_res.writeHead(404, {'Content-Type': 'text/html'})
      return p2_res.end("404 Not Found")
        }
        p2_res.writeHead(200 , {"Content-Type": "text/html"})
        p2_res.write(data)
        p2_res.end()
        // return p2_res.end()
    })
    // readFile(path: string | number | Buffer | URL, options: { encoding?: null; flag?: string; }, callback: (err: NodeJS.ErrnoException, data: Buffer) => void): void
    // as yaha fn-suggestion meh callback: () meh callback-paramter ka suggestion ess format meh hota hai:
// parameter_namecallback : ( callbackparameter1 : callbackparameter1-type , callbackfnp2 : callbackfnp2-type) => callbackfnreturn-valuetype
   
}).listen(8000)