import React from "react"
import "./Header.css"
import MenuIcon from '@material-ui/icons/Menu';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core"
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import {useState} from "react"
import { Link } from "react-router-dom"
function Header() {
    var a = 32
    var [inputSearchi , setInputSearchii] = useState("")
    /* 👿useState-fn-Suggestion: useState(): [undefined, React.Dispatch<(prevState: undefined) => undefined>] as toh apnko yaha yeh pata chal raha hai ki ess useState()-fn k koi parameters nhi hai mtlb apnko ess function meh koi input nhi hai and apnko esseh = useState(): [a,b] return-value se yeh pata chal raha hai ki ess function ki return-value ek array hai. */
    // setInputSearchii()
    // as apnko ess funciton ka yeh suggestion mila hai: " setInputSearchii(value: React.SetStateAction<string>): void  " thus mtlb as ess setInputSearchii()-fn ki return value kuch nhi hai. 
    console.log(inputSearchi)
    console.log( setInputSearchii)

    function onik(){
        console.log("you click on the on-buttion")
    }
    return <div className="header">
        {/* <h1> Hey i am header-component-function's return-value</h1> */}
        {/* { let a = document.getElementbY} */}
        <div className="header__left" id="adms">
            <MenuIcon />
            <span className="header__logo">
                <Link to="/">
                <YouTubeIcon />
                </Link>
                    {/* <a href="/"> */}
                    {/* as apn anchor-tag ka bhi use kr skteh hai or ya phir apn React meh kaam kr rhe toh apn phir <link>-component ka hi use krteh hai. and link-hi sahi approach hai bcoz link apne page ko refresh nhi krta toh mtlb uss page pe apna filled data rheta hai mtlb voh refresh nhi hota thus yeh ek mastam baat hai. and yeh jada fast bhi hai. */}
                <h3>YouTube <sup>IN</sup></h3>
                    {/* </a> */}
                {/* <img src="https://i.insider.com/59a59a8d79bbfd1d008b601a?width=1200&format=jpeg" alt=""/> */}
            </span>
        </div>

        <div className="header__middle">
            <input  onChange={e => setInputSearchii(e.target.value)} value={inputSearchi} type="text" name="" placeholder="Search" id="" />
            {/* as react meh apn website-Event pe event-listener mtlb function simply uska name likhkr hi call krteh hai. not ki jaise apn html-script meh functioname() esseh call krteh thee. thus toh apnko ess baat ka dhyan rkhna hai. */}
            <Link to={`/search/${inputSearchi}`}>
                <SearchIcon className="header__searchicon" />
                {/* <button onClick={onik()} >on</button> as react meh apn ess tarah events-set nhi krteh*/}
                {/* <button onClick={onik} >on</button>  as react meh ess tarah events-set kiyeh jateh hai.*/}
            </Link>
        </div>

        <div className="header__right">
            <PublishSharpIcon />
            <AppsSharpIcon />
            <NotificationsSharpIcon />
            <Avatar src="https://scontent.fjai1-1.fna.fbcdn.net/v/t1.0-9/95579659_251943029504450_4224608541916266496_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=-kEKsRy4qkkAX-Qkn6x&_nc_ht=scontent.fjai1-1.fna&oh=e624108d6072cdfbf739527b4ee8d6e3&oe=5F9772E5" />
        </div>

        {/* {
             document.getElementById("adms").onclick = ()=>{
                document.getElementById("adms").style.display = "none"
            }
            } */}




    </div>
}

export default Header
// as this is exported defautly.
// export Header


// 📓: this is exported not-defaulty
export function Hedi(){
    return <div className="diivi">
        <h1>hey i am Hedi</h1>
    </div>
}

function chek (){
    var a = [21 , 22]
    return a
}
let [b , c] = chek()
console.log(`the value of b is ${b}`)
console.log(c)
// or ya apn esseh bhi kr skteh hai. thus yeh ek voh baat thi jo apnnko phle pata nhi thi ki apn ess tarah ek array-banake phir usmeh kisi function-return-value-which-is-actually-Array ko apn ess tarah index-wise store kr skteh hai.
// let b  = chek()
// console.log(`the value of b is ${b}`)
// console.log(c)

// exports Hedi





