import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>

            <nav
                className="navbar navbar-expand-lg shadow"
                style={{ background: "linear-gradient(to right, #0B132B, #1C2541, #3A506B)" }}
            >
                <div className="container-fluid">
                    <a className="navbar-brand text-warning fw-bold fs-4" href="#">
                        🚀 SPACE MISSION TRACKER
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white px-3 fw-semibold" to="/">Add Mission</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/search">Search Mission</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/delete">Delete Mission</Link>
                            <Link className="nav-link text-white px-3 fw-semibold" to="/view">View Missions</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavigationBar