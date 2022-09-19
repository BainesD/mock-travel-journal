import React from "react";
import Post from "./Post";
import Header from "./Header";
import Data from "../data"

export default function App(){
const posts = Data.map(post=> (
<Post 
key={post.id}
{...post}
/>
))
    return(
        <>
        <Header/>
        <section className="posts-list">{posts}</section>
        </>
    )
}