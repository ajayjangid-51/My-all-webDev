import React from 'react'
import "./Channelrow.css"
import { Avatar } from "@material-ui/core"
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Channelrow({ avimage, channelname, verified, subscriber, noofvedios, description }) {
    return (
        <div className="channelrow">
            <div className="vediorow_avatar">
            <Avatar  className="avit" src={avimage} />
            </div>
            <div className="channelrow__info">
                <h3>{channelname}   {verified && <VerifiedUserIcon/>} </h3>           
                <p> <span className="subsi">{subscriber} </span> subscribers ⚫ {noofvedios} videos</p>
                <p>{description} </p>
            </div>
            {/* as apn ES6 meh ess tarah if-conditional-statement laga skteh hai. */}
            {/* {verified && console.log("yeh it is verified")} */}
            {/* if verified then(&&) dothis() */}
            <div className="vediorow_right">
                <button> Subscribed</button>
                <NotificationsActiveIcon/>
                
            </div>
            <hr/>
        </div>
        
    )
}

export default Channelrow
