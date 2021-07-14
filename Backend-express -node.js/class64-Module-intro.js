// YAHA pe node.js k built-in MODULES k bareh meh dekhenge:
// simply bolteh toh MODULES are the "sub-program", or it may be a 'OBJECT' which contains mutliple things such as functions,variables etc etc.., or it may be a "single-FUNCTION" etc... jo ki pre-created by the third-party or then can be pre-Builted in the compiler or they can built by itself "CODER" only.
// and yeh MODULES are commonly used in the PROGRAMS by the programmer to save the time,and many etc..

// NOTE: toh jaise ki apan janteh hai ki node.js meh kaphi sareh built-in MODULES hai toh enn meh se hi apan kuch modules ka use krenge:
// some built-in MODULES:
  //  1.fs-module (file system -module ess module ka jdatr use kisi file ko create,read,update ya overwrite,delete krna etc.. kaam k liyeh hota hai) and yeh sareh kaam apan ess module k different-different functions ko simply call krke kr skteh hai.

  // NOTE-point: toh kabhi bhi kisi MODULE k functions ko use krna hai ya kisi pe apply krna hai then simply sbse phle apan uss MODULE k import krenge and then phir hi apan uske function ka use kr payenge, now toh simply apnko agar kisi MODULE ko import krna hai then we simply type:
  //                       const module-name=require('module-name')
  // NOTE-point: jis bhi module ko apan import kr rhe hai uss module ko uss module k naam se hi ek variable meh store krvana hota hai.
  // and now aab agar apnko imported-MODULE k function ko call krna ho then we simply type:
  //                  module-name.module's-function-name('input of the function')    (yaha fs.read-function() ka mtlb hai ki fs module meh read function ko call kro mtlb jo apna read()-function hai voh kisi Module-object meh hai toh simply agar koi function kisi module-object ya single-object meh then usse call ess tarah hi kiya jata hai)
      

let fs=require('fs')
// console.log(fs)
console.log("now how kaise hello ji")
let text = fs.readFileSync('zzz.txt','utf-8')
// upar wali line ka mtlb ki apan ess kaam ko text variable meh save ya store krva rhe hai. and ess kaam ka output ek string bcoz readfilesync-function file read krta toh esne kya read kiya voh simply in a form of string store hojayega toh aab mtlb apan ess "text" meh string functions apply krke ess string ko update bhi kr gskteh hai;
text= text.replace("okay ji" , "harry-bhai")
console.log(text)

let newfile= fs.writeFileSync("zrohan.txt", text)
// toh yeh writeFileSync-function new file create kr deta hai and second-argument ko as a input text daal deta hai;
console.log("new file is creating")

