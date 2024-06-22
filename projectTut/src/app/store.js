import { configureStore } from '@reduxjs/toolkit'
import kartSlice from './slices/kartSlice'

export const store = configureStore({
    reducer:{
        cart:kartSlice
    }
})