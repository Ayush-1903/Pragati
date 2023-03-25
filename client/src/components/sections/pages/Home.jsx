import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeWrapper from '../style/Home.style';
import Video from '../images/video1.mp4';

export const Home = () => {
  return (
    <HomeWrapper>
        <div className="main-banner">
            <div className="container">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-content" data-aos="fade-right" data-aos-duration="900">
                                <h6>We help in your pragati</h6>
                                <h2>Organize All Your Websites In One Place. </h2>
                                <p>Pragati is a comprehensive educational platform that brings together all the resources that you need to succeed.</p>
                                <div className="border-first-button scroll-to-section">
                                    <NavLink to = "/auth">Get Started <i className="fa fa-solid fa-arrow-right"></i></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="900">
                            <div className="right-image">
                                <video autoPlay loop muted>
                                    <source src={Video} type='video/mp4'/>
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </HomeWrapper>
  )
}

export default Home;