import styled from "styled-components";

const ServiceWrapper = styled.div`
    .container{
        padding: 30px 0px 0px 0px;
    }

    .container h1{
        text-align: center;
        margin-bottom: 20px;
        font-weight: 600;
        position: relative;
    }

    .container h6{
        font-size: 18px;
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
        height: 3.5px;
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
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        box-shadow: 0 3px 10px 0 rgb(154, 200, 253);
    }

    .service:hover h2{
        background: linear-gradient(to right, #0062db, #00d0ff, #0062db);
        -webkit-background-clip: text;
        color: transparent;
    }

    @media only screen and (max-width: 1200px){
        .service video{
            max-width: 250px;
        }
    }

    @media only screen and (max-width: 630px){

        .service video{
            max-width: 200px;
        }

        .service h2{
            font-size: 20px;
        }

        .service p{
            font-size: 12px;
        }
    }

    @media only screen and (max-width: 521px){
        .row{
            margin: 50px;
        }    

        .container h1{
            font-size: 24px;
        }

        .container h6{
            font-size: 15px;
        }
    
        .container .wink{
            max-width: 15px;
        }
    }
    
    @media only screen and (max-width: 375px){
        .row{
            margin: 30px;
        }    
    }
`

export default ServiceWrapper;