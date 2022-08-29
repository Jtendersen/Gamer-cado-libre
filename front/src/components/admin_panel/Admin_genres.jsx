import { Button, ButtonGroup, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from '../../commons/Navbar'

const Admin_genres=()=>{
    const [genres,setGenre]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/api/genres").then(data=>{
        console.log(data.data)
        setGenre(data.data)})
    },[])
    const remove_genre=(genre)=>{
        axios.delete("http://localhost:3001/api/genres")
    }
    return(
        <>
        <Navbar/>
        <Stack spacing={4} >
            <Button>ADD</Button>
        {
        genres.map((genre,id)=>{
           return (<li key={id}>
                {genre.genre}
            <ButtonGroup size='small'>
                <br/>
                <Button>EDIT</Button>
                <Button color='error' onClick={()=>remove_genre} >REMOVE</Button>
            </ButtonGroup>
            </li>)
        })}
        </Stack>
        Hola
        </>
    )
}

export default Admin_genres;