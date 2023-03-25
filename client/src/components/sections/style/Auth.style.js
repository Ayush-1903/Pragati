import styled from "styled-components";

const Wrapper = styled.div`
    .error {
        background-color: #ff0000;
        color: #ffffff;
        padding: 5px;
        margin: 5px;
        border-radius: 10px;
        font-size: 14px;
    }
    .error:empty {
        display: none;
    }   

    .registration {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: "Montserrat", sans-serif;
        height: 100vh;
    }

    h1 {
        font-weight: bold;
        margin: 10px;
        font-size: 1.8rem;
        color: #000000;
    }

    h2 {
        text-align: center;
        margin-bottom: 30px;
        font-weight: 700;
    }

    p {
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0.6px;
        margin: 20px 0 30px;
        color: #000000;
    }

    a {
        font-family: "Poppins", sans-serif;
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    button {
        border-radius: 20px;
        border: 2px solid;
        background-color: #000000;
        color: #ffffff;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        cursor: pointer;
        margin: 20px;
        font-family: "Poppins", sans-serif;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        color: #000000;
        background-color: transparent;
        border-color: #000000;
    }

    form {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }

    input {
        background-color: #eee;
        border: none;
        padding: 10px 13px;
        margin: 6px 0;
        width: 100%;
        border-radius: 20px;
        font-family: "Poppins", sans-serif;
    }

    .container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 768px;
        max-width: 100%;
        min-height: 480px;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .forgot{
        font-size: 13px;
        color: #84809A;
        font-weight: 500;
        transition: all 0.2s ease;
    }
    
    .forgot:hover{
        color: black;
        transition: all 0.3s ease;
    }

    span{
        font-family: "Poppins", sans-serif;
        display: none;
        color: #84809A;
        font-size: 13px;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    span a{
        font-size: 13px;
        font-weight: 800;
    }

    .container.right-panel-active .sign-in-container {
        transform: translateX(100%);
    }

    .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    @keyframes show {
        0%,
        49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%,
        100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .container.right-panel-active .overlay-container {
        transform: translateX(-100%);
    }

    .overlay {
        background: #43acfc;
        background: -webkit-linear-gradient(to right, #2b89fc, #68d2f6);
        background: linear-gradient(to right, #2b89fc, #68d2f6);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #ffffff;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .container.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .container.right-panel-active .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .container.right-panel-active .overlay-right {
        transform: translateX(20%);
    }
    
    @media only screen and (max-width: 769px){

        .container{
            width: 500px;
        }

        .overlay-container{
            display: none;
        }

        .sign-in-container{
            margin-left: 10%;
            width: 400px;
        }

        .sign-up-container{
            margin-left: -70%;
            width: 400px;
        }

        span{ 
            display: block;
        }
    }

    @media only screen and (max-width: 500px){

        h1 {
            font-weight: bold;
            font-size: 1.2rem;
            color: #000000;
        }
        
        .container{
            width: 300px;
        }

        input {
            padding: 8px 15px;
            font-size: 14px;
        }

        button {
            padding: 10px 30px;
        }

        .sign-in-container{
            margin-left: 0%;
            width: 300px;
        }

        .sign-up-container{
            margin-left: -100%;
            width: 300px;
        }
    }
`

export default Wrapper;
