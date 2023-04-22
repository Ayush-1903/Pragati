import React from "react";
import Tile from "./Tile";
import Heading from "../../heading/Heading";

const Tiles = ({ title, data}) => {

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
                                <Tile
                                    description = {tile.data.description}
                                    title = {tile.data.title}
                                    link = {tile.data.link}
                                    image = {tile.data.image}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Tiles;
