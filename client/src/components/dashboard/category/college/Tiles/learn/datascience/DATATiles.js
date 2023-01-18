import user from '../../images/User.svg';
import DataScience from './DataScience';
import ScienceArray from './DataScienceData';

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
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                            
                            {ScienceArray.map(sciencetile => (
                                <DataScience 
                                    img = {sciencetile.img}
                                    href = {sciencetile.href}
                                    title = {sciencetile.title}
                                    desc = {sciencetile.desc}
                                />
                            ))}

                        </div>
                    </div>

                </section>
            </div>
        </main>
    )
}

export default DSAFront;