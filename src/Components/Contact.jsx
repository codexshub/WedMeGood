import React from 'react'
import '../global.css'

const Contact = () => {
  return (
    <>
       <section>
        <div className="contact-section">
            <div className="container">
                <div className="contact-page col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="contact-form-container col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div>
                            <div className="contact-text-head">
                                <div className="contact-heading">
                                    Feel free to Contact !
                                </div>
                                <div className="contact-para col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
                                    veniam explicabo, modi at nisi consequuntur!</div>
                            </div>
                            <div className="contact-form-section">
                                <div className="contact-input">
                                  
                                    <input type="text" placeholder="Full Name"/>
                                </div>
                                <div className="contact-input">
                                    <input type="text" placeholder="Email"/>
                                </div>
                                <div className="contact-num-container">
                                    <div className="contact-input-num">
                                        <input type="text" placeholder="Phone Number"/>
                                    </div>
                                    <div className="contact-input-city">
                                        <input type="text" placeholder="City"/>
                                    </div>
                                </div>
                                <div className="contact-text-area">
                                    <textarea placeholder="Message" cols="52" rows="5"></textarea>
                                </div>
                                <div className="contact-submit-btn">
                                    <button onclick="contactsubmmit()">Submmit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-img-container col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div className="container-img-head">
                            <lord-icon className="lord-icon" src="https://cdn.lordicon.com/egmlnyku.json" trigger="loop"
                            delay="1000"
                                colors="primary:#b4b4b4,secondary:#30c9e8,tertiary:#f49cc8,quaternary:#66d7ee"
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact
