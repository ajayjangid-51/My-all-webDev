import React, { useState , useEffect } from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core';

function SidebarChat( { addNewChat}) {
    const [seed , setseed] = useState("");
    // where yaha pe yeh useState is a function.

    useEffect( () =>{
        setseed(Math.floor(Math.random()* 5000));   

    } , []);
    return (
        <div className="sidebarchat">
            <Avatar src={` https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarchat__info">
                <h1>Room Name</h1>
                <p>Last Message ...</p>
            </div>
              
        </div>
    )
}

export default SidebarChat

⏰⏰ continue at 1:16:17 whats app clone. ⏰⏰   visit: 
https://www.youtube.com/watch?v=pUxrDcITyjg&list=WL&index=7&t=0s 

