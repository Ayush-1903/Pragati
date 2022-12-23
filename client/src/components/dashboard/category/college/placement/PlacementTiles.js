import user from '../images/User.svg';
import Intern from './Intern';
import InternArray from './InternData';
import Job from './Job';
import JobArray from './JobData';

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
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            {InternArray.map(interntile => (
                                <Intern 
                                    img={interntile.img}
                                    href={interntile.href}
                                    title={interntile.title}
                                    desc={interntile.desc}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="front-container">
                        
                        <header className="section-header">
                            <h3>Placement /Job</h3>
                            <div className="divider-line"></div>
                        </header>

                        <div className="front-row">

                            {JobArray.map(jobtile => (
                                <Job 
                                    img={jobtile.img}
                                    href={jobtile.href}
                                    title={jobtile.title}
                                    desc={jobtile.desc}
                                />
                            ))}

                        </div>

                    </div>
                </section>
            </div>
        </main>
    )
}

export default PlacementFront;