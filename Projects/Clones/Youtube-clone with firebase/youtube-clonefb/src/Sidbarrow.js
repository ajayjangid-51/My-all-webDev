import React from "react"
import "./Sidebarrow.css"


// function Sidebarrow(title){  // as bcoz apnko react-comoponent meh array as a input lena hota hai. ass esseh toh apnko error milta hai..
function Sidebarrow({ selected , title, P2 }) {
    // as apnko parameter-which-is-a-component ko first-letter upper-case hi krna hota hai.

    return <div className="sidebarrow">
        {/* <div className ={`sidebar__home cc ${selected}` } > */}
        <div className ={`sidebar__home cc ${selected && "selected"}` } >
    {/* {P2} not this , in-actual-this 👇 */}
            <P2 />
            <p>{title}</p>
            {/* <p>{p2}</p> */}


        </div>
    </div>
}

export default Sidebarrow

// // note-point: as Class-component meh toh by-default hi inputs- lena set hota hai, thus toh apn class agr inputs define nhi krteh hai tabhi chalta hai. toh mtlb esseh confuse nhi hona ki apnne toh apne class-constructor meh toh koi parameter set hi nhi kiya and apn ess component ko call krne pr voh inputs bhi de rhe hai. as voh paramters phle se by-default set hoteh hai as jab apn super()-fn ko call krteh hai tab. as bcoz super()-fn parent-class k constructor-fn ko hi point krta hai as deto like this: 
    //  super() = constructor( p1 , p2 , p3 ) 
    // toh mtlb super()-fn meh voh parameters-inputed hai.