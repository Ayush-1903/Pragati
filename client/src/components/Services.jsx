import React from 'react';
import web from '../images/web.png';
import task from '../images/task.png';
import website from '../images/website.png';
import chat from '../images/chat-group.png';
import ServiceWrapper from './style/Services.style';

const Services = () => {

  return (
    <ServiceWrapper>
        <div className='container'>
            <div data-aos="fade-right" data-aos-duration="900">
                <h1>Our Services</h1>
            </div>
            <div className='row' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                <div className='service'>
                    <img src={web}></img>
                    <h2>Website Tiles</h2>
                    <p>Get access to many website tiles in your dashboard and access them easily</p>
                </div>
                <div className='service'>
                    <img src={task}></img>
                    <h2>Todo-list</h2>
                    <p>List all your important tasks and track them daily with our todo-list to get more done</p>
                </div>
                <div className='service'>
                    <img src={website}></img>
                    <h2>Custom Tiles</h2>
                    <p>Add your custom website tiles and access them from your dashboard easily</p>
                </div>
                <div className='service'>
                    <img src={chat}></img>
                    <h2>Chat</h2>
                    <p>Chat with your members while working in a group project</p>
                </div>
                {/* <div className='service'>
                    <img src={subscription}></img>
                    <h2>Add Subscription</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className='service'>
                    <img src={subscription}></img>
                    <h2>Add Subscription</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div> */}
            </div>
        </div>
    </ServiceWrapper>
  )
}

export default Services