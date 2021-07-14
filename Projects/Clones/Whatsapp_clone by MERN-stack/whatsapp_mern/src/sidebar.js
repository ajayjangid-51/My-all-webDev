import React from "react"
import ReactDOM from "react-dom"
import "./sidebar.css"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ChatIcon from '@material-ui/icons/Chat';
import { Avatar , IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Sidebarchats from "./Sidebarchats"

class Sidebar extends React.Component{
    render(){
        return <div className="sidebar">
            {/* <h1>Hey I am Sidebar</h1> */}
            <div className="sidebar__header">
                {/* <div className="sidebar__header_left">

                </div> */}
               
                {/* <PersonIcon /> */}
                <Avatar src="https://scontent.fjai1-1.fna.fbcdn.net/v/t1.0-9/95579659_251943029504450_4224608541916266496_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=-kEKsRy4qkkAX9qpY0s&_nc_ht=scontent.fjai1-1.fna&oh=ede61f2e7978df4d9c5f2da2a4a6b46c&oe=5F9772E5" />
                {/* <Avatar src="https://scontent.fjai1-1.fna.fbcdn.net/v/t1.0-9/95579659_251943029504450_4224608541916266496_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=-kEKsRy4qkkAX9qpY0s&_nc_ht=scontent.fjai1-1.fna&oh=ede61f2e7978df4d9c5f2da2a4a6b46c&oe=5F9772E5" /> */}
                    {/* <AccessTimeIcon/> */}
                    {/* as yeh icons bhi ek-component meh hi as a return-value set hai. thus toh mtlb apn uss icon-ko contain krne wale component ko call kr rahe hai. */}
                    <div className="sidbar__headerRight">

                    <IconButton>
                   
                    <AccessTimeIcon/>

                    </IconButton>
                    <IconButton>
                        {/* as yeh icons bhi component se bhi apnko return ho rhe hai. */}
                    <ChatIcon />

                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>

                    </IconButton>
                    </div>

               
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input type="text" name="" placeholder="Search or Start new Chat" id=""/>
                </div>
            </div>
            <div className="sidebar__chats">
                <h1>Add New Chat</h1>
                <hr/>
                <Sidebarchats/>
                <Sidebarchats/>
                <Sidebarchats/>
                <Sidebarchats/>
                <Sidebarchats/>
                <Sidebarchats/>

            </div>
        </div>
    }

}
export default Sidebar

// for icons-visit materialUI.com and then this-command in react-app-folder : npm install @material-ui/core
// and also run this command in that folder only: npm install @material-ui/icons
// and then go the see-all-icons-options and see all the icons that we have to use and. as apn uss icon  k component ko call krteh hai and voh component in the return apnko voh icon-deta hai.
// import React from 'react'

// function sidebar() {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default sidebar
// "sidebar": as toh apn hamesa file ka name ka first-letter-capital rkhteh hai , as jab vhi rfce-snippet ka use kare then vaha apne component ka naam ka first-letter bhi capital ho.
