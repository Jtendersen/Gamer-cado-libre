import { List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const History = () => {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/order").then((res) => {
      setOrders(res.data);
    });
  }, []);

  return (
    <Box margin={3}>
      <List subheader="History of Orders">
        {orders.map((order, i) => {
          return (
            <ListItem divider={true} key={i}>
              <ListItemText>
                {`${user.firstName} ${user.lastName}`}
              </ListItemText>
              <ListItemText>{`${order.totalOrderPrice}$`}</ListItemText>
              <ListItemText>{order.paymenMethod}</ListItemText>
              <ListItemText>{order.sendingAdress}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default History;
