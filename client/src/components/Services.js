import React from 'react';
import email from '../images/email.png';
import budget from '../images/budget.png';
import subscription from '../images/subscription.png';
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
                    <img src={email}></img>
                    <h2>Notification</h2>
                    <p>Get Notifications regarding your Subscription dates in your email</p>
                </div>
                <div className='service'>
                    <img src={budget}></img>
                    <h2>Expense Tracking</h2>
                    <p>Keep track of your expennses for your subscriptions</p>
                </div>
                <div className='service'>
                    <img src={subscription}></img>
                    <h2>Add Subscription</h2>
                    <p>Users can add new subscriptions easily</p>
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