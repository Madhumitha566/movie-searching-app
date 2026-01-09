import { useState } from "react"

const SearchBar=({initialQuery, onSubmit})=>{
    
       const[searchvalue,setSearchvalue]=useState(initialQuery) 

       const handletosubmit=(e)=>{
              e.preventDefault() 
              if(searchvalue.trim()){
                onSubmit(searchvalue.trim())
              }
       }
       return(
        <form onSubmit={handletosubmit} className="flex  gap-5">
            <input type="text"
            placeholder="search movies,series..."
            onChange={e=>setSearchvalue(e.target.value)}
            value={searchvalue} className=" w-96 border text-gray-200 bg-gray-700 rounded-xl p-2 p-4 border text-lg border-gray-600"
            />
            <button type="submit" className="rounded-xl bg-blue-800  p-4 text-white font-bold">
               Search
            </button>
        </form>
       )   
}
export default SearchBar