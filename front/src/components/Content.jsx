import Grid  from '../commons/Grid'
import React from 'react'
import Sidebar from '../commons/Sidebar'
import fakeData from '../fakeData'

const Content = () => {
  return (
    <div id='content'>
      <Sidebar/>
      <Grid games={fakeData}/>
    </div>
  )
}

export default Content