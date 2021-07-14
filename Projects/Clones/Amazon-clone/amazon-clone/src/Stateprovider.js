// YAHA pe data-layer setup krenge:
// yeh apni basket ko user-dedicated krne k liyeh hai

import React , { createContext , useContext , useReducer } from "react"
// thus toh yaha pe apn ek function ya consturctor import kiya hai and yeh 3- Arrays-bhi import kiye hai simply from the react.

// yeh export-keyword apnne esliy lagaya hai takkki apn enn variables ko baki sari jagah bhi import krke use kr skee.
export const Staticontext = createContext();
// as mtlb ess createContext()-fn ki return value meh koi function hai. toh mtlb jb bhi apn ess Staticcontext variable ko call krenge then vaha pe apn input bhi denge to pass in the parameter and phir apn esmeh stored value or function ko kisi orr cheez se replace bhi kr skteh hai. as like apn ess container meh phir p3_children store krva diya.
// as now yaha pe apnne createContext()-fn ko ess Staticontext-Constant-container meh store kr liya hai mtlb aab ess function ki return ess constant-container meh store ho jayegi.

// now apn Provider banayenge jisse hoga kya ki, aab yeh cheez uss user ko provide krega yeh sara app by taking all the information of user and yeh esss info ko ess app meh fetch krke user ko provide krega.

export const Staticprovider = ( { reducer,initialstate , children}  ) => (
<Staticontext.Provider  value={useReducer(reducer,initialstate)}>{children}</Staticontext.Provider>
);
// as apnne p3_children ko {} meh likha hai bcoz yeh ek array-element hai ess liyeh

// thus toh yeh useReducer function apnko inputed reducer ki state return krega without any action. and usse dispatch krke bhi return krega bina kisi extra action ke.



// now mtlb yeh staticprovider-fn() uparwale Staticontext k Provider function ko call kr rha hai and usmeh 
// now mtlb yeh staticprovider-fn() uparwale Staticontext k Provider function ko call kr rha hai, and thus call krne k saat-saat yeh usmeh input bhi de rha hai. and yaha pe apnne Provider function ko call krke usmhe as a input meh useReducer function ko call krke and usko inputs deke ess useReducer ki return-value apnne yaha ess Provider()-fn meh input di hai. and as bcoz yeh Provider()-fn input meh koi array leta hai isliy apnne eske input {} meh daal hai.
// and yeh sara kaam krke yeh provider function apne andar wali cheez ko chrome pe live render kr dega.

// and apn ek point note krenge ki react-function-calling k baad usmeh opening and closing tag k bich meh jo cheez daali jati hai voh simply chrome pe render ho jati hai.

// mtlb yeh apna Provider()-fn useReducer ki return value as a input lega and usse ess p3_children meh daal dega and phir esse simply chrome pe render kr dega

// as apn ess Staticontext meh apn p3_children daal rhe hai mtlb apn uss createContext()-fn ki return value ki jagah yeh daal rhe hai. as now aab  uss createContext()-fn ki return value koi function bhi ho skti hai.
// toh mtlb yeh in the return ess Staticcontext ko call kr rha hai and usmeh parameters bhi pass krva rha hai. bcoz ess variable meh ek function hi stored hai thus toh apnko esko as a ek funtion ki tarah hi treat krna hoga. meh yeh p3_children daal dega.


// {/* <Staticontext > {p3_children} </Staticontext> */}


// this is arrow-function and arrow-fn() ess tarah banaya jata hai:
// function-name = (function-parameters) => (funtion-return-value)
// as yeh arrow-function as like ek variable meh function define krnek ki tarah hi hota hai, and thus jb yeh arrow-fn() ki jagah pe call kiya jata hai toh voh ess tarah call kiya jata hai: 
//              <arrow-fn()-name p1={""} p2="" p3="" ... > now thus toh yeh apna kaam kr dega </arrow-fn()-name>
// yeh as like as container ki tarah behave krta hai bcoz yeh banaya ya define hi ess tarah kiya gaya hai.

// thus toh simplly apn ese bol skteh hai ki yaha upar apnne ek container banaya jismeh apnne ek arrow-function define kiya ya banaya hai. thus toh ess arrow-fn ko uss tarike se call krteh hai.

// as apn kisi container meh phle function define bhi kr skteh hai , and thus last meh uss function ki return value hi usmeh store hogi. thus toh esmeh yeh Staticontext variable store hai jismeh yeh {p3_children} store hai.

// note-point: react meh koi bhi function jb call kiya jata hai toh voh ess tarah call kiya jata hai: like 
//                          <function-name/>

// note-point-2: reach meh koi bhi Variable jb use kiya jata hai tb voh variable esst tarah use hota hai like:
//                  <varialbe-name >   </variable-name>
// mtlb voh variable ek html-element ki tarah hi hota hai.

export const useStateValue = ()=> useContext(Staticontext);
// now yeh useStateValue ek function hai jo ki useContext meh Staticontext as a input de rha hai. and ess Staticontext meh createContext ki return value store hai thus toh mtlb ess useContext meh yeh return-value-of-CreateContext ja rhi hai.

// now yeh useStateValue()-fn apne work-box meh useContext()-fn ko call krta hai and usmeh as a input Staticcontext ko daalta hai. thus toh mtlb jb bhi apn ess useStateValue()-fn ko call krenge then tb yeh apna kaam kr dega mtlb yeh useContext-fn ko call krke usmeh Staticcontext ko as a input dedega.

// where yeh Context()-fn stateful value return krta hai. mtlb jaise esmeh basket gaya toh yeh basket variable ki statefule value return kr dega mtlb jaise basket meh 2-elements hai then yeh voh 2 elements return kr dega.

// as toh aab voh provider meh inputs hai voh simply provider return kr deta hai and phir yahi return value yaha ess useContect()-fn meh jayegi and phir voh simply jo actual-stored values hai voh return kr dega.

// thus simply boleh toh yeh useContext-fn context(mtlb global) object input meh leta and hai and uske andar ki value return krta hai. as jaise apn ne Staticontext-container daala hai mtlb eska stored data provider jo ek object hai voh eske andar jayega mtlb ess object k andar jo bhi function hoga voh kuch value return kr rha hoga thus toh yeh useContext function jo bhi value as return aane wali hai unn values ko yeh return krta hai.