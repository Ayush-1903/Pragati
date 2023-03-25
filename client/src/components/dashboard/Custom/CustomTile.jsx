import React, {useState} from 'react';
import Popup from './Popup';
import Custom from './Custom';

const Fav = () => {
    
    const [buttonPopup, setButtonPopup] = useState(false); 

    const [tiles, setTiles] = useState([]);

    function addTile(newTile) {
        setTiles(prevTiles => {
            return[...prevTiles, newTile];
        })
    }

    function deleteTile(id) {
        setTiles(prevTiles => {
            return prevTiles.filter((tileItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className='custom-tiles'>
            <section id="services" className="section-bg">
                <div className="front-container">
                    <header className="section-header" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
                        <h3>Your Custom Tiles</h3>  
                        <div className="divider-line"></div>
                    </header>
                    <div className="main-box custom-a" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                        <a onClick={() => setButtonPopup(true)} style={{textDecoration : "none"}}>
                            <div className="box custom-container">
                                <div className="icon"><i class='bx bx-plus add-icon'></i></div>
                                <h4 className="title">Add Custom Tile</h4>
                                {/* <p className="description"></p> */}
                            </div>
                        </a>
                    </div>
                    <div className="front-row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                        {tiles.map((tileItem, index) => {
                            return (
                                <Custom 
                                    key={index}
                                    id={index}
                                    title={tileItem.title}
                                    url={tileItem.url}
                                    onDelete = {deleteTile}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <Popup onAdd={addTile} trigger={buttonPopup} setTrigger={setButtonPopup} />
        </div>
  )
}

export default Fav;