import React, { useState, useEffect } from 'react'
import "./Feed.css"
import Header from "./Header"
import Post from "./Post"
import datab from "./firebase"

import Tweetbox from "./Tweetbox"

function Feed() {
    // let postiandsetposti = useState([])
    // let [a , b] = useState([])
    const [posts, setPosts] = useState([])

    // function fnforuseEffect() {
    //     datab.collection("postss").onSnapshot(snapi => {
    //         //    let a = postiandsetposti[1]
    //         //    a(snapi.docs.map(doc => doc.data()))
    //         b(snapi.docs.map(doc => doc.data()))
    //     })

    // }

    // let b = postiandsetposti[0]


    // useEffect(()=>{

    // } , [])
    // useEffect(fnforuseEffect(), [])
    // useEffect( , [])
    // as callbackfn as a parameter ko apnko uss function meh hi define krna pdta hai as hai as apn orr koi pre-function ko as a call-back-parameter input mtlb pass nhi kara skteh hai.
    useEffect(()=>{
        datab.collection('postss').onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc => doc.data()))  
            // setPosts(snapshot.docs.map())
        })
    } , [])


    return <div className="feed">
        <Header />
        <Tweetbox />

        {/* // {b.map(post =>( */}
        {/* {a.map(post => (
            <Post
                title={post.title}
                acProfile={post.acProfile}
                likes={post.likes}
                image={post.image}
                comments={post.comments}
                date={post.data}
                shares={post.shares}
                verified={post.verified}
                retweets={post.retweets}


            />
        ))} */}

        {posts.map(post =>(
            <Post
            title={post.title}
            acProfile={post.acProfile}
            likes={post.likes}
            image={post.image}
            comments={post.comments}
            date={post.data}
            shares={post.shares}
            verified={post.verified}
            retweets={post.retweets}         
            />
        ))}
        {/* yaha react meh apn workbox ko simply parenthesis() meh bhi likh skteh hai and mostly react apn work-box ko parenthesis() meh hi likhteh hai. */}

       <Post 
        title="Bill Gates" 
        acProfile="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" 
        likes="34" 
        image="https://pbs.twimg.com/card_img/1308737898481463296/GUfqo7Cw?format=jpg&name=small" 
        comments="231" 
        date="3 oct" 
        shares="4.3K" 
        verified
        retweets="101"/>
        <Post 
        title="BBC Breaking News" 
        acProfile="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" 
        likes="340"
        image="https://pbs.twimg.com/media/Ejk4zf5X0AUYa7g?format=jpg&name=small" 
        comments="131"
        date="10 nov" 
        shares="1.3K" 
        retweets="992"/>
        <Post 
        title="BBC Breaking News" 
        acProfile="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" 
        likes="340"
        image="https://pbs.twimg.com/card_img/1311322020026576896/FVRM6b0W?format=jpg&name=small" 
        comments="131"
        date="10 nov" 
        shares="1.3K" 
        retweets="992"/>
        <Post title="Tim Cook" acProfile="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg" likes="34K" comments="881" date="1 oct" shares="12.3K" retweets="10K"/>
        <Post/>
        <Post/>


    </div>
}

export default Feed
