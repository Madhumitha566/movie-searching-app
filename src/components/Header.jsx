import { Link } from "react-router-dom"

const Header=()=>{
    return(
    <header className=" bg-gray-900 text-white shadow-xl/30 border-b sticky top-0 z-10 border-gray-300">
        <div className="flex justify-between p-10 ">
            <Link to='/'>
               <h1 className="text-lg sm:text-2xl md:text-3xl">
                  Movies Searching App  🎥
               </h1>
            </Link>
            <nav>
                <Link to='/favourites'>
                  <h2 className="text-md sm:text-xl md:text-2xl hover:text-red-300">
                    ★ Favourites
                  </h2>
                </Link>
            </nav>
        </div>
    </header> 
    )
}
export default Header