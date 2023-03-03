import React from 'react'
import AboutUs from '../images/About us page-amico.svg';
import task from '../images/tasks.png';
import web from '../images/websites.png';
import add from '../images/add.png';
import AboutWrapper from '../style/About.style';

export const About = () => {
  return (
    <AboutWrapper>
    <div>
        <div id="about" className="about section">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration="900">
                    <div className="about-left-image">
                        <img src={AboutUs} alt=""></img>
                    </div>
                    </div>
                    <div className="col-lg-6 align-self-center" data-aos="fade-left" data-aos-duration="900">
                    <div className="about-right-content">
                        <div className="section-heading">
                        <h6>About</h6>
                        <h4>Who We <em>Are</em></h4>
                        <div className="line-dec"></div>
                        </div>
                        <p>Pragati is a comprehensive educational platform that brings together all the resources that you need to succeed. With features like learning resources, a to-do list, and a bookmark system, Pragati makes it easier for students to stay organized and motivated.</p>
                        <div className="row">
                            <div className="col-lg-4 col-sm-4" data-aos="zoom-in" data-aos-delay="300">
                                <div className="info-post">
                                <div className="about-icon">
                                    <img src={web} alt=""></img>
                                    <a>Organize</a>
                                    <br></br>
                                    <span>Organize your favourite and necessary websites.</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4" data-aos="zoom-in" data-aos-delay="400">
                                <div className="info-post">
                                <div className="about-icon">
                                    <img src={task} alt=""></img>
                                    <a>Todo List</a>
                                    <br></br>
                                    <span>List your important tasks and track them daily.</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4" data-aos="zoom-in" data-aos-delay="500">
                                <div className="info-post">
                                <div className="about-icon">
                                    <img src={add} alt=""></img>
                                    <a>Add Custom Tiles</a>
                                    <br></br>
                                    <span>Personalize your experience with custom tiles.</span>
                                </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </AboutWrapper>
  )
}

export default About;