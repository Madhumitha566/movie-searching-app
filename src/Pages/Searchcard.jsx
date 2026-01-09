import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { fetchMoviesAsync,setQuery,setPage,setType } from "../store/SearchSlice"
import SearchBar from "../components/SearchBar"
import Filter from "../components/Filter"
import MovieDetailsCard from "../components/MovieDetailsCard"
import Pagination from "../components/Pagination"


const Result_per_page=10


const Searchcard=()=>{
           const dispatch=useDispatch()
           const [searchparams,setsearchParams]=useSearchParams()

           const{query,type,page,loading,error,results,totalResults}=useSelector(state=>state.search)

           useEffect(()=>{
            setsearchParams({q:query,page:page.toString(),t:type})
            dispatch(fetchMoviesAsync({query,page,type}))
           },[query,page,type,setsearchParams,dispatch])

           const handlesearchsubmit=(newQuery)=>{
            dispatch(setQuery(newQuery))
            dispatch(setPage(1))
           }

           const handlepagechange=(newpage)=>{
            dispatch(setPage(newpage))
            window.scrollTo({top:0,behavior:'smooth'})
           }
           const handletypechange=(newtype)=>{
            dispatch(setType(newtype))
            dispatch(setPage(1))
           }
           return(
            <div className>
              <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-around p-10">
                <SearchBar initialQuery={query}  onSubmit={handlesearchsubmit}/>
                <Filter initialType={type} onhandletype={handletypechange}/>
               </div>
                 {loading && <p className="text-center text-white text-3xl">Loading movies...</p>}
                {error&&<p>Error:{error}</p>}
               
                 {!loading&&!error&&(
                   <>
                    {results.length>0?(
                       <h2 className="text-2xl text-center text-white">
                           Results:  <span className="text-violet-400">{query} </span>  ({totalResults} Found)
                       </h2>
                   ):(
                        <p className="text-2xl text-center text-white">No results found....</p>
                    )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-10 rounded-xl gap-10  shadow-xl p-5 bg-gray-800">
                    {results.map(movie=>(
                         <MovieDetailsCard key={movie.imdbID} movie={movie}/>
                     ))}
                   </div>
                 <div className="flex justify-center items-center">
                   <Pagination currentpage={page} 
                   totalResults={totalResults}
                   resultsperpage={Result_per_page}
                   onchangepage={handlepagechange}
                   />
                 </div>
                 </>
                )}
       </div>
    )
}
export default Searchcard