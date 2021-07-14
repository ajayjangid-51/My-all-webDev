import React from 'react';
import ReactDOM from 'react-dom';
// As ki sbse se phle apna index.js hi run hoga. phir baki files run and render hogi. but cheeze sbse phle sbse andar wali cheeze run hogi.
import './index.css';
import App from './App';
// as yaha pe apnne App()-fn ko import kiya hai from the APP.js file se.
import * as serviceWorker from './serviceWorker';
// import { Staticprovider } from './Stateprovider';
// as ess tarah apn kisi Array ko import krteh hai.
// import reducerfn , {initialState} from './reducer.js'
// thus toh yaha pe apn reducer.js file ka "iniState-named Array" ko import kiya hai and ek reducerfn-fn() bhi import kiya hai.

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);
// as yaha yeh render()-fn ek function hota hai jo ki apne inputed-data ko chrome-borser ko open krke usmeh render kr deta hai.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
