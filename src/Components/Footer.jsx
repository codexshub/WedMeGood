import React from 'react'
import '../global.css'
import {FooterLogo,Inasta,Facebook,Twitter,LinkedIn} from './Image'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section>
                <div class="footer-section">
                    <div class="container">
                        <div class="line"></div>
                        <div class="footer col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div class="footer-menu-list col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div class="footer-liSt col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <div>
                                        <div class="footer-logo-container">
                                            <div class="footer-logo-img">
                                                <div class="footer-logo">
                                                    <NavLink to="/">
                                                        <img src={FooterLogo} alt=""/>
                                                    </NavLink>
                                                </div>
                                                <div class="footer-slogal">
                                                    We connect the Multiverse!
                                                </div>
                                            </div>
                                            <div class="footer-social">
                                                <div class="connect">
                                                    Connect With US
                                                </div>
                                                <div class="footer-media col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                                    <div class="icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                        <img src={Inasta} alt=""/>
                                                    </div>
                                                    <div class="icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                        <img src={Facebook} alt=""/>
                                                    </div>
                                                    <div class="icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                        <img src={Twitter} alt=""/>
                                                    </div>
                                                    <div class="icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                                        <img src={LinkedIn} alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="footer-liSt col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <div>
                                        <div class="footer-head">
                                            Wedding Ideas
                                        </div>
                                        <div class="footer-list-item">
                                            <li><a href="#">Wedding Blog</a></li>
                                            <li><a href="#">Wedding Inspiration Gallery</a></li>
                                            <li><a href="#">Real Wedding</a></li>
                                            <li><a href="#">Submit Wedding</a></li>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-liSt col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <div>
                                        <div class="footer-head">
                                            Photo Gallery
                                        </div>
                                        <div class="footer-list-item">
                                            <li><a href="#">Bridal Wear</a></li>
                                            <li><a href="#">Wedding Jewellery</a></li>
                                            <li><a href="#">Bridal Makeup & Hair</a></li>
                                            <li><a href="#">Wedding Decor</a></li>
                                            <li><a href="#">Wedding Photography</a></li>
                                            <li><a href="#">Groom Wear</a></li>
                                            <li><a href="#">Invitations & Favors</a></li>
                                            <li><a href="#">Wedding Accessories</a></li>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-liSt col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                    <div>
                                        <div class="footer-head">
                                            Wedding Invitation Maker
                                        </div>
                                        <div class="footer-list-item">
                                            <li><a href="#">Wedding Card Designs</a></li>
                                            <li><a href="#">Save the Date Templates</a></li>
                                            <li><a href="#">Invitation Video Templates</a></li>
                                            <li><a href="#">Cancellation Policy</a></li>
                                        </div>

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

export default Footer
