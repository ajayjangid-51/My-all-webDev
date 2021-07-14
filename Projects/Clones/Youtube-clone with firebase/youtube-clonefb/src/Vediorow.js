import React from "react"
import "./Vediorow.css"
// import { Avatar } from "@material-ui/core"

import { Avatar } from "@material-ui/core"

function Vediorow({ image, avimage, title, channelname, views, timestrap, description }) {
    return <div className="vediorow">
        <div className="vediorow__img">
            <img src={image} alt="" />
        </div>
        <div className="vediorow__info">
            <h3>{title}</h3>
            <p className="spni" > {views} views . streamed {timestrap} ago</p>
            <p > <Avatar className="vedio_avitr" src={avimage} />  <span> {channelname}  </span> </p>
            <p>{description}</p>
        </div>

    </div>
}

export default Vediorow