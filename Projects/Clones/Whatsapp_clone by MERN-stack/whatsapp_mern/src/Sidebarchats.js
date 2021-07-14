import React from "react"
import "./Sidebarchats.css"
import {Avatar} from "@material-ui/core"
class Sidebarchats extends React.Component{
    render(){
        return <div className="sidebarchats">
            {/* <h3>I am Sidebarchat</h3> */}
            <Avatar src="https://cdn.cdnparenting.com/articles/2020/01/25153910/381833377.jpg"/>
            <div className="sidebarchats__info">
                <h2>Room Name </h2>
                <p>Last message..</p>
            </div>
        </div>
            
        
    }
}

export default Sidebarchats

