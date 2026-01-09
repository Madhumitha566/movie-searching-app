import { createSlice } from "@reduxjs/toolkit"
const local_storage_key='favourite_omdb_api'
const favouritesMovie=()=>{
    try{
    const  localData=localStorage.getItem(local_storage_key)
    return localData ?  JSON.parse(localData):[]
    }catch(e){
        return []
    }
}
export const favouritesSlice=createSlice({
    name:'favourites',
    initialState:favouritesMovie(),
    reducers:{
        addtoFavourite:(state,action)=>{
               const movie=action.payload
               if(!state.some(fav=>fav.omdbID===movie.imdbID))
                state.push(movie)
                localStorage.setItem(local_storage_key,JSON.stringify(state))
        },
        removetoFavourite:(state,action)=>{
            const imdbID=action.payload
            const newstate=state.filter(movie=>movie.imdbID!==imdbID)
            localStorage.setItem(local_storage_key,JSON.stringify(newstate))
            return newstate //in this new state will return the remaining fav item list
        }
    }
})
export const {addtoFavourite,removetoFavourite}=favouritesSlice.actions
export default favouritesSlice.reducer