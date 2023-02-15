import React,{useState} from 'react'
import {BrowserRouter,Routes,Route, } from "react-router-dom"
import Login from  "./Login"
import Post from "./Post"
import Home from './Home'
import { NavLink } from 'react-router-dom'
import {getAuth,signOut} from "firebase/auth"

import "./Firebase"
const App = () => {
  const [isAuth,setIsAuth] = useState(false)
  const auth = getAuth();
 
  // Logout code in react
 const Logout = () =>{
  signOut(auth).then(()=>{
      localStorage.clear();
      window.location.pathname ="/"
  })
  }
  return (
    <>
      <BrowserRouter>
      <div className="nav">
      <NavLink to='/'><li>Home</li></NavLink>
      <NavLink to='/Post'><li>Post</li></NavLink>
      {
        !isAuth ?(<NavLink to='/Login'><li>Login</li></NavLink>): (<NavLink onClick={Logout} ><li>Logout</li></NavLink>)
      }
    </div>
    
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/Login' element={<Login setIsAuth={setIsAuth}/>}></Route>
        <Route path='/Post' element={<Post/>} ></Route>
       
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App