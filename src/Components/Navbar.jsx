import React from 'react'
import '../global.css'
import { Logo } from './Image'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <section >
                <div className="Navbar-section">
                    <div className="container-fluid">
                        <div className="Navbar col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="Nav-Logo col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div className="Logo">
                                    <NavLink to='/' >
                                        <img src={Logo} alt="Main-Logo" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="Nav-menu col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <div className="Nav-List col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8">
                                    <div className="List col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"><NavLink className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                        to="/about">About Us</NavLink></div>
                                    <div className="List col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"><NavLink className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                        to="/vanue">Venues</NavLink></div>
                                    <div className="List col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"><NavLink className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                        to="/gallery">Gallery</NavLink></div>
                                    <div className="List col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"><NavLink className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                        to="/contact">
                                        Contact Us</NavLink></div>
                                </div>
                            </div>
                            <div className="Nav-Login col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <div className="search-btn col-4 col-sm-4 col-md-4 col-lg-4 col-xl-6">
                                    <div onclick="openSearchbtn()" className="search-btn-container">
                                        <lord-icon src="https://cdn.lordicon.com/kkvxgpti.json" trigger="loop"
                                            delay="1000" colors="primary:#ffffff" />
                                    </div>
                                </div>
                                <div className="Nav-Login-btn col-8 col-sm-8 col-md-8 col-lg-8 col-xl-6">
                                    <button id="pop-btn" onclick="openPopup()">Log In</button>
                                </div>
                            </div>

                            <div id="searchbar-btn" className="searchbar-btn-section d-none">
                                <input type="text" placeholder="Search Here" />
                            </div>

                            <div id="popup" className="containner d-none">
                                <div className="maincontainer">
                                    <div className="popup-text-content">
                                        <div className="popup-sub-heading">
                                            Welcome Back,
                                        </div>
                                        <div className="popup-heading">
                                            Login!
                                        </div>
                                        <div className="popup-sub-heading-2">
                                            <span onclick="pop()">New user?</span> Register your account.
                                        </div>
                                        <div className="popup-input-container">
                                            <input id="login-input" type="text" placeholder="Email address" />
                                            <lord-icon className="lord-icon" src="https://cdn.lordicon.com/nzixoeyk.json"
                                                trigger="loop" delay="2000" />
                                        </div>
                                        <div className="popup-input-container">
                                            <input type="password" placeholder="Password" />
                                            <lord-icon className="lord-icon" src="https://cdn.lordicon.com/rpgflpkp.json"
                                                trigger="loop" delay="2000" />
                                        </div>
                                        <div className="foget-section">
                                            <div className="remember">
                                                <input type="checkbox" />
                                                <div className="remenber-text">
                                                    Remember this device
                                                </div>
                                            </div>
                                            <div className="forget-pass">
                                                <a href="#">Forget Password?</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popup-btn">
                                        <button type="button" onclick="closePopup()">Log In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
