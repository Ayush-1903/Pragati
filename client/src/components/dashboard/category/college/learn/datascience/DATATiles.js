import user from '../../images/User.svg';
import dc from '../../images/dc.jpg';
import ss from '../../images/ss.png';
import udemy from '../../images/udemy.png';
import coursera from '../../images/coursera.png';
import av from '../../images/AV.png';
import kaggle from '../../images/Kaggle.png';

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
                            <h3>Data Science & ML</h3>
                            <div className="divider-line"></div>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                            <div className="main-box">
                                <a href="https://www.datacamp.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="DataCamp" src={dc}/></div>
                                        <h4 className="title">DataCamp</h4>
                                        <p className="description">Learn the data skills you need online at your own pace—from non-coding essentials to data science and machine learning.</p>
                                    </div>
                                </a>
                            </div>  


                            <div className="main-box">
                                <a href="https://www.stratascratch.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Stratascratch" src={ss}/></div>
                                        <h4 className="title">Stratascratch</h4>
                                        <p className="description">Data science interview questions from your favorite companies. Prepare for a career with SQL, python, system design, and other real interview questions.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.udemy.com/topic/data-science/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Udemy" src={udemy}/></div>
                                        <h4 className="title">Udemy</h4>
                                        <p className="description">An online learning and teaching marketplace with over 185000 courses and 49 million students. Learn programming, data science and more.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.coursera.org/browse/data-science" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coursera" src={coursera}/></div>
                                        <h4 className="title">Coursera</h4>
                                        <p className="description">Global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.analyticsvidhya.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Analytics Vidhya" src={av}/></div>
                                        <h4 className="title">Analytics Vidhya</h4>
                                        <p className="description">Analytics Vidhya provides a community based knowledge portal for Analytics and Data Science professionals.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.kaggle.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Kaggle" src={kaggle}/></div>
                                        <h4 className="title">Kaggle</h4>
                                        <p className="description">Kaggle offers a no-setup, customizable, Jupyter Notebooks environment. Inside it you’ll find all the code & data you need to do your data science work.  </p>
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