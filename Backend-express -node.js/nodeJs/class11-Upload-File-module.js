// As YAHA pe apn Client se File-Uploading krna dekhenge:
// as yeh kaam apn "formidable"-module se krteh hai.
// as yeh "formidable"-module node.js meh in-built nhi hai, thus toh apn ess "formidable"-module ko phle package-manager se install krvalenge mtlb krlenge.
// toh for installing this formidalbe-module type this: npm install formidable

// as now aab apn ess "formidable"-module ko import krleteh hai:
// let formidable_modulefile = require("formidable")

// Step1: creating a html-form so that user can input the file in that form.
let http_modulefile = require("http")
// http_modulefile.createServer( (p1 , p2)=>{
//     p2.writeHead(200, { "Content-Type": "text/html"})
//     p2.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     p2.write('<input type="file" name="filetoupload"><br>');
//     p2.write('<input type="submit">');
//     p2.write('</form>');
//     return p2.end()
// }).listen(7500)

// as ess function ka suggestion yeh hai" createServer(options: ServerOptions, requestListener?: RequestListener): Server  , thus esseh apnko pata chal raha hai ki ess createServer()-fn ki return-value server hai mtlb yeh function apne computer ko server bana dega.

// 🌟2. Parsing the uploaded-file by user
// as aab user ne file upload kr di hai , and now aab apn ess uploaded file ko parse karenge , and yeh parsing apn formidable-module se krteh hai. so importing the formidable-module.

let formidable_modulefile = require("formidable")

// as jaise hi file upload and parsed hojayegi then voh apni computer ek temporary folder aajayegi
/*
http_modulefile.createServer((p1, p2) => {

    if (p1.url == "/fileuploading") {
        // as apn janteh hi hai ki user-requests mtlb user jo apne-browser k url-line meh likhta hai na vohi actually user-requests hoti hai, thus mtlb voh user-requests ess p1.url-Object meh store ho jati hai. toh apn ess url-object ki value dekhkr pata laga skteh hai ki user apne url-meh kya type kr raha hai bcoz voh userrequest(user inputing url) apn pass aata hai and ess p1.url-key meh store ho jata hai.
        let userform = new formidable_modulefile.IncomingForm()
        // as toh apnne yaha IncomingForm()-classObject ki copy bana li hai and now aab apn eske keys and functions ko easily use kr skteh hai bcoz voh sab ess userform-container meh aagayeh hai.
        userform.parse(p1, (err, fields, files) => {
            p2.write("your file uploaded sucessfully")
            p2.end()
        })
        // parse(req: IncomingMessage, callback?: (err: any, fields: Fields, files: Files) => any): void
        // as mtlb apnko callback-fn meh yeh parameters dene hai.

    }
    else {
        p2.writeHead(200, { "Content-Type": "text/html" })
        p2.write('<form action="fileuploading" method="post" enctype="multipart/form-data">');
        // as yaha form meh action ka mtlb hai ki jab user ess form k submit button pr click karega then yeh action wala text uss url-line meh fetch hojayega.
        p2.write('<input type="file" name="filetoupload"><br>');
        p2.write('<input type="submit">');
        p2.write('</form>');
        return p2.end()
    }
}).listen(7500) 
 */

// as now user ki file upload ho chuki and ek temporary folder meh aagyi hai , thus toh aab apn uss file ko save kr leteh hai.

// 🌟3. Saving the File:
// as file jab server pe succesfully upload ho jati hai then voh file ek temporary-folder meh aa jati hai, thus toh aab apn uss temporary-folder ko parmenant karenge mtlb save karenge. and ess temporary-folder ka path( or name) uss files-object meh stored hai jo apnne parse()-fn meh pass krvaya tha. thus toh apn uss file ka path change krdenge and rename bhi krdenge as like this.

let fs_modulefile = require("fs")

http_modulefile.createServer((p1, p2) => {

    if (p1.url == "/fileuploading") {

        let userform = new formidable_modulefile.IncomingForm()

        userform.parse(p1, (err, fields, files) => {
            let temporaryfilePath = files.filetoupload.path
      var newpath = 'C:/Users/ajay jangid/Music/My Recordings' + files.filetoupload.name;

            // let newpath = 'C:/Users/ajay jangid/Documents/' + files.filetoupload.name
            fs_modulefile.rename(temporaryfilePath, newpath, () => {
                p2.write("your file uploaded sucessfully and saved permanently")
                p2.end()
            })
        }
        )

    }



    else {
        p2.writeHead(200, { "Content-Type": "text/html" })
        p2.write('<form action="fileuploading" method="post" enctype="multipart/form-data">');
        p2.write('<input type="file" name="filetoupload"><br>');
        p2.write('<input type="submit">');
        p2.write('</form>');
        return p2.end()
    }
}).listen(7500)


/* var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/ajay jangid/Music/My Recordings' + files.filetoupload.name;
    //   as toh apnko C-drive address hi dena hai , otherwise apnko error show hoga.
    //   var newpath = 'H:/uploadfiles' + files.filetoupload.name;
      fs.rename(oldpath, newpath, function (p1) {
          if(p1) throw p1
        res.write('File uploaded and moved!');
        res.end();
      });
 });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="upload">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080); */










