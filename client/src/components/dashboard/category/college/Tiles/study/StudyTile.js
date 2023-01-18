import user from '../images/User.svg';
import Gate from './Gate';
import GateArray from './GateData';
import Cat from './Cat';
import CatArray from './CatData';



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
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            {GateArray.map(gatetile => (
                                <Gate 
                                    img={gatetile.img}
                                    href={gatetile.href}
                                    title={gatetile.title}
                                    desc={gatetile.desc}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>CAT</h3>
                            <div className="divider-line"></div>
                        </header>

                        <div className="front-row">

                            {CatArray.map(cattile => (
                                <Cat 
                                    img={cattile.img}
                                    href={cattile.href}
                                    title={cattile.title}
                                    desc={cattile.desc}
                                />
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default StudyFront;