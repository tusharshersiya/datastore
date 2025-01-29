import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="mynav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Zeetron Networks</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/contact">Contact us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/signup">Register</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/usernew">Newsignup</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/search">Search</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/datastore">DataStore</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
