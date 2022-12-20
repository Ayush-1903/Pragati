import user from '../images/User.svg';
import applied from '../images/Applied.png';
import academy from '../images/Academy.png';
import unacademy from '../images/Unacademy.png';
import igate from '../images/Igate.png';
import made from '../images/MadeEasy.png';
import nptel from '../images/Nptel.png';
import ims from '../images/IMS.png';
import cl from '../images/CL.png';
import time from '../images/time.jpg';

function StudyFront() {

    const date = new Date();
    const currTime = date.getHours();

    let greeting;

    if(currTime < 12){
        greeting = "Good Morning";
    }

    else if(currTime < 18){
        greeting = "Good Afternoon";
    }

    else{
        greeting = "Good Evening";
    }

    return (
        <main>
            <div className="main-container">
                <div className="main-title">
                        <img alt="Hello" src={user}></img>
                        <div className="main-greeting">
                            <h1>{greeting}!</h1>
                            <p>Welcome to your Dashboard</p>
                        </div>
                </div>

                <section id="services" className="section-bg">
                    <div className="front-container">

                        <header className="section-header" data-aos="fade-right" data-aos-duration="900" data-aos-delay="200">
                            <h3>Gate</h3>
                            <div className="divider-line"></div>
                            {/* <p>An internship is a professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.</p> */}
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            <div className="main-box">
                                <a href="https://gate.appliedroots.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Applied" src={applied}/></div>
                                        <h4 className="title">GATE Applied</h4>
                                        <p className="description">Ed-Tech organization that focuses on teaching students who are preparing for the GATE Computer Science and Information Technology.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.gateacademy.co.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Academy" src={academy}/></div>
                                        <h4 className="title">GATE Academy</h4>
                                        <p className="description">Prepare for GATE and many more exams at your own pace and convenience and get access to recorded lectures.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://unacademy.com/goal/gate-ese-me-ch/QGFRK" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Unacademy" src={unacademy}/></div>
                                        <h4 className="title">Unacademy</h4>
                                        <p className="description">Access to India's best GATE & ESE - ME & CH educators is just a subscription away with unacademy.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.madeeasy.in/home/GATE" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Made Easy" src={made}/></div>
                                        <h4 className="title">Made Easy</h4>
                                        <p className="description">MADE EASY, apart from classroom courses, offers Online Test Series for ESE, GATE, State Engineering Exams, RRB-JE and SSC-JE.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://gate.nptel.ac.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="NPTEL" src={nptel}/></div>
                                        <h4 className="title">NPTEL</h4>
                                        <p className="description">NPTEL is a joint initiative of the IITs and IISc. NPTEL stands for National Programme on Technology Enhanced Learning.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.igate.guru/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="I-gate" src={igate}/></div>
                                        <h4 className="title">I-Gate</h4>
                                        <p className="description">i-Gate is a educational institute which has trained thousands of students in Central India for the GATE Exam.</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>CAT</h3>
                            <div className="divider-line"></div>
                            {/* <p>An internship is a professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.</p> */}
                        </header>

                        <div className="front-row">

                            <div className="main-box">
                                <a href="https://www.imsindia.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="IMS" src={ims}/></div>
                                        <h4 className="title">IMS</h4>
                                        <p className="description">IMS Learning Resources is India’s first test preparation institute for the CAT and other management entrance examinations.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.careerlauncher.com/cl-online/product-category-mba.jsp?prodCat=MBA&prodGroup=Online%20Coaching&rt=&rl=&source=default&method=default" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Career Launcher" src={cl}/></div>
                                        <h4 className="title">Career Launcher</h4>
                                        <p className="description">Prepare for GATE and many more exams at your own pace and convenience and get access to recorded lectures.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.time4education.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Career Launcher" src={time}/></div>
                                        <h4 className="title">T.I.M.E.</h4>
                                        <p className="description">T.I.M.E. is India's leading test-prep institute with a pan-India presence and is headquartered in Hyderabad.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default StudyFront;