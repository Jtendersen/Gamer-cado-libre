import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux"; 
import {sendLoginRequest} from "../state/user"
import {useNavigate} from 'react-router-dom'



const GoogleLogin = () => {

 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector((state)=>state.user)
  

  async function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
   
  
    dispatch(sendLoginRequest(
      {
        google:true, 
        firstName:userObject.given_name,
        lastName:userObject.family_name,
         email: userObject.email
        }))
    await user 
    navigate('/')
  
  }
  


  useEffect(() => {
    /* global google */
    google.accounts&& 
google.accounts.id.initialize({
      client_id:
        "698328146860-ujmtga56fln93m54l19sir3q539718n7.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size:"large"

    });
  }, []);
  return (
    <div>
      <div id="signInDiv"></div>
    </div>
  );
};

export default GoogleLogin;