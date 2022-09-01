import { Box, Divider, FormControl, Stack, Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input_handler from "../../hooks/inputHandler";
import { add_genre, edit_genre, get_genres, remove_genre } from "../../state/genre";
import Grid_genres from "./Admin_Grid_genres";
import Input_base from "../../commons/Base_input";


const Admin_genres=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{dispatch(get_genres())},[])
    const genres=useSelector((state)=>state.genre)
    return(
        <Box boxShadow={3} >
            <Divider orientation='vertical' />
    
        <br/>
            <Container>
        <FormControl >
            <Input_base/>
            <Stack direction='row' spacing={2} margin={4} >

            </Stack>
            <Stack direction='row' flexWrap={'wrap'} spacing ={4}
            divider={<Divider orientation="vertical" flexItem />}
            alignItems="center"
            justifyContent="space-between"

            >
                <br />
                <Grid_genres/>
     
        </Stack>
        </FormControl>
        </Container>
        </Box>
    )
}

export default Admin_genres;