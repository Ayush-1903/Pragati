import user from '../../images/User.svg';
import gfg from '../../images/GFG.png';
import udemy from '../../images/udemy.png';
import ninja from '../../images/Coding-Ninjas.png';
import cb from '../../images/CB.png';
import pep from '../../images/pep.png';
import cm from '../../images/CM.png';
import ac from '../../images/AC.jpg';
import lb from '../../images/GFG.png';
import harry from '../../images/Harry.jpg';
import ab from '../../images/AB.jpg';
import programiz from '../../images/Programiz.svg';
import tp from '../../images/tutorialspoint.jpg';
import intern from '../../images/Internshala.png';
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
                            <h3>Data Structures and Algorithms (DSA)</h3>
                            <div className="divider-line"></div>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                            <div className="main-box">
                                <a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="GFG" src={gfg}/></div>
                                        <h4 className="title">GeeksforGeeks</h4>
                                        <p className="description">GFG platform has been designed for every geek wishing to expand their knowledge, share their knowledge and is ready to grab their dream job.</p>
                                    </div>
                                </a>
                            </div>


                            <div className="main-box">
                                <a href="https://www.udemy.com/courses/search/?src=ukw&q=Data+Structures+and+Algorithms" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Udemy" src={udemy}/></div>
                                        <h4 className="title">Udemy</h4>
                                        <p className="description">An online learning and teaching marketplace with over 185000 courses and 49 million students. Learn programming, data science and more.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.codingninjas.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coding Ninja" src={ninja}/></div>
                                        <h4 className="title">Coding Ninjas</h4>
                                        <p className="description">We teach 17+ Programming courses in Foundation, Data & Development courses such as Machine Learning, Data Science, Web Development, etc.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.freecodecamp.org/news/tag/data-structures/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Free Code camp" src={fcc}/></div>
                                        <h4 className="title">freeCodeCamp.org</h4>
                                        <p className="description">As a nonprofit organization, freeCodeCamp provides coding courses free of charge to anyone who wants to take them.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://codingblocks.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coding Blocks" src={cb}/></div>
                                        <h4 className="title">Coding Blocks</h4>
                                        <p className="description">At Coding Blocks, we strive to increase student interest by providing hands on practical training on every concept taught in the classroom.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.coursera.org/courses?query=data%20structures%20and%20algorithms" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coursera" src={coursera}/></div>
                                        <h4 className="title">Coursera</h4>
                                        <p className="description">Global online learning platform that offers anyone, anywhere access to online courses and degrees from world-class universities and companies.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.pepcoding.com/studentSection" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Pepcoding" src={pep}/></div>
                                        <h4 className="title">Pepcoding</h4>
                                        <p className="description">A platform for students where they get free content to study, contests to improve their coding skills, & placements in top-companies.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.codingminutes.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Coding Minutes" src={cm}/></div>
                                        <h4 className="title">Coding Minutes</h4>
                                        <p className="description">We provide top-notch learning content and on in-demand programming skills covering programming languages, data structures & algorithms, etc.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.programiz.com/dsa" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Programiz" src={programiz}/></div>
                                        <h4 className="title">Programiz</h4>
                                        <p className="description">Our DSA tutorial will guide you to learn different types of data structures and algorithms and their implementations in Python, C, C++, and Java.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.tutorialspoint.com/data_structures_algorithms/index.htm" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Tutorials Point" src={tp}/></div>
                                        <h4 className="title">Tutorials Point</h4>
                                        <p className="description">Tutorials Point is a leading Ed Tech company striving to provide the best learning material on technical and non-technical subjects.</p>
                                    </div>
                                </a>
                            </div>

                            
                            <div className="main-box">
                                <a href="https://trainings.internshala.com/data-structures-algorithms-training/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Tutorials Point" src={intern}/></div>
                                        <h4 className="title">Internshala</h4>
                                        <p className="description">Internshala is India's no.1 internship and training platform with 40000+ paid internships in Engineering, MBA, media, law, arts, etc.</p>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="front-container">

                        <header className="section-header">
                            <h3>DSA YouTube Channels</h3>
                            <div className="divider-line"></div>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row">

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Apna College" src={ac}/></div>
                                        <h4 className="title">Apna College</h4>
                                        <p className="description">Here Shradha Didi and Aman Bhaiya will help you in finding your right college, career options, soft skills and will also help you learn to code.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="CodeWithHarry" src={harry}/></div>
                                        <h4 className="title">CodeWithHarry</h4>
                                        <p className="description">This Algorithms and Data Structures course will teach you everything you need to prepare for placements, interviews and logic building.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="CodeHelp - by Babbar" src={lb}/></div>
                                        <h4 className="title">CodeHelp - by Babbar</h4>
                                        <p className="description">This Channel aims to provide with Curated Education to Students who want to grow, improve, learn and do something Big in their life.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.youtube.com/playlist?list=PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="channel"><img alt="Anuj Bhaiya" src={ab}/></div>
                                        <h4 className="title">Anuj Bhaiya</h4>
                                        <p className="description">I'll teach you how to learn new Programming languages, help you understand Data Structures and Algorithms, and develop your soft skills.</p>
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