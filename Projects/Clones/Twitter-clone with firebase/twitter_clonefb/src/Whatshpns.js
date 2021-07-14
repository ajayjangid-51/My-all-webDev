import React from "react"
import "./Whatshpns.css"
import { Avatar } from "@material-ui/core"

function Whatshpns({topic, status, titleds, avisrc}) {
    return <div className="whatshpns">
        <div className="whatshpns__info">
            {topic} . {status}
            <h4>{titleds}</h4>
        </div>
        <div className="whatshpns__img">
            <Avatar className="whatshpns__imgAvi" src={avisrc} />
        </div>
    </div>
}

export default Whatshpns
