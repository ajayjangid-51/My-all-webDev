import React from "react"
import "./Mainbody.css"
import Vediocmnt from "./Vediocmnt"

function Mainbody() {
    return <div className="mainbody">
        <div className="mainbody__categories">
            <button> All</button>
            <button> JavaScript</button>
            <button>Css</button>
            <button> Computer Science</button>
            <button>Wordpress</button>
            <button>Computer programming</button>
            <button>Steve Jobs</button>
            <button>Data Science</button>
            <button>Lectures</button>
            <button>Elon Musk</button>
            {/* <button>Elon Musk</button> */}

        </div >
        {/* <hr/> */}
        <div className="mainbody__vedios">
            <Vediocmnt
                image = "https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
                urli="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
                heading="Youtube_clone "
                channelname="Clever programmer ✔️ "
                views="1M"
                timestamp="10 days" />
            <Vediocmnt
            image = "https://i.ytimg.com/vi/5_5oE5lgrhw/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBg8GRF_5PgGqz9YRYSFXmJXmYbAg"
                heading="Data-structures and algorithms"
                channelname="CodeWithHarry"
                views="1M"
                timestamp="10 days" urli="https://yt3.ggpht.com/a/AATXAJzKAcKhT1nk--c6maiu7lwYgF5ZqF8zKCCtDis3Ag=s900-c-k-c0xffffffff-no-rj-mo" />
            <Vediocmnt
                image="https://i.ytimg.com/vi/PMbqo7ue_u0/maxresdefault.jpg"
                heading="Youtube_clone"
                channelname="Clever programmer"
                views="1M"
                timestamp="10 days"
                urli="https://yt3.ggpht.com/a/AATXAJyTnfvyh2cXq9FmM60WW_hyTcE4KSAu1wlFZ5LB1Q=s900-c-k-c0xffffffff-no-rj-mo" />
            <Vediocmnt 
            image= "https://i.ytimg.com/vi/gN-0MnN9YsU/maxresdefault.jpg"
            urli="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1500550935/qigpiu6kicm4phqbi2il.png" 
            heading="Master Kotlin"
            channelname="Coding ninjas"
            views="404K"
            timestamp="10 days"
            />
            {/* <Vediocmnt/> */}
        </div>
        <div className="mainbody__vedios">
            <Vediocmnt
            image = "https://i.ytimg.com/vi/hNB7RTKfbug/maxresdefault.jpg"
                heading="How Bill Spend his money"
                channelname="Bill Gates"
                views="1M"
                timestamp="10 days"
                urli="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
            <Vediocmnt
            image = "https://i.ytimg.com/vi/k0vMw65eaXQ/maxresdefault.jpg"
            heading="Youtube_clone"
            channelname="Clever programmer"
            views="1M"
            timestamp="10 days"
            />
            <Vediocmnt
            image="https://i.ytimg.com/vi/vQWlgd7hV4A/maxresdefault.jpg" 
            heading="Youtube_clone"
            channelname="Clever programmer"
            views="1M"
            timestamp="10 days"
            
            />
            <Vediocmnt />
            {/* <Vediocmnt/> */}
        </div>
        <div className="mainbody__vedios">
            <Vediocmnt />
            <Vediocmnt />
            <Vediocmnt />
            <Vediocmnt />
            {/* <Vediocmnt/> */}
        </div>
    </div>
}

export default Mainbody