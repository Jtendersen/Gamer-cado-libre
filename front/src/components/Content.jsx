import Grid  from '../commons/Grid'
import React, { useEffect } from 'react'
import Sidebar from '../commons/Sidebar'
import fakeData from '../fakeData'
const axios = require('axios')

const Content = () => {

  //const [games, setGames] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3001/api/products/allProducts').then((games)=>{console.log(games)})
  })

  return (
    <div id='content'>
      <Sidebar/>
      <div id='grid'>
        <Grid games={fakeData}/>
      </div>
    </div>
  )
}

export default Content