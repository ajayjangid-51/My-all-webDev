import React , {useState} from 'react'
import "./Tweetbox.css"
// import {Avatar , Button} from "@material-ui/core"
import { Avatar, Button } from "@material-ui/core"
import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import datab from "./firebase"
function Tweetbox() {
    // let [a1 , b1] = useState("appli")
    const [a1 , b1] = useState("")
    // as actually hota kya hai ki useState()-fn ki input value variable1 meh store ho jati hai and jo variable-2 hai usmeh inputed value ko yeh variable-2()-fn ess useState meh apni inputed-value ess useState()-fn meh input kr deta hai thus toh phir mtlb yeh
    const [a1image , b1image] = useState("")
    // a1 = tweetMessage

    let sendingTweet = evi =>{
        evi.preventDefault()
        datab.collection("postss").add({
            title:a1,
            acProfile:"sonny acprofile",
            likes:43,
            image:a1image,
            comments:11,
            // date=
            shares:32,
            verified:true,
            retweets:100
        })

        b1("")
        b1image("")
        // as enn function ko vapis se run krke apne enki value reset krdi hai.
    }
    function fn11(evi){
        b1image(evi.target.value)

    }
    return <div className="tweetbox">
        <Avatar className="avatar" src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo" />
        <form action="">
            <input onChange={evi => b1(evi.target.value)} type="text" name="" value={a1} placeholder="What's Happening" id="" />
            {/* <input type="text" name="" value={a1image} onChange={evi => b1image(evi.target.value)} placeholder="Enter image url" id=""/> */}
            <input type="text" name="" value={a1image} onChange={fn11} placeholder="Enter image url" id=""/>
            {/* as toh react meh apn Events pe ess tarah simply function ka naam likhe apn function ko call krvateh hai. */}
            <div className="tweetbox__btns">
                <div className="tweetbox__btns_icon">

                <InsertPhotoOutlinedIcon />
                <CardGiftcardOutlinedIcon />
                <EmojiEmotionsOutlinedIcon />
                <EqualizerOutlinedIcon />
                <ScheduleOutlinedIcon />
                </div>
                <Button onClick={sendingTweet} type="submit" variant="outlined" >
                    Tweet

            </Button>
                {/* <Button onClick={console.log("you clicked on the tweet btn")} type="submit" variant="outlined" >
                    Tweet

            </Button> */}
            </div>

        </form>

    </div>
}

export default Tweetbox
