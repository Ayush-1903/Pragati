import styled from 'styled-components';


const NavWrapper = styled.div`

  a {
    text-decoration: none !important;
  }

  .main-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90px;
    box-shadow: 0px 5px 8px rgba(0,0,0,0.03);
    background-color: #fff;
    transition: all .5s ease 0s;
  }

  .nav {
    display: flex;
    justify-content: flex-end;
    width: 60%;
    transition: all 0.3s ease 0s;
  }
  
  .nav li {
    padding-left: 20px;
    padding-right: 20px;
  }

  .nav li a {
    font-weight: 500;
    font-size: 15px;
    color: #2a2a2a;
    line-height: 40px;
    letter-spacing: 0.8px;
    transition: all 0.3s ease 0s;
  }
  
  .main-nav .nav li:last-child a{
    padding: 0px 20px !important;
  }
  
  .main-nav .nav li:last-child a:hover{
    color: #fff !important;
  }

  
  .nav li:hover a,
  .nav li a.active {
    color: #4da6e7!important;
  }

  .border-first-button a {
    display: inline-block !important;
    color: #4da6e7 !important;
    border: 1px solid #4da6e7 !important;
    border-radius: 23px;
    font-weight: 500 !important;
    letter-spacing: 0.3px !important;
  }
  
  .border-first-button a:hover {
    background-color: #4da6e7;
    color: #fff !important;
  }

  .menu-trigger {
    display: none;
  }

  @media only screen and (max-width: 1000px){

    .logo{
      display: flex;
      position: absolute;
      left: 25px;
    }

    .nav{
      display: none;
    }

    .mobile-links{
      position: absolute;
      display: block;
      list-style: none;
      z-index: 1;
      background-color: #263E63;
      left: 0;
      top: 90px;
      transition: all 0.3s ease;
      width: 100%;
    }

    li{
      text-align: center;
      padding: 5px;
      width: 100%;
      transition: all 0.3s ease;
    }

    li a{
      color: white;
    }

    .border-first-button{
      display: none;
    }

    .menu-trigger{
      display: block;
      position: absolute;
      font-size: 30px;
      color: black;
      background-color: white;
      border: none;
      top: 25px;
      right: 25px;
    }
  } 
`
export default NavWrapper;