import { Button, ButtonGroup, ListItem } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom';
import Navbar from '../../commons/Navbar'
import Admin_genres from './Admin_genres';

const Admin_panel=()=>{
    const navigate = useNavigate()
  const sendTo = (string)=>{
    navigate(`/${string}`)
  }
    return(
        <>
        <Navbar/>
        <Stack>
        <ButtonGroup>
            <Button onClick={()=>sendTo('admin/genres')}>
                Genres
            </Button>
            <Button onClick={()=>sendTo('admin/allUsers')}>
                Users
            </Button>

        </ButtonGroup>
        </Stack>
        
        </>
    )
}

export default Admin_panel;