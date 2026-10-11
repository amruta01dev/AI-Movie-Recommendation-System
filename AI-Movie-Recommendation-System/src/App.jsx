import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import SearchMovie from './components/SearchMovie'
import MovieCards from './components/MovieCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SearchMovie></SearchMovie>
    <MovieCards></MovieCards>
    </>
  )
}

export default App
