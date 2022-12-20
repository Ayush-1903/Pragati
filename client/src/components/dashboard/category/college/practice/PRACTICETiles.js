import user from '../images/User.svg';
import leetcode from '../images/LeetCode.png';
import codechef from '../images/Codechef.png';
import codeforce from '../images/Codeforces.png';
import hackerearth from '../images/Hackerearth.png';
import hackerrank from '../images/Hackerrank.png';
import gfg from '../images/GFG.png';
import clist from '../images/clist.jpg';
import '../../../Dashboard.scss';

function Front() {

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
                            <h3>Practice DSA</h3>
                            <div className="divider-line"></div>
                        </header>

                        <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">

                            <div className="main-box">
                                <a href="https://leetcode.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="navdot">
                                            <li><a><i className="fa fa-ellipsis-v"></i></a>
                                                <div className="dotdrop-link">
                                                    <li className="subdot-link"><a href='#'>Favourite<i class="fa fa-solid fa-star"></i></a></li>
                                                </div>
                                            </li>
                                        </div> */}
                                        <div className="icon"><img alt="LeetCode" src={leetcode}/></div>
                                        <h4 className="title">LeetCode</h4>
                                        <p className="description">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://practice.geeksforgeeks.org/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="dots">
                                            <a onClick href='#' id="dot"><i  className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            <div className="dropdown-content">
                                                <a href="#home">Add to Favourites</a>   
                                            </div>
                                        </div> */}
                                        <div className="icon"><img alt="Codeforcess" src={gfg}/></div>
                                        <h4 className="title">GFG Practice</h4>
                                        <p className="description">GFG platform has been designed for every geek wishing to expand their knowledge, share their knowledge and is ready to grab their dream job.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.hackerrank.com/domains/data-structures" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="dots">
                                            <a onClick href='#' id="dot"><i  className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            <div className="dropdown-content">
                                                <a href="#home">Add to Favourites</a>   
                                            </div>
                                        </div> */}
                                        <div className="icon"><img alt="HackerRank" src={hackerrank}/></div>
                                        <h4 className="title">HackerRank</h4>
                                        <p className="description">HackerRank is a technology hiring platform that is the standard for assessing developer skills for over 2800 companies around the world.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.hackerearth.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="dots">
                                            <a onClick href='#' id="dot"><i  className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            <div className="dropdown-content">
                                                <a href="#home">Add to Favourites</a>   
                                            </div>
                                        </div> */}
                                        <div className="icon"><img alt="Hackerearth" src={hackerearth}/></div>
                                        <h4 className="title">Hackerearth</h4>
                                        <p className="description">A Indian software company headquartered in San Francisco, US, that provides enterprise software that helps organisations with their technical hiring.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.codechef.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="dots">
                                            <a onClick href='#' id="dot"><i  className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            <div className="dropdown-content">
                                                <a href="#home">Add to Favourites</a>   
                                            </div>
                                        </div> */}
                                        <div className="icon"><img alt="Codechef" src={codechef}/></div>
                                        <h4 className="title">Codechef</h4>
                                        <p className="description">CodeChef is one of the world’s largest and popular global competitive programming platforms preferred by student & professional programmers.</p>
                                    </div>
                                </a>
                            </div>

                        
                            <div className="main-box">
                                <a href="https://codeforces.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="dots">
                                            <a onClick href='#' id="dot"><i  className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            <div className="dropdown-content">
                                                <a href="#home">Add to Favourites</a>   
                                            </div>
                                        </div> */}
                                        <div className="icon"><img alt="Codeforcess" src={codeforce}/></div>
                                        <h4 className="title">CodeForces</h4>
                                        <p className="description">Codeforces' aim is to offer you a convenient platform to organize, run and discuss programming contests.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://clist.by/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        {/* <div className="dots">
                                            <a onClick href='#' id="dot"><i  className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                            <div className="dropdown-content">
                                                <a href="#home">Add to Favourites</a>   
                                            </div>
                                        </div> */}
                                        <div className="icon"><img alt="CLIST" src={clist}/></div>
                                        <h4 className="title">CLIST</h4>
                                        <p className="description">Events of competitive programming going on at different platforms at one place. Also coders, standings and more.</p>
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

export default Front;