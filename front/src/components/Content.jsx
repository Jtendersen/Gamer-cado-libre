import Grid  from '../commons/Grid'
import React, { /* useState */ } from 'react'
import Sidebar from '../commons/Sidebar'
import fakeData from '../fakeData'

const Content = () => {

  //const [games, setGames] = useState([])
  //axios.get('/api/products).then((games)=>{setGames(games)})

  return (
    <div id='content'>
      <Sidebar/>
      <Grid games={fakeData}/>
    </div>
  )
}

export default Content