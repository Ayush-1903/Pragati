import user from '../images/User.svg';
import intern from '../images/Internshala.png';
import unstop from '../images/Unstop.webp';
import angellist from '../images/AngelList.png';
import linkedin from '../images/LinkedIn.png';
import gd from '../images/Glassdoor.png';
import naukri from '../images/naukri.png';
import id from '../images/indeed.svg';
import gs from '../images/gs.png';
import monster from '../images/monster.png';
import hackerrank from '../images/Hackerrank.png';
import hackerearth from '../images/Hackerearth.png';

function PlacementFront() {

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
                            <h3>Internship</h3>
                            <div className="divider-line"></div>
                            {/* <p>An internship is a professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.</p> */}
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            <div className="main-box" >
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="LinkedIn" src={linkedin}/></div>
                                        <h4 className="title">LinkedIn</h4>
                                        <p className="description">World's largest professional network on the internet. Find the right job or internship, connect with people, and learn the skills you need.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://internshala.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Internshala" src={intern}/></div>
                                        <h4 className="title">InternShala</h4>
                                        <p className="description">Internshala is India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, etc.</p>
                                    </div>
                                </a>
                            </div>


                            <div className="main-box">
                                <a href="https://unstop.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Unstop" src={unstop}/></div>
                                        <h4 className="title">UnStop</h4>
                                        <p className="description">With Unstop, companies can discover, assess & hire the right talent via coding and non-tech assessments, hackathons & other engagements.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://angel.co/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="AngelList" src={angellist}/></div>
                                        <h4 className="title">AngelList</h4>
                                        <p className="description">We make it easy to find your dream job - regardless of your location. Browse over 100,000 jobs from top companies to fast-growing startups.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.glassdoor.co.in/index.htm" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Glassdoor" src={gd}/></div>
                                        <h4 className="title">Glassdoor</h4>
                                        <p className="description">Worldwide leader on insights about jobs and companies. It's an online job search and review platform for people seeking new opportunities.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="front-container">
                        
                        <header className="section-header">
                            <h3>Placement /Job</h3>
                            <div className="divider-line"></div>
                            {/* <p>An internship is a professional learning experience that offers meaningful, practical work related to a student's field of study or career interest. An internship gives a student the opportunity for career exploration and development, and to learn new skills.</p> */}
                        </header>

                        <div className="front-row">
                            
                        <div className="main-box" >
                                <a href="https://www.naukri.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Naukri" src={naukri}/></div>
                                        <h4 className="title">Naukri.com</h4>
                                        <p className="description">Connect with 20000+ employers. Apply to millions of job opportunities across top companies, industries and locations on India's No.1 job site.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://in.indeed.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Indeed" src={id}/></div>
                                        <h4 className="title">Indeed</h4>
                                        <p className="description">Indeed strives to put job seekers first, giving them free access to search for jobs, post resumes, and research companies.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box" >
                                <a href="https://www.linkedin.com/jobs/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="LinkedIn" src={linkedin}/></div>
                                        <h4 className="title">LinkedIn</h4>
                                        <p className="description">World's largest professional network on the internet. Find the right job or internship, connect with people, and learn the skills you need.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://ourgoodspace.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="GoodSpace" src={gs}/></div>
                                        <h4 className="title">GoodSpace</h4>
                                        <p className="description">GoodSpace is a platform to find Fulltime, Work from Home or Freelance work opportunities with thousands of employers worldwide.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.glassdoor.co.in/index.htm" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Glassdoor" src={gd}/></div>
                                        <h4 className="title">Glassdoor</h4>
                                        <p className="description">Worldwide leader on insights about jobs and companies. It's an online job search and review platform for people seeking new opportunities.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.monsterindia.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Glassdoor" src={monster}/></div>
                                        <h4 className="title">Monster India</h4>
                                        <p className="description">Monster is a global online employment solution for people seeking jobs and the employers who need great people.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.hackerrank.com/jobs/search" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Codeforcess" src={hackerrank}/></div>
                                        <h4 className="title">HackerRank</h4>
                                        <p className="description">HackerRank is a technology hiring platform that is the standard for assessing developer skills for over 2800 companies around the world.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.hackerearth.com/jobs/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Codeforcess" src={hackerearth}/></div>
                                        <h4 className="title">Hackerearth</h4>
                                        <p className="description">A Indian software company headquartered in San Francisco, US, that provides enterprise software that helps organisations with their technical hiring.</p>
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

export default PlacementFront;