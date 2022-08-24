import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux"; 
import { useNavigate } from "react-router";
import {sendGoogleLoginRequest} from "../state/user"




const GoogleLogin = () => {

  const user = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
    dispatch(sendGoogleLoginRequest({name:userObject.name, email: userObject.email}))
    user && navigate('/')
  
  }
  


  useEffect(() => {
    /* global google */
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