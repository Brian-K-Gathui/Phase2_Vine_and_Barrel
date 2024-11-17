import React, { useState } from 'react';
import { Link } from "react-router-dom";

export function Navbar() {
    const [imageError, setImageError] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-white box-shadow">
            <div className="container">
                <Link className="navbar-brand" to="/Phase2_Vine_and_Barrel">
                    {imageError ? (
                        <span>Vine & Barrel</span>
                    ) : (
                        <img
                            src="/logo.png"
                            alt="Vine & Barrel Logo"
                            width="250"
                            className="me-2"
                            onError={() => setImageError(true)}
                        />
                    )}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#!"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Admin
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/admin/products"> 
                                            Inventory 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/Profile"> 
                                            Profile 
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/sign-out" id="signout"> 
                                            Sign Out 
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
