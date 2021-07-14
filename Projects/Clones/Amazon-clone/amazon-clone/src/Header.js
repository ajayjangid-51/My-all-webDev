// yaha sbse apn ES7/React/Redux/-extension install krenge:
// simply type "rfce"
import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "./Stateprovider";

function Header() {
    const [ {basket}] = useStateValue();
    console.log(basket);


    return (
        <nav className="header" >
             {/* now yaha pe apni navbar-design krenge: where esmeh mainly 4-cheeze hai:  */}
            {/* // 1. logo */}
            {/* <h1>this is header</h1> */}
            
            <Link to="/login" > 
            {/* thus mtlb simply ess click krne pr yeh path url meh chip jayega and directly enter mtlb search bhi hojayega. thus mtlb yahi cheez sabhi links ya button pe hoti hai. */}

          <img className="header__logo" src="/images/amazon1.png" alt="no img"/>
            </Link>
          {/* thus now React-js meh apnko koi bhi images daal ni hai then voh images apn "public" folder  meh rkhteh hai and then phir acces krteh hai. */}
          {/* as Link se page refresh nhi hota but uss anchor-tag se page refresh hota hai mtlb apna sara filled data chala jata hai thus toh phir apn simply hamesa Link-tag ka use hi krenge.. */}
           
            {/* // 2. search-box */}
            <div className="header__search">

            <input type="text" className="header__searchinput"/>
            {/* now apn  @material-ui-Library ko install krenge bcoz yeh library meh bahot sare acche acche ui(user-interface)-k-liyeh-materials jaise icons, logo etc..etc.. hoteh hai */}
            <SearchIcon className="header__searchIcon"/>
            </div>

            {/* 3. 3-links */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne"  >Hello ji</span>
                    <span className="header__optionLinetwo"  >Sign In</span>
                </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne"  >Returns</span>
                    <span className="header__optionLinetwo"  >& Orders</span>
                </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne"  >Your</span>
                    <span className="header__optionLinetwo"  >Prime</span>
                </div>
                </Link>
                {/* 4th link */}
            </div>

            {/* // 4. basket with number of items */}
          <Link to="/checkout" className="header__link" >
              <div className="header__optionBasket">
              {/* basket */}
              <ShoppingBasketIcon/>

              {/* no-of items in basket */}
    <span className="header__optionLinetwo headerbasket__count"  >{basket?.length}</span>
    {/* question-mark(?) lagane se voh cheez optional ban jati hai.. */}
              </div>
          </Link>
           
        </nav>
        
    )
}

export default Header
