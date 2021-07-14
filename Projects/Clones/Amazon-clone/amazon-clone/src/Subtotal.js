import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import {useStateValue} from './Stateprovider'


function Subtotal() {
    const [ {basket}, dispatch] = useStateValue();
 
    const checkoutbutn = () => {
        // jump to checkout page.
    }

    return (
        <div className="subtotal">
            {/* pricing */}
            <CurrencyFormat
            renderText = { (value) => (
                <>
                <p>
            Subtotal ({basket.length} items): <strong>{``}</strong>
                </p>
                <small className="subtotal__gift">
                    <input  type="checkbox"/> This Order Contains a gift
                </small>
                </>
            )}
            decimalScale = {2}
            value = {0}
            displayType = {"text"}
            thousandSeparator= {true}
            prefix = {"$"}
            />
            <button  >Procedd to Checkout</button>
            {/* for this first install this: npm i react-currency-format */}
            {/* onClick={ checkoutbtn} */}
        </div>
    )
}

export default Subtotal
