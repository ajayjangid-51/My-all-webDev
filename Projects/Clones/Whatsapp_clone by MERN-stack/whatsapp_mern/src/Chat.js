import React from "react"
import "./Chat.css"
// import {Avatar} from "@material"
import { Avatar , IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Chat(){
    return <div className="chat">
        {/* hey i am Chat.js */}
        <div className="chat__header">
            <Avatar src="https://cdn.cdnparenting.com/articles/2020/01/25153910/381833377.jpg" />
            <div className="chat__header_info">
                <h1>Room Name</h1>
                <p>last seen time </p>
            </div>
            <div className="chat__header_right">
                <IconButton>
                <MoreVertIcon/>
                    
                </IconButton>
                <IconButton>

                <AttachFileOutlinedIcon/>
                </IconButton>
                <IconButton>

                <SearchOutlinedIcon/>
                </IconButton>

            </div>

        </div>
        <div className="chat__body">
            <p className="chat__message">
                <span className="chat_name">
                    Ajubhai
                </span>
                This is message
                <span className="chat_timestamp">
                    {/* { a = new Date().toUTCString()  } */}
                    {  new Date().toUTCString()  }
                    {/* as apn jaise kisi class ko call krteh hai then uski return-value usska Object hi hota hai. thus toh apn bina koi variable meh store kiyeh bina hi usseh use kr skteh hai as jaise ki apnne upar kiya hai. */}
                    {/* ya phir apn esseh bhi kr skteh hai. */}
                    {/* { <script>
                        let a = new Date()
                        a.toUTCString()
                        doucument.getElementbyId("").
                    </script> } */}
                </span>
            </p>
            <p className="chat__message">
                <span className="chat_name">
                    Ayanbhai
                </span>
                This is message
                <span className="chat_timestamp">
                    {/* { a = new Date().toUTCString()  } */}
                    {  new Date().toUTCString()  }
                    {/* as apn jaise kisi class ko call krteh hai then uski return-value usska Object hi hota hai. thus toh apn bina koi variable meh store kiyeh bina hi usseh use kr skteh hai as jaise ki apnne upar kiya hai. */}
                    {/* ya phir apn esseh bhi kr skteh hai. */}
                    {/* { <script>
                        let a = new Date()
                        a.toUTCString()
                        doucument.getElementbyId("").
                    </script> } */}
                </span>
            </p>
            <p className="chat__message chat__receiver">
                <span className="chat_name">
                    Ayanbhai
                </span>
                This is message
                <span className="chat_timestamp">
                    {/* { a = new Date().toUTCString()  } */}
                    {  new Date().toUTCString()  }
                    {/* as apn jaise kisi class ko call krteh hai then uski return-value usska Object hi hota hai. thus toh apn bina koi variable meh store kiyeh bina hi usseh use kr skteh hai as jaise ki apnne upar kiya hai. */}
                    {/* ya phir apn esseh bhi kr skteh hai. */}
                    {/* { <script>
                        let a = new Date()
                        a.toUTCString()
                        doucument.getElementbyId("").
                    </script> } */}
                </span>
            </p>
        </div>
        <div className="chat__writemsg">
            {/* <h2>Hey type the message here</h2> */}
            <IconButton>
                
            <SentimentSatisfiedOutlinedIcon/>
            </IconButton>

            <div className="chat__writingms_input">
                <form action="">

            <input type="text" name="" placeholder="Type a Message" id=""/>
                    <button type="submit">
                        {/* Send-Message */}
            <SendOutlinedIcon/>
                    </button>
                </form>
            </div>
            <IconButton>

            <MicOutlinedIcon/>
            </IconButton>



        </div>
    </div>
}

export default Chat