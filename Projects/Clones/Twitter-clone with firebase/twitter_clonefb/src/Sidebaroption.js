import React from 'react'
import "./Sidebaroption.css"

function Sidebaroption({Optionicon , optioname , focusd}) {
    return <div className={`sidebaroption ${focusd && "focusd"}`}>
        {/* <div className="sibaroption__info"> */}

        <Optionicon/>
        <h3>{optioname}</h3>
        {/* </div> */}
        {/* <h1>I am sidebaroption_component</h1> */}

    </div>
}

export default Sidebaroption
