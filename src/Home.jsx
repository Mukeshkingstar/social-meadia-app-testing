import React, { useEffect, useState } from 'react'
import { getDocs,collection } from 'firebase/firestore'
import {db} from "./Firebase"
const Home = () => {
    const [postList,setPostList] = useState([])
    const PostCollection = collection(db,"Post")
    useEffect(()=>{
        const getPost = async ()=>{
            const data = await getDocs(PostCollection)
           setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
            
        };
        getPost();
    })
  return (
    <>
   <h1>
    {postList.map((post)=>{
        return <> <center>
        <div className="show-post">
            <h1>{post.title}</h1>
            <p>{post.post}</p>
            <h3>{post.author.name}</h3>
        </div>
        </center>
        </> 
    })}
    </h1> 
    </>
  )
}

export default Home