import {configureStore} from '@reduxjs/toolkit'
import searchSliceReducer from './searchSlice'
import favouritesSliceReducer from './favouritesSlice'

export const store=configureStore({
    reducer:{
       search:searchSliceReducer,
       favourites:favouritesSliceReducer
    }
})