import React, {useEffect, useState} from 'react';
import Tiles from '../../Tiles/tile/WebTiles/Tiles';
import { collection, doc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../../Tiles/firebase-config';

const Nav = () => {

    const[tileData, setTileData] = useState([]);
    
    const [active, setActive] = useState("PracticeTile");

    const [mobileMenu, setMobileMenu] = useState(false);

    const [category, setCategory] = useState("practicedsa");

    const [items, setItems] = useState("items");
    
    const [activeLink, setActiveLink] = useState("Practice");

    useEffect(() => {
        getWebsite()
    }, [category,items])

    useEffect(() => {
        console.log(tileData);
    }), [tileData]

    function getWebsite() {
        const webData = collection(db, "websites", category, items);
        getDocs(webData)
          .then((res) => {
            const tiles = res.docs.map((doc) => {
              const data = doc.data();
              const id = doc.id;
              const imageUrl = data.image;
              return {
                data: { ...data, image: null },
                id: id,
                imageUrl: imageUrl,
              };
            });
            Promise.all(
              tiles.map((tile) =>
                getDownloadURL(ref(getStorage(), tile.imageUrl))
                  .then((url) => ({ ...tile, data: { ...tile.data, image: url } }))
                  .catch((error) => console.log(error.message))
              )
            ).then((results) => {
              setTileData(results);
            });
          })
          .catch((error) => console.log(error.message));
    }   

    return (
        <div className="navdash">
            <div className="navleft">
                <ul className= {mobileMenu ? "mobile-nav" : "nav"}>
                    <li className={activeLink === "Learn" ? "active-link" : ""} onClick={() => setActiveLink("Learn")}><a>Learn <i className="fa fa-solid fa-caret-down"></i></a>
                        <ul className="drop-link">
                            <li className="sub-link"><a onClick={() => {setActive("APTITile"); setCategory("aptitude"); setItems("items")}}>Aptitude</a></li>
                            <li className="sub-link"><a onClick={() => {setActive("DSATile");setCategory("datastructure"); setItems("items")}}>Data Structures</a></li>
                            <li className="sub-link"><a onClick={() => {setActive("WEBTile"); setCategory("webDevelopment"); setItems("items")}}>Web Development</a></li>
                            <li className="sub-link"><a onClick={() => {setActive("DATATile"); setCategory("datascienceandml"); setItems("items")}}>Data Science & ML</a></li>
                        </ul>
                    </li>
                    <li className={activeLink === "Practice" ? "active-link" : ""} onClick={() => setActiveLink("Practice")}><a onClick={ () => {setActive("PracticeTile"); setCategory("practicedsa");setItems("items")}}>DSA Practice</a></li>
                    <li className={activeLink === "Intern" ? "active-link" : ""} onClick={() => setActiveLink("Intern")}><a onClick={() => {setActive("PlacementTile"); setCategory("internship");setItems("items")}}>Internship</a></li>
                    <li className={activeLink === "Job" ? "active-link" : ""} onClick={() => setActiveLink("Job")}><a onClick={() => {setActive("JobTile"); setCategory("jobplatform"); setItems("items")}} >Job Search</a></li>
                    <li className={activeLink === "Interview" ? "active-link" : ""} onClick={() => setActiveLink("Interview")}><a onClick={() => {setActive("InterviewTile"); setCategory("interview"); setItems("items")}} >Interview</a></li>
                    <li className={activeLink === "Study" ? "active-link" : ""} onClick={() => setActiveLink("Study")}><a>Higher Study <i className="fa fa-solid fa-caret-down"></i></a>
                        <ul className="drop-link-study">
                            <li><a onClick={() => {setActive("GATETile");setCategory("gate"); setItems("items")}}>GATE</a></li>
                            <li><a onClick={() => {setActive("CATTile");setCategory("cat"); setItems("items")}}>CAT</a></li>
                        </ul>
                    </li>
                    <li className={activeLink === "Freelance" ? "active-link" : ""} onClick={() => setActiveLink("Freelance")}><a onClick={() => {setActive("FreelanceTile"); setCategory("freelancing"); setItems("items")}} >Freelancing</a></li>
                </ul>

                <button className='menu-trigger' onClick={() => setMobileMenu(!mobileMenu)}>    
                    {mobileMenu ? (
                        <i className='bx bx-x-circle'></i>
                        ) : ( 
                        <i className='bx bx-menu'></i>
                        )
                    }
                </button>

            </div>
            
            {active === "APTITile" && <Tiles title= "Aptitude" data={tileData}/>}
            {active === "PracticeTile" && <Tiles title= "Practice DSA" data={tileData}/>}
            {active === "FreelanceTile" && <Tiles title="Freelancing" data={tileData}/>}
            {active === "InterviewTile" && <Tiles title="Interview" data={tileData}/>}
            {active === "WEBTile" && <Tiles title= "Web Development" data={tileData}/>}
            {active === "DATATile" && <Tiles title= "Data Science and ML" data={tileData}/>}
            {active === "PlacementTile" && <Tiles title= "Internship" data={tileData}/>}
            {active === "JobTile" && <Tiles title= "Job Search" data={tileData}/>}
            {active === "DSATile" && <Tiles title= "Data Structures and Algorithms" data={tileData}/>}
            {active === "GATETile" && <Tiles title= "GATE" data={tileData}/>}
            {active === "CATTile" && <Tiles title= "CAT" data={tileData}/>}
        </div>
    )
}

export default Nav;