import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  
  return (
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
  )
}