import React from 'react'
import '../../global.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

const Swiper1 = () => {
    return (
        <>
            <section>
                <div class="second-page-section">
                    <div class="container">
                        <div class="second-page">
                            <div class="second-page-heading">
                                Popular Venue Searches
                            </div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                loop={true}
                                modules={[Navigation,Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    pauseOnMouseEnter: true
                                }}
                            >
                                <SwiperSlide>
                                    <div class="swiper-section-container-1">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Mumbai Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-2">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Bangalore Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-3">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">Florida Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-4">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">California Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-section-container-5">
                                        <div class="slider-content">
                                            <div class="slider-item">
                                                <div class="slider-head">francisco Vanue</div>
                                                <div class="slider-para">Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Expedita similique saepe, reiciendis aperiam illo ipsa!</div>
                                            </div>
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

export default Swiper1
