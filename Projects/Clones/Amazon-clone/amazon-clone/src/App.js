import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import './Header.css';
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home.js"
// import function-name from function's-file-name-without-its-extension or with extension.
// toh apn ess tarah

import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        {/* /* aab now apn apni sari html esi App.js file meh hi likhenge */}
        {/* <h1>hi hello ji now we will build Amazon-clone by react js <span>🚀</span> 😈 </h1> */}
        {/* now apn emoji bhi daal skteh hai but simply phle apnko :emojisence: extension intall krni hoti hais */}
        {/* yeh comments curly-braces{} meh isiley hai q ki apn yeh React-js k elements meh code likh rhe hai , thus toh iska mtlb hai ki apn react-js meh pure javascript ki coding kr skteh hai but vaha pe phle apnko "curly-braces{}-lagane pdteh hai" */}
      <Switch>   
        {/* switch-element meh jo text hoga voh switchable hoga, and thus voh apnko kisi path pe le jayega. */}
        <Route path="/checkout" > 
        <Header /> 
         {/*so ese ek function bana krke as like Header apn esko kahi bhi kisi bhi Route-webpage meh call kr skteh hai and yahi actually "React-ki-Component-based-design and working hai and yeh kafi acchi bhi hai."  */}

         {/* very imp NOTEE-POINT: as simply dekhe toh apn yaha pe apne webpages ya webpages-components ko ek Program se run krva rhe hai thus, eska mtlb hai cheeze one by one execute hoti rhegi mtlb thus jaise jaise apn scrool krenge voh cheeze loag hojaygi thus yahi React-js ki kafi acchi baat hai thus, toh esseh apni website ek "slow-speed-data-connection" pe bhi aaram se load ho jati hai bcoz vaha pe sari sabhi cheeze ek saat meh load nhi hoti mtlb one by one and as per scrolling se load hoti hai, jaise sbse phle navbar loag ho gayi but yaha niche wale banners-vagera load nhi huyee but jb apn scrooll krenge tb voh load honge ,toh mtlb sabhi cheeze yaha pe ek saat load nhi hoti mtlb one by one load hoti hai. thus toh mtlb React-ek acchi practice hai, in both perfomance and time-saving and fast meh.  */}
        
        <Checkout/>
        {/* <h1>Checkout 🏁 🏁 </h1> */}
        
        </Route>
        {/* thus ase toh apnko ek website k alag-alag pages k liyeh alag-alag banane hoteh hai but yaha React-Router se apn simply ek React-Element create krke and usmeh path set krke vaha usi meh hi simply apni pura web-page html code likh skteh hai thus isiliy React-js-Library kafi acchi hai*/}
        <Route path="/login" > 

        <Header />  
        <Home/>
        <h1>login hi this is login 👍 🔥 </h1></Route>
        {/* yaha Route mtlb webpage mtlb ess path pe jo webpage hai uska code-content sara esmeh hoga. */}
        <Route path="/" > 
        <Header />  
        {/* as thus toh apnne yaha pe Header function of or in Header.js file ko run kr diya hai. */}
        <Home/>
        {/* <Header/> */}
        <h1>Home page!! 🏠</h1>
         
        </Route>
      </Switch>
      </div>

    </Router>

  );
}

export default App;
