import React from 'react'
import './Checkout.css'
import { useStateValue } from './Stateprovider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout" >
            <div className="checkout__left">
                <img src="/images/banner2.jpg" alt="" className="checkout__ad" />


                {/* now react-js and ES6 meh if-else conditions ess tarah lagateh hai.. means this is all ES-6 features and as simply boleh toh EcmaScript-6 meh ase-ase short-hands define kiyeh gayeh hai jisse mtlb apni coding bohat fast and easy to understand ho jati hai. */}
                {basket?.length === 0 ? (
                    <div className="noitem">
                        <h2>Your Basket is Empty , go and get shopping</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni debitis dolorum harum iste assumenda necessitatibus autem quia, minus, eaque placeat id atque officia voluptate labore architecto ad, ex error incidunt dolorem blanditiis.</p>
                    </div>
                ) : (
                        // and this else condition is written like this:
                        <div>
                            <h2 className="checkout__title" > Your Shoppoing Basket</h2>

                            {/* and now apn jo products basket meh add kiyeh gayeh hai unko yaha show krvayenge. */}

                            {basket.map((item) => (
                                // jb arrow-function meh ek hi parameter ya props ho then vaha yeh () bhi lagane ki jarurat nhi hoti.
                                // and note-point: ki react-js meh functions ko as component ki tarah hi treat kiya jata hai thus unheh call bhi as like as component ki tarah hi kiya jata hai.. and uske parameters ko yeh checkoutproduct ki niche wali line jis tarah input kiyeh gayeh same usi tarah input kiyeh jateh hai. and vaha comma(,) lagane ki jarurat nhi hai.
                                <CheckoutProduct
                                    id={item.id} title={item.title} iamge={item.image} price={item.price} rating={item.rating}
                                />

                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    {/* <h1>Sub-Total</h1> */}
                    {/* <Subtotal/> */}
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

export default Checkout
