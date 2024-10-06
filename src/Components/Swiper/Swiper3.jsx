import React from 'react'
import '../../global.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Swiper3 = () => {
    return (
        <>
            <section>
                <div className="seven-page-section">
                    <div className="container">
                        <div className="seven-page col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="seven-page-head">
                                <div className="seven-heading">
                                    Fake Wedding Stories
                                </div>
                            </div>

                            <Swiper

                                spaceBetween={20}
                                loop={true}
                                slidesPerView={3}
                                modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide>
                                    <div className="seven-slider">
                                        <div className="swiper-section-container-seven">
                                            <div className="slider-content-1">
                                            </div>
                                        </div>
                                        <div className="seven-text-container">
                                            <div className="cerimony-head-seven">Lorem, ipsum.</div>
                                            <div className="cerimony-para-seven">Lorem ipsum, dolor sit amet consectetur adipisicing
                                                elit. Optio ut quae vel eum adipisci accusamus!</div>
                                            <div className="cerimony-date-seven">06 February 2024</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="seven-slider">
                                        <div className="swiper-section-container-seven">
                                            <div className="slider-content-2">
                                            </div>
                                        </div>
                                        <div className="seven-text-container">
                                            <div className="cerimony-head-seven">Lorem, ipsum.</div>
                                            <div className="cerimony-para-seven">Lorem ipsum, dolor sit amet consectetur adipisicing
                                                elit. Optio ut quae vel eum adipisci accusamus!</div>
                                            <div className="cerimony-date-seven">06 February 2024</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="seven-slider">
                                        <div className="swiper-section-container-seven">
                                            <div className="slider-content-3">
                                            </div>
                                        </div>
                                        <div className="seven-text-container">
                                            <div className="cerimony-head-seven">Lorem, ipsum.</div>
                                            <div className="cerimony-para-seven">Lorem ipsum, dolor sit amet consectetur adipisicing
                                                elit. Optio ut quae vel eum adipisci accusamus!</div>
                                            <div className="cerimony-date-seven">06 February 2024</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="seven-slider">
                                        <div className="swiper-section-container-seven">
                                            <div className="slider-content-4">
                                            </div>
                                        </div>
                                        <div className="seven-text-container">
                                            <div className="cerimony-head-seven">Lorem, ipsum.</div>
                                            <div className="cerimony-para-seven">Lorem ipsum, dolor sit amet consectetur adipisicing
                                                elit. Optio ut quae vel eum adipisci accusamus!</div>
                                            <div className="cerimony-date-seven">06 February 2024</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="seven-slider">
                                        <div className="swiper-section-container-seven">
                                            <div className="slider-content-5">
                                            </div>
                                        </div>
                                        <div className="seven-text-container">
                                            <div className="cerimony-head-seven">Lorem, ipsum.</div>
                                            <div className="cerimony-para-seven">Lorem ipsum, dolor sit amet consectetur adipisicing
                                                elit. Optio ut quae vel eum adipisci accusamus!</div>
                                            <div className="cerimony-date-seven">06 February 2024</div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Swiper3
