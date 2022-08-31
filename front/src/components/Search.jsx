import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Footer from '../commons/Footer'
import Grid from '../commons/Grid'
import Navbar from '../commons/Navbar'
import Cart from "./Cart/Cart";

const Search = () => {

    const {pathname} = useLocation()
    const [games, setGames] = useState([])
    useEffect(()=>{
        try {
            axios.get(`http://localhost:3001/api/products/search/${pathname.split('/')[3]}`)
            .then((games)=>{setGames(games.data)})
            .then(()=>{console.log(games)})
        } catch (error) {
            console.log(error)
        }
        
    },[])

  return (
    <>
        <Navbar/>
        <Cart/>
        <div id="genre">
        <Grid games={games}/>
        </div>
        <Footer/>
    </>
  )
}

export default Search