// YAHA  pe apn Product-card banayenge:
import React from 'react'
import "./Product.css"
import {useStateValue} from './Stateprovider';

// now toh aab apn ess function meh input ek array lenge. and yeh ES6(ecmaScript) meh ka new tarika hai.
function Product({p1_id , p2_title, p3_price, p4_rating, p5_image }) {

    const [{}, dispatch] = useStateValue();
    // mtlb dispatch meh yeh dispatch-fn ka content return kr dega.
    // yaha pe apnne ek Structure banaya hai.
    const addToBasket = ()=> { 
        // workbox or return-value
        dispatch({

            type: 'ADD_TO_BASKET',
            item: {
                id : p1_id,
                title: p2_title,
                price: p3_price,
                rating: p4_rating,
                image: p5_image,
                // yaha pe yeh item ek object hai..

                // or ya apn ese bhi kr skteh hai , mtlb dono same baat hi hai. jab apne key-name and parameters-name same ho tb.
                // p1_id,
                // p2_title,
                // p3_price,
                // p4_rating,
                // p5_image

            }
        })
        // as toh yaha pe apnne ess addToBasket()-fn meh dispatch()-fn ko call kiya hai. and yeh dispatch()-fn in the input yeh ek array leta hai, jis ke two elemennts hai: where usmeh one is string and second is object.

        return "hi hello ji";
        
    };
    // now toh jab bhi kisi variable meh function define krteh hai toh apn arrow-function hi define krteh mtlb voh overall function hi hai , na ki koi variable hai.

    return (
        <div className="product" >
            <div className="product_info">
                <p>{p2_title} </p>
                <p className="product__price">
                    <small>$</small>
                    {/* small-html-element meh jo bhi cheeze daali jati hai unki size approx: 10px hoti hai */}
                    <strong>{p3_price}</strong>
                    {/* strong-html-element meh jo bhi cheeze daali jati hai unki size approx: 30px and bold hoti hai */}
                </p>

                <div className="product__rating">
                    {/* now yaha Product__rating k liyeh apn loop banayenge and phir voh as per the input "Star " print krega. and ya phir apn simply React-js ka new concept apply kr denge as like this: */}
                    {/* M1-looP-method:
                      var i;
                     var rate ={p4_rating}
                    while(i<rate ){
                        🌟
                    }
                     */}

                    {/* M2-React and ES6 method: */}
                    {
                        //  now ek baar curly-braces{} lagane k baad meh apn simply apni Javascript likh skteh hai, toh mtlb react meh apn apni html and javascript dono hi likh skteh hai bas javascript k liyeh apnko simply curly-braces{} lagane padenge:: 


                        Array(p4_rating)
                            // thus toh esseh yaha ess Array()-fn se ek Array bana liya hai of p4_rating ki value number k equal. as bcoz yeh function in the return apnko ek array banake deta hai. jaise Array(5),
                            .fill()  // yeh Array-dedicated function() ess array k sabhi element ko empty kr dega.

                            // and yaha niche yeh map()-fn ess array k element ko fill kr dega and yeh function no.of array-elements-time call hota hai.
                            .map((_) => (
                                <p>🌟</p>
                            ))
                        // as yaha .map()-fn k input meh apnne ek function bana krke input diya. and yeh function-arrow-function mtlb simply apne jldi bazi meh arrow-function bana diya hai. toh thus arrow function ess tarah banateh hai:
                        //                                              (_) =>(
                        //                                             <p>🌟</p>
                        //                                             )
                        // where yaha pe ess function ka parameter hai underscore(_) and yeh trick hi hai jisse apn inputed-times stars print krva skteh hai. and esi bohat sari techniques hoti hai.
                    }

                </div>
            </div>

            <img src={p5_image} alt="" className="product__imagi" />
            <button  onClick={addToBasket}  >Add to basket</button>
            {/* as onclick ek array hota mtlb jaise apne array meh multiple function input kr skteh hai ,thus toh onclick hone pr yeh sbhi function call hojayenge, thus toh isiliy apne yeh addToBasket()-fn curly-braces{} meh likha hai. */}

         



        </div>
    )
}

export default Product
