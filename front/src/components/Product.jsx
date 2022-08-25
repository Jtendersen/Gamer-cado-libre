import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router'
import Footer from '../commons/Footer'
import Navbar from '../commons/Navbar'
import { Button } from '@mui/material';
import axios from 'axios';
const Product = () => {
    const [value, setValue] = React.useState(null);
    const params = useLocation()
    const [game, setGame] = React.useState({})
    React.useEffect(()=>{
        axios.get(`http://localhost:3001/api/products/${params.pathname.split('/')[2]}`).then((game)=>{setGame(game.data)})
        console.log(game)
    },[])
/* 
if(login){
    permitir valoracion
}
*/
    const handleCart = (e)=>{
        //pedido a axios para agregar al carrito
        alert('The videogame was succesfully added at the cart')
    }

  return (
    <>
        <Navbar/>
        <div id='product'>
            <div className='content'>
                <div id='img'>
                    <img src="" alt="Imagen del juego" />
                </div>
                <div id='gameInfo'>
                    <h1>{game.name}</h1>
                        <Box sx={{'& > legend': { mt: 2 }}}>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {setValue(newValue)}}
                            />
                        </Box>
                    <h2>$35</h2>
                    <Button variant="contained" onClick={handleCart}>Add to cart</Button>
                    <div id='digitalText'>
                        <Typography color="text.secondary">Este producto se vende en formato digital, el stock es ilimitado</Typography >                
                    </div>
                </div>
            </div>
            <div id='text'>
                <h4>Descripcion:</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error a sequi recusandae! Ea deserunt cupiditate ullam tenetur officia quia ad eveniet aut sunt impedit autem neque accusamus enim saepe eum veritatis, quas exercitationem quae! Quam aliquam eum tenetur repellat pariatur maiores asperiores, provident vitae ipsum, similique corporis deleniti rerum, libero earum? Sed cupiditate similique voluptate facilis? Vitae culpa magnam aperiam, distinctio quia modi repellendus doloremque similique deserunt, commodi aliquid expedita a, odio voluptates voluptate cupiditate dolor. Ea autem earum fugiat!</p>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Product



