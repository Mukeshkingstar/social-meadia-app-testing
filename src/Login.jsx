import React from 'react'
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
const Login = ({setIsAuth}) => {
  // Auth And Auth Provider
const auth = getAuth();
const provider = new GoogleAuthProvider();
const navigate = useNavigate();
  //    Login code in react
const SignIn = () =>{
  signInWithPopup(auth,provider).then((result)=>{
      localStorage.setItem("isAuth",true)
      setIsAuth(true)
      navigate("/")

  })
}
  return (
    <>
    <div className="login">
    <center>
    <button onClick={SignIn}>Login With Google</button>
    </center>
    </div>
    </>
  )
}

export default Login