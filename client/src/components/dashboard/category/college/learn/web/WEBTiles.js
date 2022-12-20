import user from '../../images/User.svg';
import w3 from '../../images/W3.png';
import udemy from '../../images/udemy.png';
import ninja from '../../images/Coding-Ninjas.png';
import ac from '../../images/AC.jpg';
import pep from '../../images/pep.jpg';
import harry from '../../images/Harry.jpg';
import fcc from '../../images/fcc.jpg';
import coursera from '../../images/coursera.png';

function DSAFront() {

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
                            <h3>Web Development</h3>
                            <div className="divider-line"></div>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                            <div className="main-box">
                                <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="W3" src={w3}/></div>
                                        <h4 className="title">W3 Schools</h4>
                                        <p className="description">W3Schools is optimized for learning, testing, and training. Examples might be simplified to improve reading and basic understanding.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Free Code Camp" src={fcc}/></div>
                                        <h4 className="title">freeCodeCamp.org</h4>
                                        <p className="description">As a nonprofit organization, freeCodeCamp provides coding courses free of charge to anyone who wants to take them.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.codingninjas.com/courses/full-stack-web-dev-node-js" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coding Ninja" src={ninja}/></div>
                                        <h4 className="title">Coding Ninjas</h4>
                                        <p className="description">We teach 17+ Programming courses in Foundation, Data & Development courses such as Machine Learning, Data Science, Web Development, etc.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.udemy.com/topic/web-development/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Udemy" src={udemy}/></div>
                                        <h4 className="title">Udemy</h4>
                                        <p className="description">An online learning and teaching marketplace with over 185000 courses and 49 million students. Learn programming, data science and more.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.coursera.org/courses?query=web%20development" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coursera" src={coursera}/></div>
                                        <h4 className="title">Coursera</h4>
                                        <p className="description">Global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>Web Dev YouTube Channels</h3>
                            <div className="divider-line"></div>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row">
                            
                            <div className="main-box">
                                <a href="https://www.youtube.com/c/Freecodecamp" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Free Code Camp" src={fcc}/></div>
                                        <h4 className="title">freeCodeCamp.org</h4>
                                        <p className="description">As a nonprofit organization, freeCodeCamp provides coding courses free of charge to anyone who wants to take them.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Apna College" src={ac}/></div>
                                        <h4 className="title">Apna College</h4>
                                        <p className="description">Here Shradha Didi and Aman Bhaiya will help you in finding your right college, career options, soft skills and will also help you learn to code.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="CodeWithHarry" src={harry}/></div>
                                        <h4 className="title">CodeWithHarry</h4>
                                        <p className="description">This Website development course will teach you about how to create a website from scratch using HTML5, CSS3, JavaScript/ES5/ES6.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PL-Jc9J83PIiEeD3I4VXETPDmzJ3Z1rWb4" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Pepcoding" src={pep}/></div>
                                        <h4 className="title">Pepcoding</h4>
                                        <p className="description">A platform for students where they get free content to study, contests to improve their coding skills, & placements in top-companies.</p>
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

export default DSAFront;