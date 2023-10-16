
import './App.css'
import Navigation from './Routes'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <main className='app'>
    <BrowserRouter>
      <Navbar />
      <Navigation />
    </BrowserRouter>
    </main>
  )
}

export default App
