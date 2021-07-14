// simply type rfce for this snippet. and yeh ess file ko apn as component use krenge:
import React from 'react';
import './Sidebar.css';
// import PersonIcon from '@material-ui/icons/Person';
// import Avatar from '@material-ui/icons/Person';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <AccountCircleRoundedIcon />
                {/* yeh yaha pe ess tarah apn Icons ko apne Webpage meh use krteh hai as like: 
             <Icon-name /> mtlb jisko ko apnne upar import kiya hai . and yeh kaam apn yaha ess https://material-ui.com/components/material-icons/  site pe jake copy paste yaha krteh hai.*/}
                <div className="sidebar__headerright">
                    <IconButton>
                        < DonutLargeIcon />                        
                    </IconButton>
                    <IconButton>
                            <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchcontainer">

                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search or start a new Chat" />
                </div>
            </div>
            <div className="sidebar__chats">

            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>
        </div>

    )
}

export default Sidebar
