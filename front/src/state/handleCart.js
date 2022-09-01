
import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    open: false,
    step:0,
    address:"",
    reciever:"",
    paymentMethod:"",
    totalPrice: 0
}

const handleCart = createSlice({
    name: 'toggleCart',
    initialState,
    
    reducers:{
        toggleCart: (state)=> {state.open= !state.open},
        next: (state)=> { state.step =  state.step +1},
        back: (state)=> { state.step= state.step -1 },
        address: (state,action)=> { state.address= action.payload },
        reciever: (state,action)=> { state.reciever= action.payload },
        paymentMethod: (state,action)=> {state.paymentMethod = action.payload},
        totalPrice: (state,action)=> {state.totalPrice = action.payload},
        reset:(state)=> { state.step = 0; state.address=""; state.reciever="";state.paymentMethod=""; state.totalPrice=0 },

    }
})

export const {toggleCart, next, back, reset, address, reciever, paymentMethod,totalPrice} = handleCart.actions
export default handleCart.reducer
