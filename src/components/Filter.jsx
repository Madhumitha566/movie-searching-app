
  const MovieTypes=[
        {
            value:'all',label:'All Types'
        },{
            value:'movie',label:'Movies'
        },{
            value:'series',label:'Series'
        },
      ]

const Filter=({initialType,onhandletype})=>{
       return(
        <div className=" p-2 lg:p-4 text-lg">
            <label htmlFor="movie-filter " className="text-white">Filter by Types:  </label>
            <select id="movie-filter" value={initialType} onChange={(e)=>onhandletype(e.target.value)} className="text-white bg-gray-600 rounded-lg p-2">
                {MovieTypes.map((type)=>(
                  <option key={type.value} value={type.value} >
                       {type.label}
                  </option>
                ))}
            </select>
        </div>
       )
 
      
}
export default Filter