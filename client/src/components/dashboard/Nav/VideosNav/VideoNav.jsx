import React, {useState, useEffect} from 'react';
import Tiles from '../../Tiles/tile/WebTiles/Tiles';
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../../Tiles/firebase-config';

const VideoNav = () => {

    const[ytData, setytData] = useState([]);

    const [category, setCategory] = useState("practicedsa");
    const [items, setItems] = useState("link");

    useEffect(() => {
        getWebsite()
    }, [category,items])

    useEffect(() => {
        console.log(ytData);
    }), [ytData]

    function getWebsite(){

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
              setytData(results);
            });
          })
          .catch((error) => console.log(error.message));
      }
      

    const [active, setActive] = useState("PracticeTile");

    const [mobileMenu, setMobileMenu] = useState(false);

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
                <ul className= {mobileMenu ? "mobile-nav" : "nav"}>
                    <li><a>Learn <i className="fa fa-solid fa-caret-down"></i></a>
                        <ul className="drop-link">
                            <li className="sub-link"><a onClick={() => {setActive("APTITile");setCategory("aptitude"); setItems("link")}}>Aptitude</a></li>
                            <li className="sub-link"><a onClick={() => {setActive("DSATile");setCategory("datastructure"); setItems("link")}}>Data Structures</a></li>
                            <li className="sub-link"><a onClick={() => {setActive("WEBTile");setCategory("webDevelopment"); setItems("link")}}>Web Development</a></li>
                            <li className="sub-link"><a onClick={() => {setActive("DATATile"); setCategory("datascienceandml"); setItems("link")}}>Data Science & ML</a></li>
                        </ul>
                    </li>
                    <li className="active-link"><a onClick={() => {setActive("PracticeTile"); setCategory("practicedsa"); setItems("link")}}>DSA Practice</a></li>
                    <li><a onClick={() => {setActive("InterviewTile"); setCategory("interview"); setItems("link")}} >Interview</a></li>
                    <li><a>Higher Study <i className="fa fa-solid fa-caret-down"></i></a>
                        <ul className="drop-link-study">
                            <li><a onClick={() => {setActive("GATETile");setCategory("gate"); setItems("link")}}>GATE</a></li>
                            <li><a onClick={() => {setActive("CATTile");setCategory("cat"); setItems("link")}}>CAT</a></li>
                        </ul>
                    </li>
                    <li><a onClick={() => {setActive("FreelanceTile"); setCategory("freelancing"); setItems("link")}} >Freelancing</a></li>
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
            
            {active === "APTITile" && <Tiles filter= "Aptitude YouTube Channels" data={ytData}/>}
            {active === "PracticeTile" && <Tiles filter= "DSA Youtube Channels" data={ytData}/>}
            {active === "FreelanceTile" && <Tiles filter="Freelancing YouTube Channels" data={ytData}/>}
            {active === "InterviewTile" && <Tiles filter="Interview YouTube Channels" data={ytData}/>}
            {active === "WEBTile" && <Tiles filter= "Web Dev YouTube Channels" data={ytData}/>}
            {active === "DATATile" && <Tiles filter= "ML YouTube Channels" data={ytData}/>}
            {active === "DSATile" && <Tiles filter= "DSA YouTube Channels" data={ytData}/>}
            {active === "GATETile" && <Tiles filter= "GATE YouTube Channels" data={ytData}/>}
            {active === "CATTile" && <Tiles filter= "CAT YouTube Channels" data={ytData}/>}
        </div>
    )
}

export default VideoNav;