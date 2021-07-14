import React from 'react';
import './App.css';
// import {Header} from './Header';
import Header , {Hedi} from './Header';
// import Header , Hedi from './Header'; this is wrong bcoz yaha yeh Hedi defaulty exported nhi hai, thus isiliy apnko esko curly-braces meh likhna hota hai.
import Mainbody from './Mainbody';
import Sidebar from './Sidebar';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Searchpage from "./Searchpage"
// import { BrowserRouter as Routi, Switch  , Route } from "react-router-dom"
function App() {
  return (
    <div className="app">
      {/* the classname is "app" ,  bcoz we are following BEM-classnaming-convention */}
      {/* <h1>Hello here we are goona to build youtube-Clone 🚀</h1> */}

      {/* 🔔🔔 as apn React- se routes bhi set kr skteh hai as like this , as but yeh apn mostly backend se  krteh hai. */}
      {/* <Routi>  if as Routi is used*/}
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/home" >
            <Hedi/>
            <h1> i am Home page</h1>
          </Route>
          <Route path="/search/:serchi" >
            <div className="route_search">

            {/* <h1> Hey i am Serch page </h1> */}
              <Sidebar />
              <Searchpage/>
            </div>
          </Route>
          <Route path="/" >
            <div className="bodiy">
            <Sidebar />

              <Mainbody />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Routi/> */}

      {/* 🌟🌟🌟 thus toh mtlb React-router super-mast cheez hai. 🌟🌟🌟 */}


    </div>
  );
}

export default App;
