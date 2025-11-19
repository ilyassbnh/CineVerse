import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import Card from '../components/Card.jsx'
import NavBar from '../components/Navbar.jsx'

export default function Home() {
  const navigate = useNavigate()

  return (
    <> {/* Start of React Fragment (single root element) */}
      <NavBar/>
      
      {/* Fixed: Replaced 'class' with 'className' */}
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" alt="..."/>
          </div>
        </div>
        
        {/* Fixed: Replaced 'class' with 'className' */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <Card/>
      
      <div className="container-fluid bg-white d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="text-center">
          <h1 className="display-1 fw-bold mb-4">
            Welcome to CINEVERSE
          </h1>
          
          <p className="lead text-muted mb-5 px-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            Discover the greatest movies of all time. Explore our curated collection of cinematic masterpieces.
          </p>
          
          <button 
            onClick={() => navigate('/')}
            className="btn btn-dark btn-lg px-5 py-3"
          >
            Explore Movies
          </button>
        </div>
      </div>
    </> // End of React Fragment
  )
}



