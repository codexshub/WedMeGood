import React from 'react'
import '../global.css'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GalleryImg1, GalleryImg2, GalleryImg6, GalleryImg4, GalleryImg3, GalleryImg5, GalleryImg7 } from './Image'


const Gallery = () => {
    return (
        <>
            <section>
                <div className="Gallery-section">
                    <div className="container">
                        <div className="Gallery col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="Home-head-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="Home-text-content col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="Home-heading-container col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                                        <div className="Home-main-heading">
                                            Showcasing<br></br>Our Best Memories !
                                        </div>
                                        <div className="Home-sub-para">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A vel magni ex consequatur
                                            ullam odio nulla facilis, voluptatum molestiae nesciunt ad deleniti praesentium
                                            quasi ducimus obcaecati numquam ipsa adipisci maxime.
                                        </div>
                                        <div className="upload-container">
                                            <div className="upload-content">
                                                <div className="upload-text">
                                                    Upload your story with us
                                                </div>
                                                <div className="upload-btn">
                                                    <button>Upload Image</button>
                                                </div>
                                                <div className="upload-icon-container">
                                                    <div className="upload-icon">
                                                        <lord-icon src="https://cdn.lordicon.com/fowixcuo.json" trigger="loop"
                                                            delay="1000" colors="primary:#e72e77" />
                                                    </div>
                                                    <div className="upload-icon ">
                                                        <lord-icon className="lord-icon "
                                                            src="https://cdn.lordicon.com/wgdqrxxf.json" trigger="loop"
                                                            delay="1000" colors="primary:#e72e77">
                                                        </lord-icon>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Home-img-content col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    <div className="Home-gallery-img">
                                        <div className="gallery-main-img">
                                            <img src={GalleryImg1}
                                                alt="" />
                                        </div>
                                        <div className="galerry-img-2">
                                            <div className="galeery-sub-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                <div className="galeery-sub-img-content">
                                                    <img src={GalleryImg2}
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="galeery-sub-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                <div className="galeery-sub-img-content">
                                                    <img src={GalleryImg3} alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="second-page-section">
                    <div className="container">
                        <div className="gallery-second-page col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div className="second-page-main-img col-7 col-sm-7 col-md-7 col-lg-7 col-xl-7">
                                <img src={GalleryImg4} alt="" />
                            </div>
                            <div className="second-page-sub-img col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">

                                <div className="second-page-sub-img-container">
                                    <div className="second-sub-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <img src={GalleryImg5} alt="" />
                                    </div>
                                    <div className="second-sub-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <img src={GalleryImg6} alt="" />
                                    </div>

                                </div>
                                <div className="second-page-sub-img-container-2">
                                    <div className="second-sub-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <img src={GalleryImg7} alt="" />
                                    </div>
                                    <div className="second-sub-img col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                        <img src={GalleryImg1} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="Third-page-section">
                            <div className="Third-img-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="Third-page-img col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <div className="Third-img-1">

                                    </div>
                                </div>
                                <div className="Third-page-img col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                    <div className="Third-img-2">
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="Forth-page-section">
                            <div className="Forth-img-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                                <Swiper

                                    spaceBetween={10}
                                    loop={true}
                                    slidesPerView={3}
                                    modules={[Navigation, Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    pauseOnMouseEnter: true
                                }}
                                >
                                    <SwiperSlide>
                                        <div className="swiper-section-container-1 height40">

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-section-container-2 height40">

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-section-container-3 height40">

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-section-container-4 height40">

                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-section-container-5 height40">

                                        </div>
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                        <div className="Third-page-section">
                            <div className="Third-img-container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="Third-page-img col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                    <div className="Third-img-3">
                                    </div>
                                </div>
                                <div className="Third-page-img col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                    <div className="Third-img-4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="memory-section">
                    <div className="container">
                        <div className="memory-page">
                            <div className="memory-page-head">
                                <div className="memory-heading">
                                    We Created Memories !
                                </div>
                                <div className="memory-para col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima odit quis voluptatem natus ratione obcaecati soluta neque at eveniet. Eum nesciunt inventore libero, nobis id exercitationem nam rerum. Facilis, eos.
                                </div>
                                <div className="connect-memory">
                                    <div className="connect-head">
                                        Upload Your Image :
                                    </div>
                                    <div className="connect-icon-container col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                                        <button>Choose files</button>
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

export default Gallery
