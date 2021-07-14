import React from 'react'
import "./Post.css"
import { Avatar } from "@material-ui/core"
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import ScreenShareOutlinedIcon from '@material-ui/icons/ScreenShareOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Post({ acProfile, verified , image ,   title, comments, likes, retweets, shares, date }) {
    return <div className="post">
        <Avatar className="avatari" src={acProfile} />
        <div className="post__infos">
            <span className="post__infos_heading" >
                <h2>{title}</h2> <span> 
{verified && <VerifiedUserIcon className="verified yesverified" />}
                </span>
                {/* <span className={`post__info_verified` verified && "userverified" }>

                </span> */}

                <p> @{title} .   </p>
                <p> {date} </p>

            </span>
            <span className="post__infos_about" >
            I’m excited to see this kind of innovation. Detecting and predicting outbreaks earlier is critical to preventing epidemics.
            </span>
        
        <div className="post__infos_img">
            <img src={image} alt="" />
            <p className="post__infos_imgdesptn">
                Predecting epidmics like  the wheather , How Microsoft can help in the global fight
                <a href="/"> news.microsoft.com</a>
            </p>
        </div>
        <div className="post__infos__reactions">
            <p className="reactions" >
                <ChatBubbleOutlineRoundedIcon /> <span> {comments}
                </span>
            </p>
            <p className="reactions" >
                <RepeatRoundedIcon /> <span> {retweets}  </span>
            </p>
            <p className="reactions" >
                <FavoriteBorderRoundedIcon /> <span> {likes}  </span>
            </p>
            <p className="reactions" >
                <ScreenShareOutlinedIcon />
                <span> {shares}  </span>
            </p>



        </div>
    </div>
    </div >
}

export default Post
