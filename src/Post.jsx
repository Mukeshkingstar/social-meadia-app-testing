import React, { useState } from 'react'
import {addDoc,collection} from "firebase/firestore"
import {db} from "./Firebase"
import { getAuth} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Post = () => {
  const [title ,setTitle] = useState("")
  const [post ,setPost] = useState("")
  const PostCollection = collection(db,"Post")
  const auth = getAuth()
  const navigate = useNavigate()
  const CreatePost = async () =>{
 await addDoc(PostCollection,{title,post,author : {name:auth.currentUser.displayName,id:auth.currentUser.uid}})
navigate("/")
  };
  return (
 <center>
    <div className="box">
     <h1>Create A Post</h1>
     <input type="text" placeholder='Title' onChange={(event)=>{setTitle(event.target.value)}}/> <br/>
     <input type="post" placeholder='What is your Mind' onChange={(event)=>{setPost(event.target.value)}}/> <br/>
     <button onClick={CreatePost}>Post</button>
   </div>
 </center>
  )
}

export default Post