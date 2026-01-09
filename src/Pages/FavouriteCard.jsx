import { useSelector } from "react-redux"
import MovieDetailsCard from "../components/MovieDetailsCard"


const FavouriteCard=()=>{
    const favourite=useSelector(state=>state.favourites)
        return(
            <div>
                <div className="text-center text-white mt-5 font-bold text-2xl">
                    <h2>My Favourite Movies ({favourite.length})</h2>
                </div>
                {favourite.length===0?(
                    <p className="text-center text-violet-400 mt-5 font-semibold text-xl">You haven't added any movies to your favorites yet...start Searching!</p>
                ):(
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 m-10">
                       {favourite.map(movie=>
                       (<MovieDetailsCard key={movie.imdbID} movie={movie}/>))}

                    </div>

                )}
            </div>
        )
}
export default FavouriteCard