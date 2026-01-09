import axios from 'axios'

//Fetching the Url 
const  API_URL=' https://www.omdbapi.com/'
const API_KEY = '90cbee7a'

//creating the Url based on the search and type 

const omdbApi=axios.create({
    baseURL:API_URL,
    params:{
        apikey:API_KEY,}
})

//search field for define the title,type,page

export const searchMovies =  async(query,page=1,type='all')  =>{
           const params={
            s:query,
            page:page
           }
           if(type!=='all'){
            params.type=type
           }
           try{
             const response=await omdbApi.get('/',{params})
             const data=await response.data
             console.log(data)
             if(response.data==='False'){
                return {  Search:[],totalResult:'0' ,Error:data.Error||'movies are not found' }
             }
             return data
           }catch(error){
            throw new Error('failed to fetch the data')
           }    
}

//getting the movie details 

export const getMovies= async(imdbID)=>{
    const params={
        i:imdbID,
        plot:'full'
    }
    try{
        const response=await omdbApi.get('/',{params})
        const data=await response.data
        if(data.Response==='False'){
            throw new Error('Movie details not found ')
        }
        return data
    }catch(error){
        throw new Error('Failed to fetch the data')
    }
}

