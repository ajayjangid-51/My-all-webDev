import React from "react"
import "./Sidebar.css"
import Sidebarrow from "./Sidbarrow"
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';

function Sidebar() {
    return <div className="sidebar">
        {/* but we will do it by component-approach only */}
        {/* <Sidebarrow title="homi" p2="<HomeSharpIcon/>" /> */}

        {/* 📓💡imp-notepoint: as apn paramter meh pura ka pura component hi pass krva skteh hai , thus mtlb jab voh component jaha bhi assign hoga vaha uss component ki return-value lag jati hai.  */}
        {/* toh thus as like this apn component-function ya class meh ess tarah icon as a paramter input krteh hai. */}
        {/* <Sidebarrow selected="selected" title="Home" P2={HomeSharpIcon} /> */}
        <Sidebarrow selected title="Home" P2={HomeSharpIcon} />
        <Sidebarrow title="Trending" P2={WhatshotSharpIcon} />
        <Sidebarrow title="Subscriptions" P2={SubscriptionsSharpIcon} />
        <hr />
        <Sidebarrow title="Library" P2={VideoLibrarySharpIcon} />
        <Sidebarrow title="History" P2={HistorySharpIcon} />
        <Sidebarrow title="Your videos" P2={SlideshowIcon} />
        <Sidebarrow title="Watch later" P2={WatchLaterIcon} />
        <Sidebarrow title="Playlist name" P2={PlaylistPlayIcon} />
        <Sidebarrow title="Show more" P2={ExpandMoreIcon} />
        <hr />

        {/* <div className="sidebar__home cc">
            <HomeSharpIcon />
            <p>Home</p>

        </div>
        <div className="sidebar__trending cc">
            <WhatshotSharpIcon />
            <p>Trending</p>

        </div>
        <div className="sidebar__subscriptions cc">
            <SubscriptionsSharpIcon />
            <p>Subscriptions</p>

        </div>
        <hr />
        <div className="sidebar__library cc">
            <VideoLibrarySharpIcon />
            <p>Library</p>

        </div>
        <div className="sidebar__history cc">
            <HistorySharpIcon />
            <p>History</p>

        </div>
        <div className="sidebar__yourvedios cc">
            <SlideshowIcon />
            <p>Your videos</p>
        </div>
        <div className="sidebar__watchlater cc">
            <WatchLaterIcon />
            <p>Watch later</p>

        </div>
        <div className="sidebar__playlist cc">
            <PlaylistPlayIcon />

            <p>Playlist name</p>

        </div>
        <div className="sidebar__showmore cc">
            <ExpandMoreIcon />
            <p>Show more</p>

        </div>
        <hr /> */}

    </div>
}

export default Sidebar