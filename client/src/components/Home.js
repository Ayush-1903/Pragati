import React from 'react'
import Project from '../images/Organizing projects-cuate.svg';
import { NavLink } from 'react-router-dom';
import HomeWrapper from './style/Home.style';

export const Home = () => {
  return (
    <HomeWrapper>
    <div>
        <div className="main-banner" id="top">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                    <div className="left-content show-up header-text" data-aos="fade-right" data-aos-duration="900">
                        <div className="row">
                        <div className="col-lg-12">
                            <h6>Subscription keeper</h6>
                            <h2>Organize All Your Tasks In One Place. </h2>
                            <p>Create clear, multi-functional to-do lists to easily manage your ideas and work from anywhere so you never forget anything again.</p>
                        </div>
                        <div className="col-lg-12">
                            <div className="border-first-button scroll-to-section">
                                <NavLink to = "/auth">Get Started <i className="fa fa-solid fa-arrow-right"></i></NavLink>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration="900">
                    <div className="right-image">
                        <img src={Project} alt=""></img>
                    </div>
                    </div>
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