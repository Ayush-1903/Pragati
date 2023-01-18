import React, {useState} from 'react';
import PRACTICETiles from '../Tiles/practice/PRACTICETiles';
import DSATiles from '../Tiles/learn/dsa/DSATiles';
import WEBTiles from '../Tiles/learn/web/WEBTiles';
import DATATiles from '../Tiles/learn/datascience/DATATiles';
import PlacementTiles from '../Tiles/placement/PlacementTiles';
import FreelanceTiles from '../Tiles/freelance/FreelanceTiles'; 
import StudyTiles from '../Tiles/study/StudyTile';

const Nav = () => {

    const [active, setActive] = useState("MainTile");

    const navLink = document.querySelectorAll("li");

    navLink.forEach(element => {
        element.addEventListener("click", function() {
            navLink.forEach(a=>a.classList.remove("active-link"))

            this.classList.add("active-link");
        })
    })

    return (
        <div className="navdash">
            <div className="navleft" data-aos="fade-down" data-aos-duration="900" data-aos-delay="200">
                <ul>
                    <li><a>Learn <i className="fa fa-solid fa-caret-down"></i></a>
                        <ul className="drop-link">
                            <li className="sub-link"><a onClick={() => setActive("DSATile")}>Data Structures</a></li>
                            <li className="sub-link"><a onClick={() => setActive("WEBTile")}>Web Development</a></li>
                            <li className="sub-link"><a onClick={() => setActive("DATATile")}>Data Science & ML</a></li>
                        </ul>
                    </li>
                    <li className="active-link"><a onClick={() => setActive("MainTile")}>Practice</a></li>
                    <li><a onClick={() => setActive("PlacementTile")}>Internship/Placement</a></li>
                    <li><a onClick={() => setActive("FreelanceTile")} >Freelancing</a></li>
                    <li><a onClick={() => setActive("StudyTile")} >Higher Study</a></li>
                    <li><a onClick={() => setActive("InterviewTile")} >Interview</a></li>
                </ul>
            </div>
            {active === "MainTile" && <PRACTICETiles />}
            {active === "DSATile" && <DSATiles />}
            {active === "WEBTile" && <WEBTiles />}
            {active === "DATATile" && <DATATiles />}
            {active === "PlacementTile" && <PlacementTiles />}
            {active === "FreelanceTile" && <FreelanceTiles />}
            {active === "StudyTile" && <StudyTiles />}
        </div>
    )
}

export default Nav;