import React from 'react'
import './CheckoutProducts.css'
import {useStateValue} from './Stateprovider'


// note: props mtlb parameters.
function CheckoutProduct({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();
    // mtlb basket meh useStateValue ki             basket-dedicated return-value store hogi and dispatch meh  useStateValue ki dispatch-dedicated return-value store hogi.
    
    console.log(id, title , image , price , rating);

    const removeFromBasket = () =>{
        // yaha pe item ko basket se remove krne ka ek algorithm-code likhenge..
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id : id,
        });
        // yaha pe apnne dispatch-fn ko call kiya hai and yeh fn input meh ek array leta hai thus voh array apnne input kiya hai.
       
    };

    return (
        <div className="checkoutproduct" >
            <img className="checkoutproduct__image" src={image} alt="" />

            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title" >{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
                    {Array({ rating })
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))
                    }

                    <button onClick={ removeFromBasket} >Remove from basket</button>
                </div>

            </div>

        </div>
    )
}

export default CheckoutProduct
