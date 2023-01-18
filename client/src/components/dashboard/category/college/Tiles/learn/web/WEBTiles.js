import user from '../../images/User.svg';
import WebArray from './WebData';
import Web from './Web';
import WebYT from './WebYT';
import WebYTArray from './WebYTData';

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
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            {WebArray.map(webtile => (
                                <Web 
                                    img={webtile.img}
                                    title={webtile.title}
                                    href={webtile.href}
                                    desc={webtile.desc}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>Web Dev YouTube Channels</h3>
                            <div className="divider-line"></div>
                        </header>

                        <div className="front-row">
                            
                            {WebYTArray.map(webyttile => (
                                <WebYT 
                                    img={webyttile.img}
                                    title={webyttile.title}
                                    href={webyttile.href}
                                    desc={webyttile.desc}
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