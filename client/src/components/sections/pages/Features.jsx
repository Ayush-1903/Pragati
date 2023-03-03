import React from 'react';
import dark from '../images/Dark.mp4';
import custom from '../images/Custom.mp4';
import todo from '../images/Todo.mp4';
import wink from '../images/wink.png';
import ServiceWrapper from '../style/Features.style';

const Services = () => {

    return (
        <ServiceWrapper>
            <div className='container'>
                <div data-aos="fade-right" data-aos-duration="900">
                    <h1>Our Features</h1>
                    <h6>Hover over the laptops <img className='wink' src={wink}/></h6>
                </div>
                <div className='row' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                    <div className='service'>
                        <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} loop>
                            <source src={custom} type='video/mp4'/>
                        </video>
                        <h2>Custom Tiles</h2>
                        <p>Add your own custom tiles in the dashboard to access them easily and personalize your learning experience.</p>
                    </div>
                    <div className='service'>
                        <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} loop>
                            <source src={dark} type='video/mp4'/>
                        </video>
                        <h2>Dark Mode</h2>
                        <p>Switch to dark mode with just a toggle. It helps to reduce the amount of strain on your eyes, and give better experience.</p>
                    </div>
                    <div className='service'>
                        <video onMouseOver={event => event.target.play()} onMouseOut={event => event.target.pause()} loop>
                            <source src={todo} type='video/mp4'/>
                        </video>
                        <h2>Todo List</h2>
                        <p>List all your important tasks in the integrated todo list and track them daily in your dashboard easily.</p>
                    </div>
                </div>
            </div>
        </ServiceWrapper>
    )
}

export default Services;