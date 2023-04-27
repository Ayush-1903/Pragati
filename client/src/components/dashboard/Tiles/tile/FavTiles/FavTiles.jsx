import React from 'react';
import FavTile from './FavTile';
import Heading from '../../heading/Heading';
import { Toaster } from 'react-hot-toast';

const FavTiles = ({ title, data}) => {
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
                                <FavTile
                                    description = {tile.data.description}
                                    title = {tile.data.title}
                                    link = {tile.data.link}
                                    image = {tile.data.image}
                                    filter = {tile.data.filter}
                                />
                            ))}
                            <Toaster
                                position="bottom-right"
                                toastOptions={{
                                style: {
                                    fontSize: '1rem',
                                },
                                }}
                            />  
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default FavTiles