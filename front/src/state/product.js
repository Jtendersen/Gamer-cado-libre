import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {open: false, game: {}}

const handleProduct = createSlice({
    name: 'Product',
    initialState,
    
    reducers:{
        toggleProduct: (state)=> {state.open= !state.open},
        productData: (state, action)=> {state.game = action.payload}
    }
})

export const {toggleProduct, productData} = handleProduct.actions
export default handleProduct.reducer
