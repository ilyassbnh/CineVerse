import React from 'react'
import { useNavigate } from 'react-router-dom'
import movies from '../data/movies'

export default function Card() {
  const navigate = useNavigate()

  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <h1 className="display-4 fw-bold mb-5">Featured Movies</h1>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col">
              <div 
                className="card h-100 movie-card border-dark border-2 rounded"
                onClick={() => navigate(`/details/${movie.id}`)}
              >
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="card-img-top"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{movie.title}</h5>
                  <p className="card-text text-muted small">{movie.releaseDate}</p>
                  <p className="card-text">
                    <small className="fw-bold">{movie.type.join(', ')}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}