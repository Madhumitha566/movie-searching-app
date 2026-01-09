
const Pagination=({currentpage, totalResults,resultsperpage,onchangepage})=>{
 
    const totalpages=Math.ceil(totalResults/resultsperpage)

    if( totalResults<=resultsperpage || totalpages<=1)return null

    const handleprev=()=>{
          if(currentpage>1){
            onchangepage(currentpage-1)
          }
    }
    const handlenext=()=>{
        if(currentpage<totalpages){
            onchangepage(currentpage+1)
        }

    }
   const getPages=()=>{
    const pages=[]
    const MaxPageNumbers=5
    const startingPage=Math.max(1,currentpage-(Math.floor(MaxPageNumbers/2)))
    const EndingPage=Math.min(totalpages,(startingPage+MaxPageNumbers-1))

    for(let i=startingPage;i<=EndingPage;i++){
        pages.push(i)
    }
    return pages
}
const pagesNumbers=getPages()
const baseButtonClasses = "px-2 py-2 m-2 md:px-5 md:py-4 md:m-3 rounded-lg text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
    return(
        <div className="flex m-5 text-white">
            <button onClick={handleprev}  disabled={currentpage === 1} className={`${baseButtonClasses} bg-gray-700 hover:bg-gray-600`}>
                 &laquo; Previous
            </button>
            {pagesNumbers.map(
                page=>(<button key={page} onClick={()=>onchangepage(page)} className={`${baseButtonClasses} ${page === currentpage ? "bg-blue-600 hover:bg-blue-500" : "bg-gray-700 hover:bg-gray-600"}`}>
                    {page}
                </button>)
            )}
            <button onClick={handlenext} disabled={currentpage === totalpages} className={`${baseButtonClasses} bg-gray-700 hover:bg-gray-600`}>
                 Next &raquo;
            </button>
        </div>
    )

}
export default Pagination