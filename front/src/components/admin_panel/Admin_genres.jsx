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
    const remove_genre=(genreID,genreName)=>{
        axios.delete("http://localhost:3001/api/genres",genreID)
        .then((data)=>{
            if(data.status===404)alert("The selected genre wasn't finded")
            alert(`The genre ${genreName} was deleted`)})
    }
    const edit_genre=(genreID,newGenreName)=>{
        axios.put(`http://localhost:3001/api/genres/${genreID}`,{genre:newGenreName})
        .then((data)=>{
            if(data.status===404) alert('syntax error')
            alert(`The name genre was changed to "${newGenreName}"`)})
    }
    const add_genre=(genreName)=>{
        axios.create(`http://localhost:3001/api/genres`,{genre:genreName})
        .then((data)=>{
            if(data.status===404)alert('syntax error')
            alert(`The genre ${genreName} was created`)
        })
    }
    return(
        <>
        <Navbar/>
        <Stack spacing={4} >
            <Button onClick={()=>{add_genre("TEST")}} >ADD</Button>
        {
        genres.map((genre,id)=>{
           return (<li key={id}>
                {genre.genre}
            <ButtonGroup size='small'>
                <br/>
                <Button onClick={()=>{edit_genre(genre.id,genre.genre)}} >EDIT</Button>
                <Button color='error' onClick={()=>{remove_genre(genre.id,"TEST")}} >REMOVE</Button>
            </ButtonGroup>
            </li>)
        })}
        </Stack>
        Hola
        </>
    )
}

export default Admin_genres;