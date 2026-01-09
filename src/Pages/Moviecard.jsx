import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect,useState} from "react"
import { addtoFavourite, removetoFavourite } from "../store/favouritesSlice"
import {getMovies} from '../api/omdbApi'

const PLACEHOLDER_POSTER = 'https://via.placeholder.com/400x600?text=No+Poster'

const Moviecard=()=>{
 
     const {imdbID}=useParams() 
     const dispatch=useDispatch()   
     const isfavorite=useSelector(state=>state.favourites.some(fav=>fav.imdbID===imdbID))

     const[movie,setMovie]=useState(null)
     const[isLoading,setLoading]=useState(true)
     const[error,setError]=useState(null)


        useEffect(()=>{
           const fetchDetails=async()=>{
                setLoading(true)
                setError(null)
                try{
                    const data=await  getMovies(imdbID)
                    setMovie(data)
                }catch(error){
                    setError(error.message)
                }finally{
                    setLoading(false)
                }
            }
            fetchDetails()
        },[imdbID])
     
     
        const handletoToggles=()=>{
        if(movie){
            if(isfavorite){
               dispatch(removetoFavourite(imdbID))
            }
            else{
              dispatch(addtoFavourite({
                imdbID:movie.imdbID,
                Title:movie.Title,
                Year:movie.Year,
                Type:movie.Type,
                Poster:movie.Poster
            }))
            }
        }
     }
      const favbutton=isfavorite?'bg-red-500':'bg-green-500'

      if(isLoading)return <div className="text-center text-white text-2xl mt-20">Loading MovieDetails...</div>
      if(error)return <div className="text-center text-white text-2xl mt-20">Error:{error}</div>
      if(!movie)return <div className="text-center text-white text-2xl mt-20">MovieDetails are not Found..</div>
     return(
     
        <div className="text-white p-6 rounded-lg shadow-2xl bg-gray-800 my-8  mx-30 my-15">
            <div className="flex flex-col lg:flex-row items-center justify-center grow m-10 gap-10">
             <div className="flex-shrink-0">
                 <img src={movie.Poster!=='N/A'? movie.Poster: PLACEHOLDER_POSTER} alt={`${movie.Title} poster`} className="w-full h-auto rounded-lg shadow-lg"/>
                    <button onClick={handletoToggles} className={`${favbutton} p-2 sm:p-5 mt-5 w-full rounded-lg text-sm sm:text-lg font-bold`}>{isfavorite?'★ Remove From Favorite':'☆  Add To Favourite'}</button>
             </div>
             <div>
                  <div>
                     <p className="text-violet-700 text-3xl font-bold mt-2"><span>{movie.Title}</span></p>
                     <p className="text-xl mt-2 text-blue-400 text-semibold border-b-2 mb-5 pb-5 border-gray-500"><span>{movie.Year}</span> | <span>{movie.Type}</span> | <span>{movie.Runtime}</span></p>
                 </div>
                  <div className="text-bold text-lg xl:text-xl  border-b-2 mb-5 pb-5 border-gray-500 ">
                      <p>{movie.Plot}</p>
                  </div>
                   <div className="flex flex-col sm:flex-row justify-between  border-b-2 mb-5 pb-5 border-gray-500">
                       <div className=" text-lg">
                         <p><b>Released Date:</b> <span className="text-gray-400 font-semibold">{movie.Released}</span></p>
                         <p className="mt-5 mb-5"><b>Genre:</b> <span className="text-gray-400 font-semibold">{movie.Genre}</span></p>
                         <p><b>Director:</b> <span className="text-gray-400 font-semibold">{movie.Director}</span></p>
                       </div>
                       <div className="text-lg">
                         <p><b>Writer:</b> <span className="text-gray-400 font-semibold">{movie.Writer}</span></p>
                         <p className="mt-5 mb-5"><b>Actors:</b> <span className="text-gray-400 font-semibold">{movie.Actors}</span></p>
                         <p><b>Language:</b> <span className="text-gray-400 font-semibold">{movie.Language}</span></p>
                       </div>
                  </div>
             
               <div >
                   <h3 className="text-2xl font-bold mb-3">Ratings</h3>
                        {movie.Ratings && movie.Ratings.map((rating, index) => (
                            <p key={index}><strong className="font-semibold">{rating.Source}:</strong>  <span className="text-yellow-500 font-semibold">{rating.Value}</span></p>
                        ))}
                </div>
             </div>
             </div>
           </div>
     )
}
export default Moviecard