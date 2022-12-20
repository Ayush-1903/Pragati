import user from '../images/User.svg';
import fiverr from '../images/Fiverr.png';
import freelancer from '../images/Freelancer.png';
import upwork from '../images/Upwork.png';
import rev from '../images/Rev.png';
import guru from '../images/Guru.png';
import sr from '../images/shrutirajput.jpg';
import jennifer from '../images/Jennifer.jpg';
import alex from '../images/Alex.jpg';

function FreelanceFront() {

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
                            <h3>Freelancing</h3>
                            <div className="divider-line"></div>
                            {/* <p>An internship is a professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.</p> */}
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            <div className="main-box">
                                <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Fiverr" src={fiverr}/></div>
                                        <h4 className="title">Fiverr</h4>
                                        <p className="description">Fiverr, the world's largest marketplace for digital services offers both buyers and sellers a digitally streamlined transactional platform.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.freelancer.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Fiverr" src={freelancer}/></div>
                                        <h4 className="title">Freelancer</h4>
                                        <p className="description">Freelancer.com is the world's largest freelancing and crowdsourcing marketplace by number of users and projects.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.upwork.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Fiverr" src={upwork}/></div>
                                        <h4 className="title">Upwork</h4>
                                        <p className="description">Upwork is the largest online talent solution connecting businesses and skilled freelance professionals.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.rev.com/freelancers" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Fiverr" src={rev}/></div>
                                        <h4 className="title">Rev</h4>
                                        <p className="description">Earn money transcribing, captioning, or subtitling from anywhere, anytime. Our freelancing jobs allow you to work as much or as little as you want.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.guru.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Fiverr" src={guru}/></div>
                                        <h4 className="title">Guru</h4>
                                        <p className="description">Guru.com is a platform where Employers and Freelancers can work together, and get their work done.</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>Freelancing YouTube Channels</h3>
                            <div className="divider-line"></div>
                            {/* <p>An internship is a professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.</p> */}
                        </header>

                        <div className="front-row">

                            <div className="main-box">
                                <a href="https://www.youtube.com/channel/UC8T8KJwCworH4Hpr5YjEzZA/featured" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Shruti Rajput" src={sr}/></div>
                                        <h4 className="title">Shruti Rajput</h4>
                                        <p className="description">On this channel, I want to share what I have learned in my journey and help others to reach their goals to create a new source of income.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/c/JenniferMarieVO" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Jennifer Marie" src={jennifer}/></div>
                                        <h4 className="title">Jennifer Marie</h4>
                                        <p className="description">My teaching style is clear, authentic and straight to the point. Check my channel to get started on your new career as a work-from-home freelancer!</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/c/AlexandraFasuloBiz/featured" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Alexandra Fasulo" src={alex}/></div>
                                        <h4 className="title">Alexandra Fasulo</h4>
                                        <p className="description">Alex Fasulo is a financial freedom advocate and educator, teaching others how they can launch and monetize their very own side hustles.</p>
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

export default FreelanceFront;