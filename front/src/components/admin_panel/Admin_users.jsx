import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from "../../commons/Navbar"
import { Users } from "../Users"

const Admin_users = () => {

  const [user, setUser] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:3000/api/users/allUsers")
          .then(users=>{setUser(users.data)})
  }, [])

  return (
    <>
    <Navbar/>
    <Users users = {user}/>
</>
  )
}



export default Admin_users