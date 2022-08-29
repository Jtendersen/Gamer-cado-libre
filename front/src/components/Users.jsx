import React from 'react'
import ComplexGrid  from './admin_panel/Admin_grid'

export const Users = ({users}) => {
  return (
    <div>
    {users.map((users)=>{
        return <ComplexGrid product = {users}/>
    })}
    </div>
  )
}
