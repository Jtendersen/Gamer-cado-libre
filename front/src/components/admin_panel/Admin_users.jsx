import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Navbar from "../../commons/Navbar"
import { Users } from "../Users"

const Admin_users = () => {

  const [user, setUser] = useState([])

useEffect(() => {
  axios.get("http://localhost:3000/api/users/allUsers")
  .then(users=>{
setUser(users)
  })
}, [])

  return (
    <>
    <Navbar/>
    <Users users = {user}/>
</>
  )
}



export default Admin_users