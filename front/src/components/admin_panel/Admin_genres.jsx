import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../../commons/Navbar'

const Admin_genres=()=>{
    const [genre,setGenre]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/api/genres").then(data=>{
        console.log(data.data)    
        setGenre(data.data)})
    },{})
    console.log(genre)
    return(
        <>
        <Navbar/>
        Hola
        </>
    )
}

export default Admin_genres;