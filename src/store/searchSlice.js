import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {searchMovies }from "../api/omdbApi"

//for fetching the searchMovie api field
//createAsyncThunk is used for async key operation
//rejectwithvalue is used for value throw the error when implement the specific action

export const fetchMoviesAsync=createAsyncThunk('/search/fetchmovies',
   async({query,page,type},{rejectWithValue})=>{
    if(!query) return {results:[],totalResults:0}
    try{
        const data=await searchMovies(query,page,type)
        if(data.Error) return rejectWithValue(data.Error)
            return{
             results:data.Search||[],
             totalResults:parseInt(data.totalResults,10)||0
        }
    }catch(error){
        return   rejectWithValue(error.message)
    }
   }


)
//create the state for specific action

export const searchSlice=createSlice({
    name:'search',
    initialState:{
        query:'',
        page:1,
        type:'all',
        loading:false,
        error:null,
        results:[],
        totalResults:0
    },
    reducers:{
      
        setType:(state,action)=>{
            state.type=action.payload
        },
        setPage:(state,action)=>{
             state.page=action.payload
        },
        setQuery:(state,action)=>{
            state.query=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchMoviesAsync.pending, (state)=>{state.loading=true; state.error=null})
        .addCase(fetchMoviesAsync.fulfilled,
            (state,action)=>{
                state.loading=false
                state.results=action.payload.results
                state.totalResults=action.payload.totalResults
            }
        )
        .addCase(fetchMoviesAsync.rejected,
            (state,action)=>{
                state.loading=false
                state.error=action.payload||'failed to fetch the movie'
                state.results=[]
                state.totalResults=0
            }
        )
    }

})
export const{setQuery,setPage,setType}=searchSlice.actions
export default searchSlice.reducer