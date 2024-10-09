import React from 'react'
import { Link, useLocation } from "react-router-dom";
import companyLogo from '../../assets/images/filmsWorldLogo.jpeg';
import { useState } from 'react';

const SideNavbar = () => {

    const location = useLocation();

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id='Navbar'>
                <div class="container-fluid">
                    <a className="d-flex align-items-center justify-content-center title1" >
                        <div>
                            <img src={companyLogo} alt="BigCo Inc. logo" width={50} height={40} />
                        </div>
                        <div>FILMSWORLD.PK</div>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" style={{color:"red"}} data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style={{color:"red"}}></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-3 mb-lg-0">
                            
                            <li className="nav-item" style={{
                                marginTop: "20px",
                                borderRadius:"10px",
                                border: location.pathname === '/users' ? "1px solid white" : "1px solid white",
                                backgroundColor: location.pathname === '/users' ? "#db1606" : "white",
                                // color: location.pathname === '/users' ? "whitesmoke" : "inherit"
                            }}>
                                <Link to='/users' className="nav-link" style={{color: location.pathname === '/users' ? "whitesmoke" : "black"}}>
                                    <i className="fas fa-fw fa-users"></i>
                                    <span>All Users</span>
                                </Link>
                            </li>
                            <li className="nav-item" style={{
                                marginTop: "20px",
                                borderRadius:"10px",
                                border: location.pathname === '/add-suggestion' ? "1px solid white" : "1px solid white",
                                backgroundColor: location.pathname === '/add-suggestion' ? "#db1606" : "white",
                                // color: location.pathname === '/add-suggestion' ? "whitesmoke" : "inherit"
                            }}>
                                <Link to='/add-suggestion' className="nav-link" style={{color: location.pathname === '/add-suggestion' ? "whitesmoke" : "black"}}>
                                    <i className="fa-solid fa-list"></i>
                                    <span>Any Suggestions</span></Link>
                            </li>
                            <li className="nav-item" style={{
                                marginTop: "20px",
                                borderRadius:"10px",
                                border: location.pathname === '/add-movie' ? "1px solid white" : "1px solid white",
                                backgroundColor: location.pathname === '/add-movie' ? "#db1606" : "white",
                                // color: location.pathname === '/add-movie' ? "whitesmoke" : "inherit"
                            }}>
                                <Link to='/add-movie' className="nav-link" style={{color: location.pathname === '/add-movie' ? "whitesmoke" : "black"}}>
                                    <i className="fas fa-file-video"></i>
                                    <span>Add Movie</span></Link>
                            </li>
                            <li className="nav-item" style={{
                                marginTop: "20px",
                                borderRadius:"10px",
                                border: location.pathname === '/add-banner' ? "1px solid white" : "1px solid white",
                                backgroundColor: location.pathname === '/add-banner' ? "#db1606" : "white",
                                color: location.pathname === '/add-banner' ? "whitesmoke" : "inherit"
                            }}>
                                <Link to='/add-banner' className="nav-link" style={{color: location.pathname === '/add-banner' ? "whitesmoke" : "black"}}>
                                    <i className="fas fa-file-video"></i>
                                    <span>Add Banner</span></Link>
                            </li>
                            <li className="nav-item" style={{
                                marginTop: "20px",
                                borderRadius:"10px",
                                border: location.pathname === '/add-series' ? "1px solid white" : "1px solid white",
                                backgroundColor: location.pathname === '/add-series' ? "#db1606" : "white",
                                color: location.pathname === '/add-series' ? "whitesmoke" : "inherit"
                            }}>
                                <Link to='/add-series' className="nav-link" style={{color: location.pathname === '/add-series' ? "whitesmoke" : "black"}}>
                                    <i className="fas fa-file-video"></i>
                                    <span>Add Series - Episodes</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className="col-md-3 col-sm-4 text-center" id="sideNavbar" style={{ backgroundColor: "#0a0a0a" }}>
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    <a className="d-flex align-items-center justify-content-center title" >
                        <div>
                            <img src={companyLogo} alt="BigCo Inc. logo" width={50} height={40} />
                        </div>
                        <div>FILMSWORLDPk</div>
                    </a>
                    <hr />
                    <li className="nav-item" style={{
                        marginTop: "20px",
                        border: location.pathname === '/users' ? "1px solid white" : "1px solid white",
                        backgroundColor: location.pathname === '/users' ? "#db1606" : "white",
                        color: location.pathname === '/users' ? "whitesmoke" : "inherit"
                    }}>
                        <Link to='/users' className="nav-link">
                            <i className="fas fa-fw fa-users"></i>
                            <span>All Users</span>
                        </Link>
                    </li>
                    <li className="nav-item" style={{
                        marginTop: "20px",
                        border: location.pathname === '/add-suggestion' ? "1px solid white" : "1px solid white",
                        backgroundColor: location.pathname === '/add-suggestion' ? "#db1606" : "white",
                        color: location.pathname === '/add-suggestion' ? "whitesmoke" : "inherit"
                    }}>
                        <Link to='/add-suggestion' className="nav-link">
                            <i className="fa-solid fa-list"></i>
                            <span>Any Suggestions</span></Link>
                    </li>
                    <li className="nav-item" style={{
                        marginTop: "20px",
                        border: location.pathname === '/add-movie' ? "1px solid white" : "1px solid white",
                        backgroundColor: location.pathname === '/add-movie' ? "#db1606" : "white",
                        color: location.pathname === '/add-movie' ? "whitesmoke" : "inherit"
                    }}>
                        <Link to='/add-movie' className="nav-link" >
                            <i className="fas fa-file-video"></i>
                            <span>Add Movie</span></Link>
                    </li>
                    <li className="nav-item" style={{
                        marginTop: "20px",
                        border: location.pathname === '/add-banner' ? "1px solid white" : "1px solid white",
                        backgroundColor: location.pathname === '/add-banner' ? "#db1606" : "white",
                        color: location.pathname === '/add-banner' ? "whitesmoke" : "inherit"
                    }}>
                        <Link to='/add-banner' className="nav-link">
                            <i className="fas fa-file-video"></i>
                            <span>Add Banner</span></Link>
                    </li>
                    <hr />
                    <li className="nav-item" style={{
                        marginTop: "20px",
                        border: location.pathname === '/add-series' ? "1px solid white" : "1px solid white",
                        backgroundColor: location.pathname === '/add-series' ? "#db1606" : "white",
                        color: location.pathname === '/add-series' ? "whitesmoke" : "inherit"
                    }}>
                        <Link to='/add-series' className="nav-link">
                            <i className="fas fa-file-video"></i>
                            <span>Add Series - Episodes</span></Link>
                    </li>


                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
                </ul>
            </div>
        </>
    )
}

export default SideNavbar
