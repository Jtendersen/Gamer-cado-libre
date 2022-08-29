import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ComplexGrid from './admin_panel/Admin_grid'
import { Button, Grid, TextField } from '@mui/material'
import { Box } from '@mui/system'

export const Products = () => {

  let addView;
  const [add, setAdd] = useState(false)
  const [products, setProducts] = useState([])
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [urlId, setUrlId] = useState('')


  const handleDescription = function (){

  }
  const handleName = function (){

  }
  const handlePrice = function (){

  }
  const handleUrlId = function (){

  }
  const handleAdd = function (){
    if(add) setAdd(true)
    else setAdd(false)
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/api/products/allProducts').then((products)=>{setProducts(products.data)})
  },[])

  if(add){
    addView = <div id='addButton'><Button onClick={handleAdd}>Add Product</Button></div>
  }else{
    addView = <div id='viewAdded'>
                <Box
                  component="form"
                >
                  <Grid container margin={2}>
                    <Grid item sm={2}>
                      <TextField
                        required
                        fullWidth
                        label='name'
                        onChange={handleName}
                      >

                      </TextField>
                    </Grid>
                    <Grid item sm={6}>
                      <TextField
                        required
                        fullWidth
                        label='Description'
                        defaultValue={'New Game Description'}
                        onChange={handleDescription}
                      />
                    </Grid>
                  </Grid>
                  <Grid container margin={2}>
                  <Grid item sm={2}>
                      <TextField
                        required
                        fullWidth
                        label='Price'
                        onChange={handlePrice}
                      />
                    </Grid>
                    
                    <Grid item sm={6}>
                      <TextField
                        required
                        fullWidth
                        label='Image URL'
                        defaultValue={'https://cdn.cloudflare.steamstatic.com/steam/apps/681040/header.jpg?t=1504857051'}
                        onChange={handleUrlId}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                  >
                    Add
                  </Button>
                </Box>
              </div>
  }

  return (
        <>
          {addView}
          <div id='adminGrid'>
              {products.map((product, i)=>{
                return <ComplexGrid product={product} key={i}/>
              })}
          </div>
        </>
  )
}