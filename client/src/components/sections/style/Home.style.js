import styled from 'styled-components';

const HomeWrapper = styled.div`

  a {
    text-decoration: none !important;
  }

  .main-banner {
    padding: 100px 0px 0px 0px;
    position: relative;
  }
  
  .left-content h6 {
    text-transform: capitalize;
    font-size: 20px;  
    font-weight: 700;
    color: #4da6e7;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  
  .left-content h2 {
    position: relative;
    font-weight: 700;
    font-size: 50px;
    color: #2a2a2aee;
    margin-bottom: 20px;
  }
  
  .left-content p {
    margin-bottom: 30px;
    color: #898989;
    font-weight: 500;
  }

  .right-image video{
    max-width: 700px;
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

  @media only screen and (max-width: 1440px){
    .right-image video{
      max-width: 650px;
    }

    .left-content h2 {
      font-size: 40px;
    }
  } 

  @media only screen and (max-width: 1320px){
    .right-image video{
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 1320px){
    .right-image video{
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 991px){
    .right-image video{
      max-width: 700px;
      align-item: center;
      margin-top: 30px;
    }

    .left-content h6, h2, p, div{
      text-align: center;
    }
    
  }

  @media only screen and (max-width: 768px){
    .right-image video{
      max-width: 500px;
    }

    .left-content h6{
      font-size: 15px;
    }

    .left-content h2 {
      font-size: 35px;
    }

  }

  @media only screen and (max-width: 510px){
    .right-image video{
      max-width: 450px;
    }
  }

  @media only screen and (max-width: 426px){
    .main-banner {
      padding: 60px 0px 0px 0px;
    }

    .left-content h2 {
      font-size: 25px;
    }
    
    .left-content p {
      font-size: 12px;
    }

    .right-image video{
      max-width: 350px;
    }

    .border-first-button a{
      font-size: 12px;
      padding: 8px 15px !important;
    }

  }

  @media only screen and (max-width: 376px){
    .right-image video{
      max-width: 280px;
    }
  }

`

export default HomeWrapper;