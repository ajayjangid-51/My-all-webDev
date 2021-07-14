import React from "react"
import "./Vediocmnt.css"
import { Avatar } from "@material-ui/core"
class Vediocmnt extends React.Component {
    // constructo
    render() {
        return <div className="vediocmnt">
            {/* <h1>hey i am Vediocmnt</h1> */}
            <div className="vediocmnt__vedio">
                <img src={this.props.image} alt="4300" />

            </div>
            <div className="vediocmnt__info">
                {/* <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/> */}
                <Avatar className="avi" src={this.props.urli} />
                <span className="vediocmnt__info_names"> 
                    <h4>{this.props.heading}</h4>
                    <p> {this.props.channelname}</p>
                    <p>{this.props.views} views <span> ⚫{this.props.timestamp} ago </span></p>
                </span>
            </div>

        </div>
    }
}

export default Vediocmnt