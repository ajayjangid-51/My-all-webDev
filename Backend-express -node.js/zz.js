const http = require('http');

const hostname = '172.20.10.10';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    // toh esse:
    //     /
    //     /favicon.ico
    // esska mtlb hai ki url search-bar meh kuch bhi search nhi hoke simply refersh liya gaya hai, and;
    //    /host
    //    /favicon.ico
    // esska mtlb hai ki search-bar meh /home search hone k saat refresh huaa hai 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// user k duvra kiya webpage pe kiya gaya koi bhi kaam:
// w.r.t FRONTEND it is a "event"
// and w.r.t BACKEND it is a "request"









 // res.end(abpage)
    // yaha pe '/' means sirf hostname. and aage koi request.url nhi 
    if (url == '/'){
      res.end(hmpage)
      console.log('okay ji')
    }
    else if (url == '/about') {
      res.end(abpage)
    }
    else if (url == '/contact') {
      res.end(cnpage)
    }
    else if (url == '/info') {
      res.end(inpage)
    }
    else {
    res.statusCode = 404;
      res.end('404 not found hello ji')
    }

// TIP: TOH sbhi tarah ki client requests ko apan ess tarah serve kr skteh hai..... 


