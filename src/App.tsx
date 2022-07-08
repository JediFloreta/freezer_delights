import { useState } from 'react'
import './App.css'
import CakeCarousel from './components/CakeCarousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to the Freezer! Pick a cheesecake...</h1>
      <CakeCarousel />
    </div>
  )
}

export default App
