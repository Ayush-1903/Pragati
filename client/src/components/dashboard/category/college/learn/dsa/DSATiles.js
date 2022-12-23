import user from '../../images/User.svg';
import ac from '../../images/AC.jpg';
import lb from '../../images/GFG.png';
import harry from '../../images/Harry.jpg';
import ab from '../../images/AB.jpg';
import DSA from './DSA';
import DSAArray from './DSAData';
import DSAYT from './DSAYT';
import DSAYTArray from './DSAYTData';

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
                            <h3>Data Structures and Algorithms (DSA)</h3>
                            <div className="divider-line"></div>
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
            
                            {DSAArray.map(dsatile => (
                                <DSA 
                                    img = {dsatile.img}
                                    title = {dsatile.title}
                                    desc = {dsatile.desc}
                                    href = {dsatile.href}
                                />
                            ))}

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>DSA YouTube Channels</h3>
                            <div className="divider-line"></div>
                        </header>

                        <div className="front-row">

                            {DSAYTArray.map(dsayttile => (
                                <DSAYT 
                                    img = {dsayttile.img}
                                    title = {dsayttile.title}
                                    desc = {dsayttile.desc}
                                    href = {dsayttile.href}
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