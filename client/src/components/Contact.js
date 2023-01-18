import React from 'react';
import topRight from '../images/contact-top-right-v3.png';
import ContactPage from '../images/Contact.svg';
import ContactWrapper from './style/Contact.style';

const Contact = () => {
  return (
    <ContactWrapper>
        <div id="contact" class="contact-us section">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                <div class="section-heading" data-aos="fade-right" data-aos-duration="900">
                    <h4>Get In Touch With Us <em>Now</em></h4>
                    <div class="line-dec"></div>
                </div>
                </div>
                <div class="col-lg-12">
                <form id="contact" action="" method="post" style={{backgroundImage : `url(${topRight})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top right'}} data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
                    <div class="row">
                    <div class="col-lg-5">
                        <div id="map">
                            <img src={ContactPage}></img>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="fill-form">
                        <div class="row">
                            <div class="col-lg-6">
                            <fieldset>
                                <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                            </fieldset>
                            <fieldset>
                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                            </fieldset>
                            <fieldset>
                                <input type="subject" name="subject" id="subject" placeholder="Subject" autocomplete="on" />
                            </fieldset>
                            </div>
                            <div class="col-lg-6">
                            <fieldset>
                                <textarea name="message" type="text" class="form-control" id="message" placeholder="Message" required=""></textarea>  
                            </fieldset>
                            </div>
                            <div class="col-lg-12">
                            <fieldset>
                                <button type="submit" id="form-submit" class="main-button ">Send Message Now</button>
                            </fieldset>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
  </ContactWrapper>
  )
}

export default Contact;