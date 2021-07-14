import React from 'react'
import "./Sidebar.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar, Button } from "@material-ui/core"
import Sidebaroption from './Sidebaroption';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function Sidebar() {
    return <div className="sidebar">
        <div className="sidebar__options">
            <TwitterIcon className="sidebar_twittericon" />

            <Sidebaroption focusd Optionicon={HomeIcon} optioname="Home" />
            <Sidebaroption Optionicon={ExploreIcon} optioname="Explore" />
            <Sidebaroption Optionicon={NotificationsNoneSharpIcon} optioname="Notifications" />
            <Sidebaroption Optionicon={MailOutlineOutlinedIcon} optioname="Messages" />
            <Sidebaroption Optionicon={BookmarkBorderOutlinedIcon} optioname="Bookmarks" />
            <Sidebaroption Optionicon={FeaturedPlayListOutlinedIcon} optioname="Lists" />
            <Sidebaroption Optionicon={PersonOutlineOutlinedIcon} optioname="Profile" />
            <Sidebaroption Optionicon={MoreHorizOutlinedIcon} optioname="More" />
            {/* <button className="sidebar__button" >Tweet</button> */}
            {/* or we can use material-UI 's button */}
            <Button variant="outlined" className="sidebar__button" >
                Tweet
            </Button>
            {/* always use material-UI button as a main button. */}
        </div>
        <div className="sidebar__userac">
           
            <Avatar src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo" />
            <span>
                <p> user name </p>
                <p>user twitter id</p>
            </span>
            <p>⬇️ </p>
            
        </div>
    </div>

}

export default Sidebar
