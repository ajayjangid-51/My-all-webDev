// as YAHA pe apn apni khud ki vedio dekhna setup krenge:
// 
const io = "/"
// creating-html-element by JavaScript: as like this:
const myVediohtmlelement = document.createElement("video")
myVediohtmlelement.muted = true

let myVedioStream
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stremi =>{
    myVedioStream = stremi
    // as ess then()-fn meh apnko ek function-input meh dena hota hai. as bcoz q ki jab yeh then()-fn run hota hai. tab ek kaam hota hai and uss kaam ko yeh then()-fn ess inputed-fn meh as a paramater pass kr deta hai , thus toh mtlb aab jaise apnne yeh inputed-fn define kiya hai, same vase uss then()-fn k kaam ko input leke apna inputed-fn kaam kr dega  , as toh mtlb apne pass ek power hai ki apn ess then()-fn k kaam ka kuch bhi kr skteh hai apne inputed-fn ko define krke , toh mtlb yeh ek orr mastam baat hai.
    // and inactual yeh then()-fn apne camera ki vedio leta hai, thus toh phir mtlb yeh then()-fn apni yeh vedio apni inputed-function meh as a parameter pass kr deta hai and phir apn ess vedio ko apne according jis tarah use , access , handle krna chahehteh hai voh kr skteh hai.


    // and apn apne video-element meh apni yeh then()-fn wali vedio set krdenge as like this:
    addVideoStream(myVediohtmlelement , myVedioStream)
})
// as yeh then()-fn kuch ess tarah ka hai.
// function (pp1 , pp2){
//     console.log(pp1);

//     function theninsidefn( pp1 , pp2){
//         console.log(pp2);

//     }
// }
// 
// as ess getUserMedia()-fn ki return value ek promise hai mtlb ek event hai, jisseh apn accept aur reject kr skteh hai.
// as promise mtlb ek event jo ki future meh hoga jisseh apn accept bhi kr skteh hai ya reject bhi kr skteh hai.
// as toh agr kisi function ko return-value koi promise hoti hai then toh phir uss promise- k liyeh dedicated-object banta hai jismeh then()-fn hota hai and ess function se apn uss accepted-promise ko handle kr skteh hai as , yeh then()-fn jab promise accept hoti hai tabhi run hota hai mtlb tabhi actally voh promise-dedicated-object banta hai. and catch()-fn hota hai.

socket.emit('join-room' , ROOM_ID)
socket.on('user-connected', ()=>{
    connectingNewUser()
})
function connectingNewUser(){
    console.log("new user is here");
}

function addVideoStream(p1_vedio , p2_stream){
    p1_vedio.srcObject = p2_stream
    // as apnne p1_vedio meh apni strem-vedio pass krva di hai.
    p1_vedio.addEventListener('loadedmetadata' , ()=>{
        p1_vedio.play()
    })
    document.getElementById("vedio-grid").append(p1_vedio)

}
// as apn variable meh function define krteh hai toh mtlb voh function apne app execute bhi ho jata hai.

// addVideoStream( , myVedioStream)