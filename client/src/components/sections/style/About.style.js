import styled from 'styled-components';

const AboutWrapper = styled.div`
  
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
    height: 3px;
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
    text-align: justify; 
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
  
  @media only screen and (max-width: 1403px){
    .container{
      padding-top: 40px;
    }
  }
  
  @media (max-width: 992px) {

    .about-left-image img {
      margin-right: 0px;
      margin-bottom: 45px;;
    }

    .section-heading{
      text-align: center;
    }

    .section-heading .line-dec{
      margin-left: 36%;
    }
    
  }

  @media (max-width: 769px){
    .section-heading .line-dec{
      margin-left: 31%;
    }
  }
  
  @media (max-width: 576px){

    .section-heading .line-dec{
      margin-left: 31%;
    }

    .info-post{
      padding: 20px;
    }
  }

  @media (max-width: 426px){
    .section-heading .line-dec{
      width: 100px;
      margin-left: 37%;
    }

    .about-right-content p{
      font-size: 12px;
    }

    .section-heading h4{
      font-size: 25px;
    }
  }
  
`

export default AboutWrapper;