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
  const [urlId, setUrlId] = useState('https://cdn.cloudflare.steamstatic.com/steam/apps/681040/header.jpg?t=1504857051')


  const handleDescription = function (e){
    setDescription(e.target.value)
  }
  const handleName = function (e){
    setName(e.target.value)
  }
  const handlePrice = function (e){
    setPrice(e.target.value)
  }
  const handleUrlId = function (e){
    setUrlId(e.target.value)
  }
  const handleAddProduct = function (e){
    e.preventDefault()
    const newProduct = {name, price, description, urlId }
    if(name == '' || price == '') return alert('Name and Price are inputs does we need')
    else{
    axios.post('http://localhost:3001/api/products', newProduct)
          .then((res)=>{
            if(res.status == 204) alert('The game was added succesfully')
            if(res.status > 399) alert("The game wasn't be added")
          })
    }
  }
  const handleAdd = function (){
    if(add) setAdd(false)
    else setAdd(true)
  }

  useEffect(()=>{
    axios.get('http://localhost:3001/api/products/allProducts').then((products)=>{setProducts(products.data)})
  },[])

  if(add == false){
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
                        fullWidth
                        label='Description (not required)'
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
                        fullWidth
                        label='Image URL (not required)'
                        onChange={handleUrlId}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    onClick={handleAddProduct}
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