import { createSlice} from '@reduxjs/toolkit'

export const kartSlice=createSlice({
    name:"cartItems",
    initialState:{
        cartItems:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.cartItems.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.cartItems=state.cartItems.filter((item)=>item.id !==action.payload.id)
        }
    }
})

export const {addItems,removeItems} = kartSlice.actions

export default kartSlice.reducer