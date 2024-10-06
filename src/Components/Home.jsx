import React from 'react'
import '../global.css'
import { Card1, Card2, MobileImg, Card3, Card4, Vanue1, Vanue2, Vanue3, Vanue4, Vanue5, Vanue6 } from './Image'
import { NavLink } from 'react-router-dom'
import Swiper1 from './Swiper/Swiper1'
import Swiper2 from './Swiper/Swiper2'
import Swiper3 from './Swiper/Swiper3'

const Home = () => {
    return (
        <>
            <section>
                <div className="Home-section">
                    <div className="container-fluid">
                        <div className="Home">
                            <div className="Home-content">
                                <div className="Home-head">
                                    <div className="Home-heading">
                                        Your Wedding, Your Way
                                    </div>
                                    <div className="Home-sub-heading">
                                        Find the best wedding vendors with thousands of trusted reviews
                                    </div>
                                </div>
                                <div className="Home-Input">
                                    <div className="input-1"><input type="text" placeholder="Search Venue" />
                                        <button><lord-icon className="lord-icon" src="https://cdn.lordicon.com/vduvxizq.json"
                                            trigger="loop" delay="1000">
                                        </lord-icon></button>
                                    </div>
                                    <div className="input-1"><input type="text" placeholder="Search City" />
                                        <button><lord-icon className="lord-icon" src="https://cdn.lordicon.com/vduvxizq.json"
                                            delay="1000" trigger="loop">
                                        </lord-icon></button>
                                    </div>
                                    <div className="get-started-btn">
                                        <NavLink to="/contact"><button>Get
                                            Started</button></NavLink>
                                    </div>
                                </div>
                                <div className="Home-para">
                                    Popular Searches: Wedding Photographers in India | Bridal Makeup Artists in IndiaWedding |
                                    Cards in India | Wedding Venues in India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Swiper1 />
            <Swiper2 />

            <section>
                <div className="forth-page-section">
                    <div className="container">
                        <div className="forth_page">
                            <div className="forth-page-head">
                                <div className="forth-heading">
                                    Wedding Categories
                                </div>
                            </div>

                            <div className="row gap20">
                                <div className="forth-page-box col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                                        <div className="box-text-head ">Vanues</div>
                                        <div className="box-text-para">Banquet Hall | Farmhouse | Lawn</div>
                                    </div>
                                    <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">

                                        <div className="box-img-1">
                                            <img src={Vanue1} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="forth-page-box-2 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                                        <div className="box-text-head ">Bridal Wear</div>
                                        <div className="box-text-para">Bridal Lehengas | Kanjeevaram | Saree</div>
                                    </div>
                                    <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">


                                        <div className="box-img-1">
                                            <img src={Vanue2} alt="" />
                                        </div>

                                    </div>
                                </div>


                                <div className="forth-page-box-3 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                                        <div className="box-text-head ">Wedding Makeup</div>
                                        <div className="box-text-para">Bridal Makeup | Family Makeup</div>
                                    </div>
                                    <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">

                                        <div className="box-img-1">
                                            <img src={Vanue3} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="forth-page-box-4 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                                        <div className="box-text-head ">Photography</div>
                                        <div className="box-text-para">Wedding Shoot | Photooot | DSLR</div>
                                    </div>
                                    <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">


                                        <div className="box-img-1">
                                            <img src={Vanue4} alt="" />
                                        </div>

                                    </div>
                                </div>


                                <div className="forth-page-box-5 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                                        <div className="box-text-head ">Wedding Planner</div>
                                        <div className="box-text-para">Weddnig Decoration | Function | Red Carpet</div>
                                    </div>
                                    <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">

                                        <div className="box-img-1">
                                            <img src={Vanue5} alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="forth-page-box-6 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="box-text col-6 col-sm-6 col-md-5 col-lg-5 col-xl-7">
                                        <div className="box-text-head ">Marrige Hall</div>
                                        <div className="box-text-para">Banquet Hall | Farmhouse | Lawn</div>
                                    </div>
                                    <div className="box-img col-6 col-sm-6 col-md-7 col-lg-7 col-xl-5">


                                        <div className="box-img-1">
                                            <img src={Vanue6} alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section>
                <div className="fifth-page-section">
                    <div className="container">
                        <div className="fifth-page">
                            <div className="fifth-page-head">
                                WMG Inhouse Services
                            </div>
                            <div className="row">
                                <div className="fifth-page-box-1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="card">
                                        <div className="card-img-container">
                                            <div className="card-img">
                                                <div className="card-img-overlay-1"></div>
                                                <img src={Card1} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-head">Wedsta</p>
                                            <p className="card-text">WMG At Home, Family Makeup Services</p>
                                            <a href="file:///D:/AlphaWizz01/03/Venue/Venue.html"><button>KNOW MORE</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fifth-page-box-1  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="card">
                                        <div className="card-img-container">
                                            <div className="card-img">
                                                <div className="card-img-overlay-1"></div>
                                                <img src={Card2} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-head">Genie Services</p>
                                            <p className="card-text">Plan your dream wedding in your budget</p>
                                            <a href="file:///D:/AlphaWizz01/03/Venue/Venue.html"><button>KNOW MORE</button></a>
                                        </div>
                                    </div>
                                </div>


                                <div className="fifth-page-box-1  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="card">
                                        <div className="card-img-container">
                                            <div className="card-img">
                                                <div className="card-img-overlay-1"></div>
                                                <img src={Card3} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-head">Venue Booking Service</p>
                                            <p className="card-text">Best Price Guaranteed</p>
                                            <a href="file:///D:/AlphaWizz01/03/Venue/Venue.html"><button>KNOW MORE</button></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="fifth-page-box-1  col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    <div className="card">
                                        <div className="card-img-container">
                                            <div className="card-img">
                                                <div className="card-img-overlay-1"></div>
                                                <img src={Card4} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-head">Destination Wedding</p>
                                            <p className="card-text">Tours and Trips for Destination Wedding</p>
                                            <a href="file:///D:/AlphaWizz01/03/Venue/Venue.html"><button>KNOW MORE</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="sixth-page-section">
                    <div className="container">
                        <div className="sixth-page col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="sixth-page-head col-9 col-sm-9 col-md-9 col-lg-8 col-xl-8">
                                <div className="sixth-heading-text">
                                    <div className="sixth-heading">
                                        Download The WedMeGood Mobile App Today!
                                    </div>
                                    <div className="sixth-items-container">
                                        <div className="sixth-item">
                                            <div className="sixth-item-icon">
                                                <lord-icon className="lord-icon" src="https://cdn.lordicon.com/depeqmsz.json"
                                                    trigger="loop" delay="1000" colors="primary:#e72e77" />
                                            </div>
                                            <div className="sixth-item-text">
                                                Save Wedding Ideas
                                            </div>
                                        </div>
                                        <div className="sixth-item">
                                            <div className="sixth-item-icon">
                                                <lord-icon className="lord-icon" src="https://cdn.lordicon.com/ulnswmkk.json"
                                                    trigger="loop" delay="1000" colors="primary:#e72e77" />
                                            </div>
                                            <div className="sixth-item-text">
                                                Shortlist Vendors
                                            </div>
                                        </div>
                                        <div className="sixth-item">
                                            <div className="sixth-item-icon">
                                                <lord-icon className="lord-icon" src="https://cdn.lordicon.com/pbrgppbb.json"
                                                    trigger="loop" delay="1000" colors="primary:#e72e77" />
                                            </div>
                                            <div className="sixth-item-text">
                                                Get Free Wedding Checklist
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sixth-sms-content">
                                        <div className="sixth-sms-text">
                                            You will receive an SMS with a link to download the App
                                        </div>
                                        <div className="sixth-sms-num-container">
                                            <div className="sms-flag"><lord-icon className="lord-icon"
                                                src="https://cdn.lordicon.com/srsgifqc.json" trigger="loop" delay="1000"
                                                colors="primary:#e72e77">
                                            </lord-icon></div>
                                            <div className="sms-91">+91</div>
                                            <div className="sms-input"><input type="text" /></div>
                                        </div>
                                        <div className="download-app-container col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                            <a href="file:///D:/AlphaWizz01/03/Contact/Contact.html"><button type="btn">Download
                                                App</button></a>
                                        </div>
                                        <div className="os-container col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                            <div className="apple"><lord-icon className="lord-icon"
                                                src="https://cdn.lordicon.com/becebamh.json" trigger="loop" delay="1000">
                                            </lord-icon></div>
                                            <div className="apple">
                                                <lord-icon className="lord-icon" src="https://cdn.lordicon.com/hpxtnuuq.json"
                                                    delay="1000" trigger="loop">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sixth-page-img col-3 col-sm-3 col-md-3 col-lg-4 col-xl-4">
                                <div className="sixth-page-img">
                                    <img src={MobileImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Swiper3 />

           
        </>
    )
}

export default Home
