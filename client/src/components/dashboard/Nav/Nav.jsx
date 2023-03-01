import React, {useState} from 'react';
import Tiles from '../Tiles/tile/Tiles';
import InterviewData from '../Tiles/data/TileData/InterviewData';
import InterviewYT from '../Tiles/data/YoutubeData/InterviewYT';
import GateData from '../Tiles/data/TileData/GateData';
import CatData from '../Tiles/data/TileData/CatData';
import DataScienceData from '../Tiles/data/TileData/DataScienceData';
import MlYTData from '../Tiles/data/YoutubeData/MlYTData';
import DSAData from '../Tiles/data/TileData/DSAData';
import PracticeYT from '../Tiles/data/YoutubeData/PracticeYT';
import DSAYTData from '../Tiles/data/YoutubeData/DSAYTData';
import WebData from '../Tiles/data/TileData/WebData';
import WebYTData from '../Tiles/data/YoutubeData/WebYTData';
import PracticeData from '../Tiles/data/TileData/PracticeData';
import InternData from '../Tiles/data/TileData/InternData';
import JobData from '../Tiles/data/TileData/JobData';
import FreelanceData from '../Tiles/data/TileData/FreelanceData';
import YTFreelance from '../Tiles/data/YoutubeData/YTFreelance';
import AptiData from '../Tiles/data/TileData/AptiData';
import AptiYT from '../Tiles/data/YoutubeData/AptiYT';

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
            <div className="navleft">
                <ul>
                    <li><a>Learn <i className="fa fa-solid fa-caret-down"></i></a>
                        <ul className="drop-link">
                            <li className="sub-link"><a onClick={() => setActive("APTITile")}>Aptitude</a></li>
                            <li className="sub-link"><a onClick={() => setActive("DSATile")}>Data Structures</a></li>
                            <li className="sub-link"><a onClick={() => setActive("WEBTile")}>Web Development</a></li>
                            <li className="sub-link"><a onClick={() => setActive("DATATile")}>Data Science & ML</a></li>
                        </ul>
                    </li>
                    <li className="active-link"><a onClick={() => setActive("MainTile")}>DSA Practice</a></li>
                    <li><a onClick={() => setActive("PlacementTile")}>Internship/Placement</a></li>
                    <li><a onClick={() => setActive("StudyTile")} >Higher Study</a></li>
                    <li><a onClick={() => setActive("InterviewTile")} >Interview</a></li>
                    <li><a onClick={() => setActive("FreelanceTile")} >Freelancing</a></li>
                </ul>
            </div>
            {active === "MainTile" && <Tiles title="Practice DSA" data={PracticeData} lowertitle="DSA YouTube Channels" lowerdata={PracticeYT}/>}
            {active === "DSATile" && <Tiles title= "Data Structures and Algorithms (DSA)" data={DSAData} lowertitle="DSA YouTube Channels" lowerdata={DSAYTData}/>}
            {active === "WEBTile" && <Tiles title= "Web Development" data={WebData} lowertitle="Web Development YouTube Channels" lowerdata={WebYTData}/>}
            {active === "APTITile" && <Tiles title= "Aptitude" data={AptiData} lowertitle="Aptitude YouTube Channels" lowerdata={AptiYT}/>}
            {active === "DATATile" && <Tiles title="Data Science & ML" data={DataScienceData} lowertitle="ML YouTube Channels" lowerdata={MlYTData}/>}
            {active === "PlacementTile" && <Tiles title="Internship" data={InternData} lowertitle="Find Jobs" lowerdata={JobData}    />}
            {active === "FreelanceTile" && <Tiles title="Freelancing" data={FreelanceData} lowertitle="Freelancing YouTube Channels" lowerdata={YTFreelance}/>}
            {active === "StudyTile" && <Tiles title="GATE" data={GateData} lowertitle="CAT" lowerdata={CatData}/>}
            {active === "InterviewTile" && <Tiles title="Interview" data={InterviewData} lowertitle="Interview YouTube Channels" lowerdata={InterviewYT}/>}
        </div>
    )
}

export default Nav;