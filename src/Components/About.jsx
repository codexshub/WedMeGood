import React from 'react'
import '../global.css'
import { FooterLogo, Inasta,MobileImg, Facebook, Twitter, LinkedIn } from './Image'

const About = () => {
    return (
        <>
            <section>
                <div className="about-home-section">
                    <div className="container">
                        <div className="about-home ">
                            <div className="about-text-head col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                <div className="about-heading">
                                    <img src={FooterLogo} alt="" />
                                </div>
                                <div className="about-para col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam facere cupiditate sapiente perspiciatis nam, doloribus unde quidem? Dolor, animi cum. Tempore doloribus error doloremque perferendis voluptates in architecto, ad quas nobis quia deserunt, ea cumque commodi fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facilis! Tenetur ea ipsum laudantiums incidunt, ex, non mollitia ipsa!
                                </div>
                                <div className="about-connect-head">
                                    <div className="connect-heading">
                                        Connect With Us :
                                    </div>
                                    <div className="connect-icon-container col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                        <div className="connect-icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                            <img src={Inasta} alt="" />
                                        </div>
                                        <div className="connect-icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                            <img src={Facebook} alt="" />
                                        </div>
                                        <div className="connect-icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                            <img src={Twitter} alt="" />
                                        </div>
                                        <div className="connect-icon col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                            <img src={LinkedIn} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="about-second-section">
                    <div class="about-second-bg">
                        <div class="about-second-bg-overley"></div>
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
        </>
    )
}

export default About
