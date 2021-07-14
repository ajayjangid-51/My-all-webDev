// yeh npm-mainfile.js is a mainfile hai jismeh actual code likha huaa hai and ess actual code ko smothly run krne k liyeh esska package chahiyeh hota hai tabhi yeh phir run hoga bcoz packages ess file ki dependencies, and enn dependencies ki dependencies so on ... hoti hai.
// YAHA pe apan "PACKAGES" and "npm-(NODE PACKAGE MANAGER)" k bareh meh dekhenge:
// toh sabse phle apan PACKAGES k bareh meh dekhenge:
// PACKAGE define hota hai software k liyeh 
// package mtlb ek folder jo ki software(mtlb software ki file) ko contain krta ho and eske saat-saat software ki package.json file, its dependency-package content, its history.md file , its license file, its readme.md file etc ko contain krta ho.
// thus isiley har software ka package banana ya hona jaruri hota hai booz uss meh software k related sari baateh hoti hai.
// and toh agar apnko apne software ka package banana hai then voh simply apan software-language package manager k bana ya banva lete hai: aslike ki jaise software-language javascript hai toh vaha pe npm is a package manager and agr software-language python hai then vaha pe "pip" is a package manager and yeh package manager simply apne software k package banane meh help krte hai.
// and so yaha package ko manage krna mtlb: yeh software k package k liyeh jo bhi file needed hoti hai usse create krna and designing-software meh kaam aane wale packages ko handel krna jaise: install krna,uninstall krna,unki versioning dekhna, etc etc..

// and phir simply software-package ko install ya pc meh store krne pr yeh sara package-content load ho jata hai
 
// now apan NPM k bareh meh dekhenge:
// simply bolteh toh "npm" ek program hai jo node.js k packages ko manage krta hai, mtlb simpy npm node.js ka package manager hai mtlb jo bhi apan node.js compiler meh software-package additionally install krteh hai ya banateh hai yeh unko manage krta hai  (manage krne ka mtlb jaise jab bhi apan koi bda project krteh hai then vaha pe apan bahot sare kafi kuch modules ya packages ka use krteh hai ya uss project meh important modules and packages ki requirement hoti hai then project meh enn-sab requirement ko full-fill krne ki liyeh apan simply "npm" install kr lete hai thus "npm" simply apanko jo bhi modules-package chahiyeh voh sab apnko npm asani k provide kra deta and or toh or "npm" apne enn sabhi jo bhi installed module-packages hai unko acche se manage bhi krke rkhta hai. inshort kha jayeh toh "npm" apnko apne projects ko acchi tarah design and manage krne meh kafi help krta hai  )

// NOTE: npm node.js k saat ya node.js meh hi pre-installed aata hai;
// and agar apnko npm ka use krna hai mtlb npm se uska kaam krvana hai then simply we write in teminal:
        //  npm <command> <pkg-name>
// where command can be install,access,i, update and many more jo apan simply terminal meh npm type krke dekh skteh hai..
// tip:
// 1. and kisi particular command k bareh janna ho then we write---  npm <command> -h
// 2. npm se apan apna khuda package bana skteh hai and esmeh jo bhi apan ne project k doran koi dusre-packages install kiyeh hai unhe apan ess package meh as a project's-dependency save kr skteh hai and phir essi package ko apan apne dusre projects meh bhi import ya install kr skteh hai.
// and yeh package apan ess tarah npm se create krvateh hai:
//               npm init  (jo ki ek package.json file banata hai and phir jldi se npm ki madad se apan ek package-ya-module bana leta hai and phir essi meh hi apne sareh installed moudles and packages save ho jateh hai, and .json file ka mtlb hai ki yeh package ya module, ya object ko stringify() krke store krti hai but parse() krke show krti hai takki data low-weight rhe)
// note: packages, modules yeh sab ek OBJECT hi hoteh hai but simpy enki size badi hoti hai.

// simply boleh npm se jaise jab bhi apan koi project bana rhe hoteh hai ya kisi project pe kaam kr rhe hoteh hai then vaha uss project meh jo bhi cheze ya jin-jin packages and modules ka apan ne ess project meh use kiya hai unn sabko milakr "npm init" ek package bana deta hai (mtlb ek software bana deta hai) and and phir agar essi project pe koi or kaam krna chahta hai ya kamm kr rha ho voh usse apan yeh apna-"package" suggest kr dete hai toh simply voh esse install kr lega toh usska essi se hi sara project ho jayega mtlb usse kisi orr package ki jarurat nhi padegi, toh npm apnko asse simply apna self-package banane meh mdat krta hai and npm or bhi bohat sareh kaam krta hai jayeh 

// mtlb now aab npm init krne se jo bhi apni project dependency hai voh sari package.json file meh as a dependecy store hoti rhegi

// and node_modules-folder meh apne installed packages ka content store hota hai, yaha content mtlb package meh files ,modules, objects and or other dependency-packages of package.

console.log("This is npm tutorial")

// now aab apan samjenge ki overall npm ka kaam kya hota hai:
// 1.jaise sabse phle apan ne ek module banaya(mtlb .js file meh kisi program k liyeh liyeh functions likhe ya banayeh) jis meh phle apan ne kisi orr module ko import kiya and then apne written-function ko enn module's-functions k saat combine krke ek ya doo naye functions banayeh and now jaise ki apn chahteh ki yeh as a module ho then apan eske-functions ko .exports krdenge and thus apni yeh file as a module bn gyi hai, and now aab apnko es file ka package banana hai( mtlb es file meh jo bhi cheeze use huee hai and jo bhi ess file meh written hai unn sab cheezo ko ek krna),
// thus 1.eski package.json file (jismeh package information and dependencies written hoti hai) 
//      2.license file (license file mtlb ess file meh esse koi viruses, malware-code-functions nhi hai jo pc ko damage kr skti ho)
//      3.actual file (actual file means jo apan ne banayeh hai and ess file-ka-content pura milkar software khleta hai)
//      4.history.md (esmeh software or software-file ki history mention hoti hai ki mtlb kab konsa version aaya tha, etc..etc..)
// 5.readme.txt ( essmeh kuch software ka reading content hota hai )


// tip: apn module ko ase bhi define kr skteh hai ki voh file jo kisi or file meh import ki ja skti ho and phir uske functions ka use kiya ja ske

// SOFTWARE-versioning:
// suppose ki ios version is this 2.3.2  or (major-change-2.minor-change-3.patch or bug fixes-2)
// yaha  major-change-2. means ki ios-software meh 2nd-time kuch functions,features,and design hatayeh gayeh hai and unki jagah kuch new add kiye gaye hai  
// yaha minor-change-3 ka mtlb ess software meh 3rd-time kuch more functions and features add kiye gayeh hai.
// yaha patch or bug-fix 2 ka mtlb hai ki ios-software meh 2nd-time koi bugs-fix kiya gaya hai,

// dev-dependencies:  (development-during-dependencies)
// voh dependency jo sirf development krteh time hi chayeh hoti hai jiska production meh koi use nhi hota hai mtlb jb apan ess software ko server pe deploy krenge ya chalayege then vaha pe enn code or functions ka koi kaam nhi hota.
//     npm install nodemon --save-dev   (yaha nodemon is a program-package jo ki server ko automatically restart kr deta hai toh mtlb apnko ess program ka use sirf develoment krte time hi hota hai mtlb production meh eska koi kaam nhi hai )
// tip: now agr apan dekhe toh nodemon kafi accha kaam krta hai toh esse apan har project meh use krna chahenge toh then eske liyeh apan ess nodemon ko --global install krlenge thus apan esko apne computer ki kisi bhi .js meh use kr skteh hai.
