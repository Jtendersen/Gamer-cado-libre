import Grid  from '../commons/Grid'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Content = () => {

  const [games, setGames] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/api/products/allProducts').then((games)=>{setGames(games.data)})
  },[])

  return (
      <div id='grid'>
        <Grid games={games}/>
      </div>
  )
}

export default Content