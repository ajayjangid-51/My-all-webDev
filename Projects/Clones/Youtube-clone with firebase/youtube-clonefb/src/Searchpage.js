import React from "react"
import './Searchpage.css';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import TuneIcon from '@material-ui/icons/Tune';
import Vediorow from "./Vediorow";
import Channelrow from "./Channelrow"

function Searchpage() {
    return <div className="searchpage">
        {/* <h1> Hey i am the Search-page</h1> */}
        <span className="searchpage_header" >

            {/* <MenuOpenIcon/> */}
            <TuneIcon />
            <span><h4>FILTER</h4></span>
        </span>
        <hr />
        <p>Did you mean:<b> how to use onclick in react js</b> </p>
        <div className="searchpage__results">
            {/* <Results/> */}
            <Channelrow
                // verified="good" ya apn esseh bhi likh skteh hai . as agr esseh likhteh hai toh good show ho jayega and agr esseh 👇 likhteh hai toh koi text show nhi hoga. and yeh kaam apn mostly verified-user hai k nhi uske liyeh krteh hai.
                verified
                channelname="Clever programmer"
                avimage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
                subscriber="795K"
                noofvedios="456"

            />
            <Vediorow
                avimage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/rJjaqSTzOxI/maxresdefault.jpg"
                title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
                channelname="Clever programmer"
                views="1M"
                timestrap="6 months"
                description="you get all professional and super-qality vedios"
            />
            <Vediorow
                avimage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/-M8HEGLFkFE/maxresdefault.jpg"
                title="Build a Instagram-Reels Clone with REACT JS for Beginners"
                channelname="Clever programmer"
                views="405K"
                timestrap="2 days"
                description="you get all professional and super-qality vedios"
            />
            <Vediorow
                avimage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/-M8HEGLFkFE/maxresdefault.jpg"
                title="Build a Instagram-Reels Clone with REACT JS for Beginners"
                channelname="Clever programmer"
                views="405K"
                timestrap="2 days"
                description="you get all professional and super-qality vedios"
            />
            <Vediorow
                avimage="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s900-c-k-c0xffffffff-no-rj-mo"
                image="https://i.ytimg.com/vi/-M8HEGLFkFE/maxresdefault.jpg"
                title="Build a Instagram-Reels Clone with REACT JS for Beginners"
                channelname="Clever programmer"
                views="405K"
                timestrap="2 days"
                description="you get all professional and super-qality vedios"
            />

        </div>
    </div>
}

export default Searchpage

