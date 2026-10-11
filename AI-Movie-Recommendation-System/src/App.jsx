import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SearchMovie from './components/SearchMovie'
import MovieCards from './components/MovieCards'

function App() {
  const [searchMovieResult, setSearchMovieResult] = useState([]);

  return (
    <>
    <SearchMovie setSearchMovieResult={setSearchMovieResult}></SearchMovie>
    <MovieCards searchMovieResult = {searchMovieResult}></MovieCards>
    </>
  )
}

export default App
