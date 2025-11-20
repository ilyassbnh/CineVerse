// src/components/CarouselComponent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import movies from '../data/movies'; // Adjust path based on your folder structure

export default function CarouselComponent() {
  const navigate = useNavigate();

  return (
    <div id="movieCarousel" className="carousel slide bg-dark text-white" data-bs-ride="carousel">
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          // The first item must have the 'active' class for Bootstrap to work
          <div 
            key={movie.id} 
            className={`carousel-item ${index === 0 ? 'active' : ''}`} 
            data-bs-interval="5000"
          >
            <div className="container">
              <div className="row align-items-center" style={{ minHeight: '500px' }}>
                
                {/* Left Side: Details */}
                <div className="col-md-7 py-5 pe-md-5">
                  <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>
                  <p className="lead mb-2 text-light opacity-75">
                    {movie.releaseDate.split('-')[0]} | {movie.type.join(', ')}
                  </p>
                  <p className="mb-4">
                    {/* Limit description length for the slider so it looks clean */}
                    {movie.description.length > 150 
                      ? movie.description.substring(0, 150) + '...' 
                      : movie.description}
                  </p>
                  
                  {/* Button: Placed "in the middle" logic (between text and visual flow) */}
                  <button 
                    className="btn btn-primary btn-lg px-5 rounded-pill"
                    onClick={() => navigate(`/details/${movie.id}`)}
                  >
                    See Details
                  </button>
                </div>

                {/* Right Side: Vertical Movie Image */}
                <div className="col-md-5 text-center">
                  <img 
                    src={movie.image} 
                    alt={movie.title} 
                    className="img-fluid rounded shadow-lg"
                    style={{ 
                      maxHeight: '450px', 
                      objectFit: 'cover',
                      border: '4px solid rgba(255,255,255,0.1)' 
                    }} 
                  />
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}