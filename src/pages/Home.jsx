import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel'; 
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
        const hasSeenModal = sessionStorage.getItem('hasSeenModal');

        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                openBootstrapModal('exampleModal');
                sessionStorage.setItem('hasSeenModal', 'true');
            }, 3000); 

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <Carousel />
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