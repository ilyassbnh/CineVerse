import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import Card from '../components/Card.jsx';

const openBootstrapModal = (id) => {
    if (window.bootstrap && window.bootstrap.Modal) {
        const modalElement = document.getElementById(id);
        if (modalElement) {
            const modal = new window.bootstrap.Modal(modalElement);
            modal.show();
        }
    }
};

export default function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            openBootstrapModal('exampleModal');
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* CAROUSEL SECTION (Uses your provided code, which is already correctly using className) */}
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src={image1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={image2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <Card />
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Subscribe to CINEVERSE!</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Don't miss out on our latest movie lists and exclusive content. Subscribe now!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Later</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}