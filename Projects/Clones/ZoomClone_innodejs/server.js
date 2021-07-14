let express_modulefile = require("express")
const { Server } = require("http")
let expressapp = express_modulefile()
// let uuid_module = require("uuid")
let {v4: uuidvi4} = require("uuid")
// this means ki v4 as uuidv4
// let {v4: uuidv4} = "good"
let v4 ="good"
// console.log(v4);
let our_server = require("http").Server(expressapp)
// or apn esseh bhi kr skteh hai but apn directly and shortly hi krenge.
// let http_module = require("http")
// let server = http_module.Server(expressapp)

let socket_io_modulefile = require("socket.io")(our_server)

expressapp.set('view engine', 'ejs')
expressapp.use(express_modulefile.static("public"))


expressapp.get("/" , (p1req , p2res)=>{
    // p2res.status(200).send(v4)
    // p2res.status(200).send(v4)
    // p2res.render("room")
    // as apn redirect-fn se user ko koi Other-page pe redirect bhi kr skteh hai.
    p2res.redirect(`/${uuidvi4()}`)
    // as yeh uuidvi4()-fn simply random koi id generate krta hai.
    // p2res.redirect(`/aweomebro`)

    // as apn render-fn se simply .ejs-files ko as frontend meh render kr skteh hai and krteh hi hai.
})

// as yaha "/:room" meh /:xyz mtlb :(colon) lagane ka mtlb eske aage kuch bhi-url .
expressapp.get("/:room", (req , res)=>{
    // res.render("room")
    res.render("room", {roomId : req.params.room})
    // as apn render()-fn meh room k saat ek object bhi bhej rhe hai jismeh ek key hai roomId
    // thus toh mtlb aab apn ess roomId-key ko apni ess room.ejs-file meh use kr skteh hai. as like this: 
})

socket_io_modulefile.on('connection', socketi =>{
    socketi.on('join-room' , (roomId)=>{
        socketi.join(roomId)
        // console.log("you joined the room just now");
        socketi.to(roomId).broadcast.emit("yeh alright user-connected")
    })
})

our_server.listen(4020)