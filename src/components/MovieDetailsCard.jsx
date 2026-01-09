import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoFavourite,removetoFavourite} from '../store/favouritesSlice';

const PLACEHOLDER_POSTER = 'https://via.placeholder.com/300x450?text=No+Poster';

const MovieDetailsCard = ({ movie }) => {
    if (!movie || !movie.imdbID) {
        return null; 
    }

    const dispatch = useDispatch();

    const favorite = useSelector(state => state.favourites.some(fav => fav.imdbID === movie.imdbID));

    const toggleFavorite = (e) => {
        e.preventDefault(); 
    
        
        if (favorite) {
            dispatch(removetoFavourite(movie.imdbID));
        } else {
            dispatch(addtoFavourite(movie)); 
        }
    };

    const favButtonClasses = favorite ? "bg-red-800 hover:bg-red-800" : "bg-violet-950 hover:bg-violet-900";

    return (
        <div className='bg-gray-700 rounded-xl  transform hover:scale-105 transition-transform duration-300'>
            
            <Link to={`/movie/${movie.imdbID}`}>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : PLACEHOLDER_POSTER}
                    alt={`${movie.Title} poster`} className='w-full h-80 object-cover'
                />
            </Link>
            
            <div className='flex flex-col m-5'>
                <h3  className='text-[#EBE8F5] text-lg line-clamp-1' >{movie.Title}</h3>
                <p className='text-[#AFA4C3] text-md'>{movie.Year} | {movie.Type}</p>
                <button
                    onClick={toggleFavorite}
                    className={` ${favButtonClasses} text-white  mt-2 p-3 rounded-lg` }
                >
                    {favorite ? '★ In Favorites' : '☆ Add to Favorites'}
                </button>
            </div>
        </div>
    );
};

export default MovieDetailsCard;