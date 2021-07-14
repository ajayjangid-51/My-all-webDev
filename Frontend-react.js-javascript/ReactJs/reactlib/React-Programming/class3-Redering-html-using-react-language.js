/* <!-- AS now YAHA pe apn React-language meh ya se html ko webpage meh render krna dekhenge: -->
<!-- as simply boleh toh React-language ka main goal hi yahi hai ki html ko webpage meh render-karana hai as bcoz tabhi toh webApp ka front-end banta hai. -->

<!-- As toh React-language meh ReactDOM-module k render() ko use krke html ko webpage meh render kiya jata hai , thus mtlb yeh ReactDOM.render()-fn hi inputed html ko webpage pe render krta hai. -->
<!-- As yeh ReactDOM-module ka render()-fn 2-parameters leta hai: param1 is html-code and param2 is html-element-container , as mtlb yeh render()-fn inputed html-code ko inputed-html-element-container meh daal k browser-webpage meh render kr deta hai. -->
<!-- thus toh apn ess tarah ReactDOM.render()-fn ka use krke html ko render krteh hai. as like thi: --> */

import React from 'react';
import ReactDOM from 'react-dom';



/*

<!-- AS now YAHA pe apn React-language meh ya se html ko webpage meh render krna dekhenge: -->
<!-- as simply boleh toh React-language ka main goal hi yahi hai ki html ko webpage meh render-karana hai as bcoz tabhi toh webApp ka front-end banta hai. -->

<!-- As toh React-language meh ReactDOM-module k render() ko use krke html ko webpage meh render kiya jata hai , thus mtlb yeh ReactDOM.render()-fn hi inputed html ko webpage pe render krta hai. -->
<!-- As yeh ReactDOM-module ka render()-fn 2-parameters leta hai: param1 is html-code and param2 is html-element-container , as mtlb yeh render()-fn inputed html-code ko inputed-html-element-container meh daal k browser-webpage meh render kr deta hai. -->
<!-- thus toh apn ess tarah ReactDOM.render()-fn ka use krke html ko render krteh hai. as like thi: -->
*/

ReactDOM.render( <p>hey bro how is hacking!</p> , document.getElementById("rooti") )
// 📓notepoint: as yeh react-language ka yeh ReactDOM.render()-fn yeh html-elements index.html file se leta hai.

// or jaise:
ReactDOM.render( <h3>htmlcode11</h3>  , document.getElementById("demoi"))
// notice: as agr apn kisi ek hi element 2 ya multipe times koi-html-code input krteh hai then vaha voh html-code overwrite hojayega mtlb voh html-code serial uss element meh add nhi honge. mtlb latest inputed html-code hi usmeh rhega.

// 👿imp📓notepoint: as React-language meh apn html bhi likh skteh hai , as bcoz React-lanauge-compiler meh JSX (javaScript-Xml)-compiler bhi hai jo ki ess html-code ko javaScript-code convert kr deta hai. thus toh mtlb isilliy apn react-language meh html-lang  bhi likh skteh hai, bcoz react-lanauge-compiler meh JSX-compiler hai jo ki html-code ko javascript-code meh convert krke compile kr deta hai. thus mtlb react-lanauge-compiler ek combo-compiler with some more extra feature wala compiler hai.

// As apn ess tarah variable-container create krke usmeh html-code likh skteh and store kr skteh hai.
// note-point: as agr apnko variable-continer meh sirf single-element create and store krna hai then apn directly as koi value assign krteh hai vase hi kr skteh hai. as like this:
// let htmlcode1 = <p>hey bro how is it ?? good awesome bro </p> 
// ReactDOM.render( htmlcode1 , document.getElementById("demoi"))

// let htmlcode11 = <p>hey bro how is it ?? <h1> i am heading </h1> good awesome bro all wihtli thait was so awesome and will gonna to work </p> 
// ReactDOM.render( htmlcode11 , document.getElementById("demoi"))
// as esseh bhi apn kr skteh hai bcoz esseh apn kaam toh hojayega , but vaha error milegi ki ess aap mat kariyeh mtlb aap ()-parenthesis use kijiyeh

// but agr apnko multiple-elements-create krne hai then phir apnko bas simply voh cheez ()-parenthesis meh likhna hai. as like this:

let htmlcode3 = (
  // <p>hey bro how is it ?? <h1> i am heading </h1> good awesome bro all wihtli thait was so awesome and will gonna to work </p> 

  <div>
  <h1>i am heding2</h1>
  <p>kaisa hai bro
    {/* <h1>i heding1 in paragaraph</h1> */}
    {/* as now aab apn ess html-code meh bhi javascript likh skteh hai but voh javaScript apnko enn curly-braces meh likhna hota hai. as like this:: */}
  { console.log("i am writing thsi javascript-inside the html-code ")}

  {/* not like this 👇 */}
  console.log("i am writing this javascript-inside the html-code ")
  </p>

  </div>
// 📓note-point: as apnko hamesa sabhi elements ek top-level-elment rkhna hota hai, otherwise phir error milega, mtlb apnko simply ek element create krna hota hai and usmeh sare saab element create krne hoteh hai , as mtlb apn alag-alag element create nhi kr skteh hai. mtlb phle ek single-element create krke phir usmeh sabhi elements create krne hoteh hai.
// as agr apn ess tarah nhi krteh hai then apnko phir error milegi. 

// and JSX meh html-code k elements ko bhi pure tarike se sahi syntax meh likhna hai , as agr apn nhi likhteh hai then apnko error milega , as html meh toh apnko syntax-miss hone se error nhi milta but yaha JSX- se html-code wrong likhne se apnko error milta hai . toh mtlb apnko yeh baat ka dyan rkhna hai.
)

ReactDOM.render(htmlcode3 , document.getElementById("demoi"))

// 🎱Rootnode: as Rootnode render()-fn k respect meh bola jata hai, mtlb Rootnode simply uss element ko bolteh hai jismeh apnko html-code ko daalteh hai. thus koi inputed element for rendering html-code ko uss render()-fn k respect meh rootnode bola jata hai.




