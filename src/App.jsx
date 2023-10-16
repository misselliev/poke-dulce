
import './App.css'
import Navigation from './Routes'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Navigation />
    </BrowserRouter>
    </>
  )
}

export default App
