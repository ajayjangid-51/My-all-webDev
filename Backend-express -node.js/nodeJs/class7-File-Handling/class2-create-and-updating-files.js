// AS now YAHA pe apn file-Handling meh files ko create krna dekhenge:
// thus toh sbse phle apn fs(file-system)-module ko import krlenge:
let fs_modulefile = require("fs")
// as apn file ko create fs-module k 3-functions se diff-diff tarike se kr skteh hai:

// 🌟1. appendFile() (yeh function specified(mtlb inputed) file meh specified content append(mtlb add) kr dega and agr specified-file exists nhi krti hai toh yeh functions uss file ko create krke phir specified-content ko append karega.) and as agr apnko enn function ka format dekhna then voh toh apnko yeh Vs-code suggest krdega thus toh bas apnko uss suggestion ko samaj lena hai as:
// 🎆 🌟 mtlb voh IDE-function-suggestion ka format ess tarah hota hai.
// function_name( parameter_name : parameter_datatype |(or) Parameter_datatype , parameter2_name: parameter_datatype |(or) this_paramter_datatype , and soo , .. ) : function-return-value-datatype. 🎆 🌟

// as toh yaha ess appendFile()-fn k liyeh apnko yeh suggestion mil raha hai, thus mtlb apn esko samaj k ess function meh as accordingly argument pass kr skteh hai.
// appendFile(file: string | number | Buffer | URL, data: string | Uint8Array, options: WriteFileOptions, callback: NoParamCallback): void

// as toh ess appendFile()-fn meh first-parameter-ka-naam file hai and eska datatype string or number or buffer or url kuch bhi ho skta hai mtlb apn ess parameter yeh datatype ki value pass krva skteh hai mtlb tabhi yeh kaam karega otherwise nhi krpayega and apnko error milega. thus toh apnko ess function k according hi agruments pass krvane hai. and now ess funtion ka 2nd-paramter-ka-naam data hai jo jiska datatype-string ya unit8array thus toh mtlb apnko string ya unit8array input krna hai. , and ess function ka 3rd-parameter-ka-naam options hai and yaha esmeh type diya hai write-file-option toh mtlb apnko yaha file-option input dena hai. and 4th-paramter-ka-naam callback hai where-kisi-parameter ka naam callback hone ka mtlb hai ki vaha function input krna hai.
// and atlast ess function ki return-value void hai mtlb ess function ki koi return value nhi hai.

// 🎆🎆 toh thus mtlb apn kisi bhi koi bhi function meh kya-kya and kaise-kaise agruments pass krne hai voh apn simply IDE-function-suggestion se aaram se easily samaj skteh hai. 🎆🎆

fs_modulefile.appendFile("demofile1.css" , "heey appeded this file by using appednFile-fucntion", function( p1){
    if(p1) throw p1
    console.log("file saved")
})

// or this::
fs_modulefile.appendFile("demofile1.css" , " awesome bro awesome appeded this file by using appednFile-fucntion", ()=>{
    console.log("good")
})



// 🌟2.open() (yeh function specified file ko open kr dega , in the speciefied mode jo ki apn second-argument meh input krteh hai.   and agr specified(inputed) -file exists nhi krti hai voh file newly create hoke write-mode meh open hojayegi.)

fs_modulefile.open("demofile2" , "w", function(){
    console.log("good file saved or file created and saved")
})

// 🌟3.writeFile() (yeh function specified-file k content ko phle erase krke phir usmeh specified content write kr dega. and agr voh specified file -exists nhi krti hai then yeh function phle uss file-ko create karega and then inputed-content ko write karega.)
let datafor_file = " /*i am data for file*/"
fs_modulefile.writeFile("demofile1.css" , datafor_file , ()=>{
    console.log("okay bros file saved")
})

