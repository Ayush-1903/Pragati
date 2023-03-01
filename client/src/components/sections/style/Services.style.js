import styled from "styled-components";

const ServiceWrapper = styled.div`
    .container{
        width: 100%;
        height: 100vh;
        padding: 0 8%;
        font-family: 'Poppins', sans-serif;
    }

    .container h1{
        text-align: center;
        padding-top: 12%;
        margin-bottom: 20px;
        font-weight: 600;
        position: relative;
    }

    .container h6{
        position: relative;
        text-align: center;
        font-weight: 500;
        margin-bottom: 40px;
    }

    .container .wink{
        max-width: 21px;
    }

    .container h1::after{
        content: '';
        background: #3bbeff;
        width: 150px;
        height: 4px;
        position: absolute;
        bottom: -5px;
        left: 50%; 
        transform: translateX(-50%);    
    }
    
    .row{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        grid-gap: 25px;
        margin-top: -10px;
    }

    .service{
        text-align: center;
        padding: 25px 10px;
        border-radius: 5px;
        font-size: 14px;
        border-radius: 10px;
        background: #FFFFFF;
        box-shadow: 0 10px 25px 0 rgba(68, 88, 144, 0.1);
        transition: all 0.5s ease-in-out;
        cursor: default;
    }

    .service video{
        max-width: 330px;
        margin-bottom: 10px;
        color: #303ed7;
    }

    .service h2{
        font-size: 25px;
        font-weight: 600;
        margin-bottom: 8px;
        transition: all 0.3s ease-in-out;
        background: linear-gradient(to right, #0062db, #00d0ff, #0062db);
        background-clip: text;
        -webkit-background-clip:text;
    }

    .service p{
        font-weight: 500;
    }

    .service:hover {
        -webkit-transform: scale(1.28);
        transform: scale(1.28);
        box-shadow: 0 3px 10px 0 rgb(154, 200, 253);
    }

    .service:hover h2{
        background: linear-gradient(to right, #0062db, #00d0ff, #0062db);
        -webkit-background-clip: text;
        color: transparent;
    }
`

export default ServiceWrapper;