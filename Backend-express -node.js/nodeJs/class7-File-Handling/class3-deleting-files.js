// now YAHA pe apn fs-module k functions se file ko update krna dekhenge:
// as apn unlink()-fn ka use krke file ko delete kr skteh hai as like this:
let fs_modulefile = require("fs")
fs_modulefile.unlink("demofile2" , ()=> console.log("demofile2 is deleted successfully"))
// as apnko hamesa function-suggestion-dekh lena hai takki apn easily function k inputs ko samaj sake. thus toh bas apnko function ka naam and kaam malum hona chahiyeh . and baki sari baateh apn easily krlenge as bcoz apn function k kaam ko dekh kr unn suggestion ko easiliy samaj skteh hai.

// notice-point: as yeh inputed-file exists nhi krti hai then apnko error-nhi milega. as program simply execute hojayega.


// 🌟2.Reanaming the file-name:
// as file ko rename krne k liyeh apn simply fs-module k rename()-fn ko use krteh hai.
fs_modulefile.rename("demofile1.css", "renamedemofile1.py" , ()=> console.log("renaming done"))

// as ess rename()-fn ka suggestion yeh hai : rename(oldPath: PathLike, newPath: PathLike, callback: NoParamCallback): void  , thus mtlb apn esko dekh k samaj skteh hai ki oldPath mtlb phle file ka phle-wala naam and kafi kuch orr jaise newPath mtlb new-filename and callback mtlb function.
// callback-function mtlb koi function meh function mtlb agr voh parent-fn run huaa hoga then mtlb eske andar wala function bhi run huaa hoga. thus toh agr apnko andar-wale function ki koi value milti hai then apn samaj jateh hai haan apna main-fn bina kisi problem k chal gaya hai.


// 🌟 🎆 Uploading-files:
// as apn node.js ek module-k functions ko use krke client se apne computer pe file bhi upload kara skteh hai. where yeh cheez class11-Upload-Files meh dekhenge:  
// as yeh bohat mast cheez hai. toh mtlb apn esko maje se dekhenge.
