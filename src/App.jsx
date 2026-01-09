import Header from './components/Header'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Searchcard from './Pages/Searchcard'
import Moviecard from './Pages/Moviecard'
import FavouriteCard from './Pages/FavouriteCard'
function App() {

 
  
  return (
    <> 
    <BrowserRouter>
      <Header/>
       <main>
        <Routes>
          <Route path="/" element={<Searchcard/>}/>
          <Route path="/movie/:imdbID" element={<Moviecard/>}/>
          <Route path="/favourites" element={<FavouriteCard/>}/>
       </Routes>
     </main>
    </BrowserRouter>
    </>
  )
}

export default App
