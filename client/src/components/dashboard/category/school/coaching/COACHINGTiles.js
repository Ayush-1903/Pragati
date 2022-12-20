import user from '../images/User.svg';
import reso from '../images/reso.png';
import allen from '../images/allen.png';
import fj from '../images/fj.png';
import byjus from '../images/Byjus.png';
import toppr from '../images/Toppr.png';
import doubtnut from '../images/Doubtnut.png';
import embibe from '../images/Embibe.png';
import vedantu from '../images/Vedantu.png';
import brainly from '../images/Brainly.png';

function Front() {

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
                            <h1>{greeting}! User</h1>
                            <p>Welcome to your Dashboard</p>
                        </div>
                </div>

                <section id="services" className="section-bg">
                    <div className="front-container">

                        <header className="section-header">
                            <h3>JEE Coaching</h3>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row">
                            <div className="main-box">
                                <a href="https://www.resonance.ac.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Resonance" src={reso}/></div>
                                        <h4 className="title">Resonance</h4>
                                        <p className="description">Join & Crack JEE Main & Advanced Exam With Resonance Coaching 100% Result Oriented Program.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.allen.ac.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Allen" src={allen}/></div>
                                        <h4 className="title">Allen</h4>
                                        <p className="description">A Premier Coaching Institute for the preparation of JEE (Main+Advanced), JEE (Main), Pre-Medical (NEET-UG), etc.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.fiitjee.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="FIITJEE" src={fj}/></div>
                                        <h4 className="title">FIITJEE</h4>
                                        <p className="description">Prepare for examinations and take any number of courses from various topics on Unacademy - an education revolution.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.vedantu.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Vedantu" src={vedantu}/></div>
                                        <h4 className="title">Vedantu</h4>
                                        <p className="description">Vedantu is a live online education platform that offers personalized courses to students. It has more than 500 educators on its platforms currently.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://byjus.com/jee/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Byjus" src={byjus}/></div>
                                        <h4 className="title">Byju's</h4>
                                        <p className="description">BYJU'S offers highly personalised and effective learning programs for aspirants of competitive exams like JEE, NEET etc.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.toppr.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Toppr" src={toppr}/></div>
                                        <h4 className="title">Toppr</h4>
                                        <p className="description">More than 1.5 million learning pieces, including practice questions, solutions, concepts, etc that come together seamlessly to give 360° learning.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.embibe.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Embibe" src={embibe}/></div>
                                        <h4 className="title">Embibe</h4>
                                        <p className="description">India’s largest AI based educational startup. It focuses on students that are preparing for competitive exams such as JEE, NEET and exams. </p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.doubtnut.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Doubtnut" src={doubtnut}/></div>
                                        <h4 className="title">Doubtnut</h4>
                                        <p className="description">Doubtnut App is India's top and only instant doubt solving platform, which gives out instant video solutions to all your Physics, Chemistry, Maths, Biology and Science doubts.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://brainly.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Brainly" src={brainly}/></div>
                                        <h4 className="title">Brainly</h4>
                                        <p className="description">A knowledge-sharing community where 350 million students and experts put their heads together to crack their toughest homework questions.</p>
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

export default Front;