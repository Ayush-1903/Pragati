import styled from 'styled-components';

const AboutWrapper = styled.div`
#about {
    padding-top: 100px;
  }

  
a {
  text-decoration: none !important;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0px;
  margin-bottom: 0px;
}

p {
  font-size: 15px;
  line-height: 30px;
  font-weight: 300;
  color: #afafaf;
}

  .section-heading {
    position: relative;
    z-index: 2;
  }
  
  .section-heading h6 {
    font-size: 15px;
    font-weight: 700;
    color: #4da6e7;
    text-transform: uppercase;
    margin-bottom: 15px;
  }
  
  .section-heading h4 {
    color: #2a2a2a;
    font-size: 35px;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 25px;
  }
  
  .section-heading h4 em {
    font-style: normal;
    color: #4da6e7;
  }
  
  .section-heading .line-dec {
    width: 200px;
    height: 2px;
    background-color: #4da6e7;
  }
  
  
  .about-left-image img {
    margin-right: 45px;
    max-width: 600px;
  }
  
  .about-right-content p {
    margin-top: 30px;
    margin-bottom: 45px;
    color: #898989;
    font-weight: 500;
  }
  
  .row .about-icon{
    text-align: center;
    box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
    border-radius: 23px;
    background: #fff;
    padding: 20px 10px;
  }
  
  .row .about-icon img {
    max-width: 55px;  
    display: block;
    margin: 0 auto;
  }
  
  .row .about-icon a {
    margin-top: 10px;
    display: inline-block;
    font-size: 15px;
    font-weight: 600;
    color: #2a2a2a;
    transition: all .3s;
  }
  
  .row .about-icon span {
    font-size: 12px;
    font-weight: 500;
    color: #515151;
  }
  
  @media (max-width: 1200px) {
    .header-area .main-nav .logo h4 {
      font-size: 24px;
      z-index: 999;
    }
    .header-area .main-nav .logo h4 img {
      max-width: 25px;
      margin-left: 0px;
      z-index: 999;
    }
    .header-area .main-nav .nav li:last-child {
      padding-left: 20px;
    }
  }
  
  @media (max-width: 992px) {
    form#contact {
      overflow: hidden;
    }
    .header-area .main-nav .logo h4 {
      font-size: 20px;
      z-index: 999;
    }
    .main-banner .left-content {
      margin-right: 0px;
    }
    .main-banner {
      text-align: center;
      padding: 226px 0px 30px 0px;
    }
    .main-banner:before {
      display: none;
    }
    .main-banner .right-image {
      margin: 30px auto 0px auto;
      text-align: center;
    }
    .features-item {
      margin-bottom: 45px;
    }
    .last-features-item,
    .last-skill-item {
      margin-bottom: 0px !important;
    }
    .skill-item {
      margin-bottom: 30px;
    }
    .about-left-image img {
      margin-right: 0px;
      margin-bottom: 45px;;
    }
    .services .naccs .menu div {
      font-size: 15px;
      font-weight: 500;
    }
    .service-item {
      text-align: center;
    }
    .service-item .icon {
      margin-top: 0px;
      margin-bottom: 30px;
    }
    .about-us .left-image {
      margin-right: 30px;
      margin-left: 30px;
      margin-bottom: 45px;
    }
    .blog-posts {
      margin-left: 0px;
      margin-top: 30px;
    }
    .post-item {
      margin-bottom: 70px;
    }
    .our-portfolio .owl-nav {
      display: none !important;
    }
    .contact-info {
      margin-top: 60px;
    }
    form#contact {
      padding: 45px;
    }
  }
  
  @media (max-width: 767px) {
    .header-area .main-nav .logo h4 {
      font-size: 30px;
      z-index: 999;
    }
    .header-area .main-nav .logo h4 img {
      max-width: 30px;
      margin-left: 5px;
      z-index: 999;
    }
    .main-banner .info-stat {
      margin-bottom: 15px;
    }
    .service-item {
      text-align: center;
      padding: 30px;
    }
    .service-item .icon {
      float: none;
      margin-right: 0px;
      margin-bottom: 15px;
    }
    .service-item .right-content {
      display: inline-block;
    }
    .services .naccs .menu div .thumb {
      padding: 5px;
    }
    .services .icon img {
      margin: 0px;
    }
    .services ul.nacc li.active {
      padding: 45px;
    }
    .services .naccs .menu div  {
      font-size: 0px;
    }
    .services ul.nacc li .right-image img {
      float: none;
    }
    .our-portfolio .section-heading,
    .about-us .section-heading,
    .about-us .about-item,
    .about-us p,
    .about-us .main-green-button {
      text-align: center;
    }
    .our-portfolio .section-heading .line-dec {
      margin: 0 auto;
    }
    .our-services .section-heading {
      margin-left: 15px;
      margin-right: 15px;
    }
    .free-quote form input {
      margin-left: 0px;
      padding: 0px 30px;
    }
    .free-quote form button {
      margin-left: 0px;
      border-bottom-left-radius: 40px;
      border-top-right-radius: 0px;
    }
    .blog-posts {
      margin-left: 0px;
      margin-top: 30px;
    }
    .post-item {
      margin-bottom: 30px;
    }
    .post-item .thumb img {
      max-width: 140px;
    }
    .post-item .right-content p {
      display: none;
    }
    .about-us .about-item {
      margin-top: 15px;
    }
    form#contact {
      padding: 30px;
    }
  }
  
`

export default AboutWrapper;