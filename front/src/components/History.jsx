import { List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const History = () => {
    const user = useSelector((state)=>state.user)
    const [orders, setOrders] = useState([{totalOrderPrice: 15999, paymenMethod: "card", sendingAdress: '55-1602'}, {totalOrderPrice: 11999, paymenMethod: "cash", sendingAdress: '66-2454'}])
    useEffect(()=>{
        axios
            .get(`http://localhost:3001/api/orders/${user.id}`)
            .then(res=>{console.log(res.data)
            setOrders(res.data)})
    }, [])

  return (
    <Box margin={3} sx >
        <List subheader='History of Orders'>
            {orders.map((order, i)=>{
                return  <ListItem divider={true}>
                            <ListItemText>
                                {`${user.firstName} ${user.lastName}`}
                            </ListItemText>
                            <ListItemText>
                                {`${order.totalOrderPrice}$`}
                            </ListItemText>
                            <ListItemText>
                                {order.paymenMethod}
                            </ListItemText>
                            <ListItemText>
                                {order.sendingAdress}
                            </ListItemText>
                        </ListItem>
            })}
        </List>
    </Box>
  )
}

export default History