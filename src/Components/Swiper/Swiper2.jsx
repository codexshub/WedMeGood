import React from 'react'
import '../../global.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Swiper2 = () => {
    return (
        <>
            <section>
                <div className="second-page-section">
                    <div className="container">
                        <div className="second-page">
                            <div className="second-page-heading">
                                Best Ceremonies
                            </div>
                            <Swiper
                              
                                spaceBetween={20}
                                loop={true}
                                slidesPerView={4}
                                modules={[Navigation,Autoplay]}
                                autoplay={{
                                    delay: 2500,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide>
                                    <div className="swiper-section-container-6">
                                        <div className="slider-content">
                                        </div>
                                    </div>
                                    <div className="cerimony-head">Bridal Makeup</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-section-container-7">
                                        <div className="slider-content">
                                        </div>
                                    </div>
                                    <div className="cerimony-head">Photographers</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-section-container-8">
                                        <div className="slider-content">
                                        </div>
                                    </div>
                                    <div className="cerimony-head">Invitations</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-section-container-9">
                                        <div className="slider-content">
                                        </div>
                                    </div>
                                    <div className="cerimony-head">Bridal Wear</div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-section-container-10">
                                        <div className="slider-content">
                                        </div>
                                    </div>
                                    <div className="cerimony-head">Wedding Function</div>
                                </SwiperSlide>
                              
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Swiper2
