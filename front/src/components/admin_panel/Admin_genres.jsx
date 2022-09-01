import { Button, ButtonGroup, FormControl, InputLabel, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LongMenu from "../../commons/LongMenu";
import Navbar from '../../commons/Navbar'
import Input_handler from "../../hooks/inputHandler";

const Admin_genres=()=>{

    const [genres,setGenre]=useState([])

    const input_add=Input_handler()
    useEffect(()=>{
        axios.get("http://localhost:3001/api/genres").then(data=>{
        //console.log(data.data)
        setGenre(data.data)})
    },[])
    const remove_genre=(genreID,genreName,i)=>{
        axios.delete(`http://localhost:3001/api/genres/${genreID}`)
        .then((data)=>{
            genres.splice(i,1)
            if(data.status===404)alert("The selected genre wasn't finded")
            alert(`The genre ${genreName} was deleted`)
        })
    }
    const edit_genre=(genreID)=>{
        const input= window.prompt('New name')
        if(!input)return
        //console.log(input)
        axios.put(`http://localhost:3001/api/genres/${genreID}`,{genre:input})
        .then((data)=>{
            if(data.status===404) alert('syntax error')
            alert(`The name genre was changed to "${input}"`)})
    }
    const add_genre=(genreName)=>{
        if(!genreName)return
        axios.post(`http://localhost:3001/api/genres`,{genre:genreName})
        .then((data)=>{
            if(data.status===404)alert('syntax error')
            alert(`The genre ${genreName} created`)
        })
    }
    return(
        <>
        <Navbar/>
        <FormControl >
        <Stack spacing={4} >
            <InputLabel  >ADD NEW GENRE:</InputLabel>
            <TextField fullWidth={false} size='small' onChange={input_add.onChange} value={input_add.value} />
            <Button onClick={()=>{add_genre(input_add.value)}} >ADD</Button>
        {
            genres.map((genre,i)=>{
                return (genre &&
                    <ul key={i}>
                {genre.genre}
            <ButtonGroup size='small'>
                <br/>
                <Button onClick={()=>{edit_genre(genre.id)}} >EDIT</Button>
                <Button color='error' onClick={()=>{remove_genre(genre.id,genre.genre)}} >REMOVE</Button>
            </ButtonGroup>
            
            </ul>)
        })}
        </Stack>
        </FormControl>
        </>
    )
}

export default Admin_genres;