// YAHA pe apn Banner banayenge and baki kuch Products-card bhi banayenge.
import React from 'react'
import "./Home.css"
import Product from "./Product"  // yeh jb unused hota hai tb tb yeh dim rheta hai.

function Home() {
    return (
        <div className="home" >
            {/* now toh aab apn yaha pe apna Banner banayenge */}
            <img src="/images/banner1.jpg" alt="" className="home__image" />


            {/* // product-card with id , name , price , rating , image , add-to-basket button.
        // toh now aab apn apne Products vale function ko run kr lenge and yeh sb input meh dedenge. as like this:
        // product(id,name,image,price)
        // toh now aab apn Product.js k Product-fn() ko call krenge.. as like this: */}

            <div className="home__row">
                <Product
                    p1_id="2323222"
                    p2_title="Brand new Nike shoes"
                    p3_price={100.42}
                    p4_rating={3}
                    p5_image="./images/shoes1.png"
                />

                <Product
                    p1_id="2323231"
                    p2_title="Apple Macbook Pro"
                    p3_price={323.42}
                    p4_rating={5}
                    p5_image="./images/mackbook.jpg"
                />
                
            </div>

            <div className="home__row">
                <Product
                    p1_id="232321"
                    p2_title="Gucci Jackets"
                    p3_price={53.42}
                    p4_rating={4}
                    p5_image="./images/jacket.jpg"
                />

                <Product
                    p1_id="2323231"
                    p2_title="C-Programming"
                    p3_price={20.42}
                    p4_rating={4}
                    p5_image="./images/clang.jpg"
                />

                <Product
                    p1_id="2323231"
                    p2_title="Amazon Alexa"
                    p3_price={80.42}
                    p4_rating={2}
                    p5_image="./images/alexa.jpg"
                />


            </div>
            <div className="home__row">
            <Product
                    p1_id="2323231"
                    p2_title="Apple Watch series 5"
                    p3_price={150.42}
                    p4_rating={5}
                    p5_image="./images/applewatch.jpg"
                />
            </div>


        </div>




    );
}

export default Home
