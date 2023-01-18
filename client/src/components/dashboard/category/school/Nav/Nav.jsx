import React, {useState} from 'react';
import JEENEETTiles from '../tiles/jee-neet/JEENEETTiles';
import COACHINGTiles from '../tiles/coaching/COACHINGTiles';
const Nav = () => {

    const [active, setActive] = useState("JEETile");

    const navLink = document.querySelectorAll("li");

    navLink.forEach(element => {
        element.addEventListener("click", function() {
            navLink.forEach(a=>a.classList.remove("active-link"))

            this.classList.add("active-link");
        })
    })

    return (
        <div className="navdash">
            <div className="navleft">
            <ul>
                <li><a>Competitive <i className="fa fa-solid fa-caret-down"></i></a>
                    <ul className="drop-link">
                        <li className="sub-link"><a onClick={() => setActive("JEETile")}>JEE</a></li>
                        <li className="sub-link"><a onClick={() => setActive("WEBTile")}>NEET</a></li>
                    </ul>
                </li>
                <li><a>Coaching <i className="fa fa-solid fa-caret-down"></i></a>
                    <ul className="drop-link">
                        <li className="sub-link"><a onClick={() => setActive("COACHINGTile")}>JEE</a></li>
                        <li className="sub-link"><a onClick={() => setActive("WEBTile")}>NEET</a></li>
                    </ul>
                </li>
            </ul>   
        </div>
        {active === "JEETile" && <JEENEETTiles />}
        {active === "COACHINGTile" && <COACHINGTiles />}
        </div>
    )
}

export default Nav;