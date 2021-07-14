import React from 'react';
import './App.css';
// import './Header.css';
// import Header from "./Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

// import Home from "./Home.js"
// import function-name from function's-file-name-without-its-extension or with extension.




function App() {
  return (
    // BEM naming Convention:
    <Router>
      <div className="app">
        {/* yeh comments curly-braces{} meh isiley hai q ki apn yeh React-js k html-elements meh code likh rhe hai ,and phir agr esmeh apnko agr JavaScript use krni hai then phir voh apn yeh curly-braces{} lagake apna JS-code likh skteh hai. thus toh iska mtlb hai ki apn react-js k html-elements(mtlb jismeh html likteh hai) meh pure javascript ki coding kr skteh hai but vaha pe phle apnko "curly-braces{}-lagane pdteh hai"  as like as php jismeh apn html-code likh skteh hai but jb apnko php-code likhna ho then tb apn ess <?php > php-code </php> braces-meh apna php-code likhteh hai. */}

        <div className="app__body">
          {/* now yaha esmeh 2-cheeze hogi:
              1.Side-bar(in left)
              2.and full chat-box(to the right of side-bar) */}

             <Sidebar/>
             
        </div>
      <Switch>   
        {/* switch-element meh jo text hoga voh switchable hoga, and thus voh apnko kisi path pe le jayega. and apn ess Switch-element meh Route-element se Routes create krteh hai. and phir enn Routes meh apn jo function call krna chahteh hai voh easily call kr skteh hai.
        🔥where Route mtlb ek Webpage-url hi hota hai. 
        */}

        
        
        
      </Switch>
      </div>

    </Router>

  );
}

export default App;
