let mongoose_modulefile  = require("mongoose")

let ourwhatsappschema = new mongoose_modulefile.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

exports.ag = mongoose_modulefile.model("messageContent" , ourwhatsappschema)
// module.exports.ag = mongoose_modulefile.model("messageContent" , ourwhatsappschema)

exports.gd = ()=> "awesome bro"