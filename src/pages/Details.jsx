import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import movies from '../data/movies'

export default function Details() {
  const { id } = useParams()
  const navigate = useNavigate()

  const movie = movies.find(m => m.id === parseInt(id))

  if (!movie) {
    return (
      <div className="container-fluid bg-white d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
        <div className="text-center">
          <h1 className="display-1 mb-4">Movie not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="btn btn-dark btn-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container-fluid bg-white" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <div className="container py-5">
        <button 
          onClick={() => navigate('/')}
          className="btn btn-dark mb-4"
        >
          ← Back
        </button>

        <div className="row g-5">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-4">{movie.title}</h1>

            <div className="mb-5">
              <h3 className="fw-bold mb-3">DETAILS</h3>
              
              <div className="fs-6">
                <p><strong>Release Date:</strong> {movie.releaseDate}</p>
                <p><strong>Genre:</strong> {movie.type.join(', ')}</p>
                <p className="mt-3">
                  <strong>Description:</strong><br/>
                  {movie.description}
                </p>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-3">
              <div className="col">
                <div className="card border-dark border-2 h-100">
                  <div className="card-body">
                    <p className="card-text fw-bold small mb-2">DIRECTOR</p>
                    <p className="card-text">{movie.team.director}</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-dark border-2 h-100">
                  <div className="card-body">
                    <p className="card-text fw-bold small mb-2">PRODUCER</p>
                    <p className="card-text">{movie.team.producer}</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-dark border-2 h-100">
                  <div className="card-body">
                    <p className="card-text fw-bold small mb-2">LEAD ACTOR</p>
                    <p className="card-text">{movie.team.leadActor}</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card border-dark border-2 h-100">
                  <div className="card-body">
                    <p className="card-text fw-bold small mb-2">WRITER</p>
                    <p className="card-text">{movie.team.writer}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card border-dark border-3">
              <img 
                src={movie.image} 
                alt={movie.title}
                className="card-img-top"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}