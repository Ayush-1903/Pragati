import React from 'react';
import Heading from '../../heading/Heading';
import CustomTile from './CustomTile';


const CustomTiles = ({ title, data}) => {

    return (
        <main>
            <div className="main-container">
                <Heading />
                <section id="services" className="section-bg">
                    <div className="front-container">
                        <header
                            className="section-header"
                            data-aos="fade-right"
                            data-aos-duration="500"
                            data-aos-delay="100"
                        >
                            <h3>{title}</h3>
                            <div className="divider-line"></div>
                        </header>
                        
                        <div
                            className="front-row"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="200"
                        >
                            {data.map((tile) => (
                                <CustomTile
                                    title = {tile.data.title}
                                    url = {tile.data.url}
                                    favIconUrl = {tile.data.favIconUrl}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
  )
}

export default CustomTiles