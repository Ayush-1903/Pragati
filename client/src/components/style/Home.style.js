import styled from 'styled-components';

const HomeWrapper = styled.div`

img {
  width: 100%;
  overflow: hidden;
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

.main-banner {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    padding: 226px 0px 0px 0px;
    position: relative;
    overflow: hidden;
  }
  
  .main-banner:after {
    content: '';
    background-image: url(./images/slider-left-dec.jpg);
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 60px;
    width: 262px;
    height: 625px;
    z-index: 1;
  }
  
  .main-banner:before {
    content: '';
    /* background-image: url(./images/slider-right-dec.jpg); */
    background-repeat: no-repeat;
    position: absolute;
    right: 0;
    top: 60px;
    width: 1159px;
    height: 797px;
    z-index: -1;
  }
  
  .main-banner .left-content {
    margin-right: 15px;
  }
  
  .main-banner .left-content h6 {
    text-transform: capitalize;
    font-size: 20px;  
    font-weight: 700;
    color: #4da6e7;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  
  .main-banner .left-content h2 {
    z-index: 2;
    position: relative;
    font-weight: 700;
    font-size: 50px;
    color: #2a2a2aee;
    margin-bottom: 20px;
  }
  
  .main-banner .left-content p {
    margin-bottom: 30px;
    margin-right: 45px;
    color: #898989;
    font-weight: 500;
  }
  
  .main-banner .right-image {
    text-align: right;
    position: relative;
    z-index: 20;
  }
  
  .main-banner .right-image img {
    max-width: 593px;
  }

  .border-first-button a {
    display: inline-block !important;
    padding: 10px 20px !important;
    color: #4da6e7 !important;
    border: 1px solid #4da6e7 !important;
    border-radius: 23px;
    font-weight: 500 !important;
    letter-spacing: 0.3px !important;
    transition: all .5s;
  }
  
  .border-first-button a:hover {
    background-color: #4da6e7;
    color: #fff !important;
  }

  .show-up {
    position: relative;
    z-index: 10;
  }
  
`

export default HomeWrapper;