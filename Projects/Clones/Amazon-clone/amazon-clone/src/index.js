import React from 'react';
import ReactDOM from 'react-dom';
// As ki sbse se phle apna index.js hi run hoga. phir baki files run and render hogi. but cheeze sbse phle sbse andar wali cheeze run hogi.
import './index.css';
import App from './App';
// as yaha pe apnne App()-fn ko import kiya hai from the APP.js file se.
import * as serviceWorker from './serviceWorker';
import { Staticprovider } from './Stateprovider';
// as ess tarah apn kisi Array ko import krteh hai.
import reducerfn , {initialState} from './reducer.js'
// thus toh yaha pe apn reducer.js file ka "iniState-named Array" ko import kiya hai and ek reducerfn-fn() bhi import kiya hai.

ReactDOM.render(
  <React.StrictMode>
    <Staticprovider reducer={reducerfn} initialstate={ initialState}   >
    <App />

    {/* toh apnne yaha pe simply StaticProvider()-component-fn ko call kr diya hai and usmeh inputs bhi daal diyeh thus toh yeh function execute hojayega mtlb esmeh sbse phle apne Staticontext ka provider function and usmeh as input meh useReducer funtion run hojayega and phir last jo cheez ess react-fn ya component-fn k andar jo cheez hai voh chrome meh render hojayegi. */}
    
    {/* as now yaha pe yeh <App/> as {children behave kr rha hai} bcoz as simply apn boleh toh ess Statiprovider meh ek function ki return value store hai and voh return value {children} hai thus now apnne uss {children} ki jagah yeh <App/> pass kr diya hai. */}
    </Staticprovider>
  </React.StrictMode>,
  document.getElementById('root')
);
// as yaha yeh render()-fn ek function hota hai jo ki apne inputed-data ko chrome-borser ko open krke usmeh render kr deta hai.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
