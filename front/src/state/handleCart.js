
import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {open: false}

const handleCart = createSlice({
    name: 'toggleCart',
    initialState,
    
    reducers:{
        toggleCart: (state)=> {state.open= !state.open}
    }
})

export const {toggleCart} = handleCart.actions
export default handleCart.reducer
