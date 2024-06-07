import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            {/* Footer 2 - Bootstrap Brain Component */}
            <footer className="bg-dark text-center text-white">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <NavLink data-mdb-ripple-init className="btn btn-outline-dark btn-floating m-1 border border-white" to="#!" role="button"><i className="fab fa-facebook-f text-white" /></NavLink>
                        {/* Twitter */}
                        <NavLink data-mdb-ripple-init className="btn btn-outline-dark btn-floating m-1 border border-white" to="#!" role="button"><i className="fab fa-twitter text-white" /></NavLink>
                        {/* Google */}
                        <NavLink data-mdb-ripple-init className="btn btn-outline-dark btn-floating m-1 border border-white" to="#!" role="button"><i className="fab fa-google text-white" /></NavLink>
                        {/* Instagram */}
                        <NavLink data-mdb-ripple-init className="btn btn-outline-dark btn-floating m-1 border border-white" to="#!" role="button"><i className="fab fa-instagram text-white" /></NavLink>
                        {/* Linkedin */}
                        <NavLink data-mdb-ripple-init className="btn btn-outline-dark btn-floating m-1 border border-white" to="#!" role="button"><i className="fab fa-linkedin-in text-white" /></NavLink>
                        {/* Github */}
                        <NavLink data-mdb-ripple-init className="btn btn-outline-dark btn-floating m-1 border border-white" to="#!" role="button"><i className="fab fa-github text-white" /></NavLink>
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright  
                    <NavLink className="text-white" to="https://mdbootstrap.com/"> Team 2</NavLink>
                </div>
                {/* Copyright */}
            </footer>

        </div>

    )
}

export default Footer
