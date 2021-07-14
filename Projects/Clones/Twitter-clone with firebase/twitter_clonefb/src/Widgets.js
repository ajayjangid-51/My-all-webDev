import React from 'react'
import "./Widgets.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Whatshpns from "./Whatshpns"
import { TwitterTimelineEmbed , TwitterShareButton , TwitterTweetEmbed  } from "react-twitter-embed"

function Widgets() {
    return <div className="widgets">
        <div className="widgets__content">

            <div className="widgets__searchbar">
                <SearchRoundedIcon />
                <input type="text" name="" placeholder="Search Twitter" id="" />

                {/* <TwitterShareButton/> */}
            </div>
            <div className="widgets__whatshappening">
                <h3>What's happening</h3>
                {/* <TwitterTweetEmbed tweetId="1313143225356611584" /> */}
                {/* <TwitterTimelineEmbed/> */}
                {/* <hr/> */}
                <Whatshpns
                topic="IPL 2020"
                status="LIVE"
                titleds="IPL: Kolkata Knight Riders take on Chennai Super Kings"
                avisrc="https://pbs.twimg.com/semantic_core_img/1310500592469516288/AmHzEYWl?format=jpg&name=240x240"
                  />
                <Whatshpns
                topic="IPL 2020"
                status="LIVE"
                titleds="IPL: Kolkata Knight Riders take on Chennai Super Kings"
                avisrc="https://pbs.twimg.com/semantic_core_img/1255575536824233984/CiLy4der?format=jpg&name=240x240"
                  />
                <a href="/"> Show more </a>
            </div>

            {/* Now for widgets-section we will install a react-library named = "react-twitter-embed" so that apn twitter-news ko apne yaha ess website pe fetch kr sake.*/}
            {/* for this install the react-library by giving this command is =  npm i react-twitter-embed */}
        </div>

        {/*  */}
    </div>
}

export default Widgets
