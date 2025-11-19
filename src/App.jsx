import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Cards from './components/Card.jsx'
import Details from './pages/Details.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App