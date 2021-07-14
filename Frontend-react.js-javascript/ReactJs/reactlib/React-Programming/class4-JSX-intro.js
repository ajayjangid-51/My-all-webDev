import React from 'react';
import ReactDOM from 'react-dom';


// <!-- AS now YAHA pe apn pe apn JSX(javaScript-Xml) k bareh meh dekhenge: -->
// <!-- JSX ki help se hi apn React-language meh html-language likh skteh hai bcoz yeh JSX uss html-code ko JavaScript-code meh convert kr deta hai. or apn esseh bhi bol skteh hai ki JSX ek module, machine-level-functions ka combo hai jo ki html-code ko javaScript-code meh convert kr deteh hai and thus baad meh JavaScript-compiler uss javascript-code ko compile krdeta mtlb machine-level-instruction meh convert kr deta hai. thus phir apna kaam ho jata hai. -->

// <!-- thus mtlb apn yeh  -->
// <!-- AS toh agr JSX nhi hota toh apnko directly voh JavaScript-code hi likhna hota mtlb javascript-code jaise createElement() ya appendChild()-functions likh k voh html-elements create krne hoteh as like this: -->

// let variablecontainer1 = React.createElement( 'h1' , 'here we do not use JSX facility') this is ❌(wrong)
let variablecontainer1 = React.createElement( 'h1' ,{} , 'here we do not use JSX facility')
ReactDOM.render(variablecontainer1 , document.getElementById("rooti"))

// <!-- thus mtlb JSX ka use krna jaruri nhi hai but , esseh apna kaam aasaan and fast ho jata hai. -->
// <!-- as but JSX hai toh mtlb apn directly voh html-code likh skteh hai bcoz yeh JSX k functions uss html-code ko ess javaScript-code meh convert kr denge.-->
// <!-- thus JSX hai toh apn directly-html-code likh skteh hai as like this: -->
let container2 = <h1>awesome bro here we using the JSX facility</h1>
ReactDOM.render(container2 , document.getElementById("demoi"))


// as React meh class and functions ko simply component bola jata hai, and react meh enn class k functions and functions ko use kr apn apne render()-fn meh as a input use kr skteh hai, 

// javascript-code-expressions in JSX
// as jaise ki apnne upar baat hai ki apn JSX ki madad se react-language meh html-code likh skteh and apn JSX ki madad se html-code JavaScript-lang likh skteh hai but yeh javascript-expressions ko apnko curly-braces meh likhna hota hai. as like this:

let var1 = 3
let var2 = 5
function fn1(){
  return var2
}
let container4 = <h1> hello bro i have { fn1() } days to work on reactJs</h1>
// as javascript-functions , variables etc apni value return kr dete hai yaha ess curly-braces meh. mtlb JSX ess curly-braces{} k andar javascript-code ko run/execute krke uski value return dega ess html-text meh.
ReactDOM.render(container4 , document.getElementById("demoi"))


/**<!-- AS now YAHA pe apn JSX mtlb JavaScript-Xml k bareh meh dekhenge:  -->
<!-- as JSX ki se apn React-command-line mtlb react-app meh html likh skteh hai, mtlb JSX ki madad se apn html-code likh skteh hai , as mtlb JSX apne html-code ko Javascript meh convert kr deta hai. -->
<!-- and JSX ki vajaj mtlb JSx ki madad se apn html-code meh javascript-code likh skteh hai bas apnko simply uss javascript-code ko curly-braces meh likhna hota hai. --> */

