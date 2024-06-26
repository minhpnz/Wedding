import React from 'react'
import TimeCountDown from '../countdown'
import hImg1 from '../../images/slider/shape.png'
import hImg2 from '../../images/slider/shape2.png'
import hImg3 from '../../images/main.jpg'
import hImg4 from '../../images/slider/shape3.png'
import hImg5 from '../../images/slider/shape4.png'


const Hero = (props) => {
    return(
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="shape-1"><img src={hImg1} alt="hImg1"/></div>
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Ngoc Thanh & Hoang Ai </h2>
                
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>Hướng Hóa - 11:00 Ngày 9 Tháng 7, 2024</p>
                                    </div>
                                    <i class="fa fa-heart" aria-hidden="true"></i>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>Quy Nhơn - 17:00 Ngày 27 Tháng 7, 2024</p>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <TimeCountDown/>
                                        </div>
                                    </div>
                                    <div className="shape-2"><img src={hImg2} alt="hImg2"/></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img src={hImg3} alt="hImg3"/>
                    </div>
                    <div className="static-hero-shape-1"><img src={hImg4} alt="hImg4"/></div>
                    <div className="static-hero-shape-2"><img src={hImg5} alt="hImg5"/></div>
                </div>
            </div>
        </section>
    )
}

export default Hero;