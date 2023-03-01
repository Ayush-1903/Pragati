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
        font-size: 2rem;
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

    span {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
        margin: 5px;
    }

    a {
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

    .social-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #222;
        padding: 0px 15px;
        border-radius: 20px;
        margin: 20px;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        transition: all 0.4s;
    }

    .social-container img {
        transition: all 0.4s;
    }

    .social-container:hover {
        transform: scale(1.05);
    }

    .social-container a {
        font-family: "Poppins", sans-serif;
        margin-left: 10px;
        color: rgb(255, 255, 255);
    }

    .forgot {
        font-family: "Poppins", sans-serif;
        transition: all 0.3s;
        color: #000000;
    }

    .forgot:hover {
        color: #2b89fc;
    }

    footer {
        background-color: #222;
        color: #fff;
        font-size: 14px;
        bottom: 0;
        position: fixed;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 999;
    }

    footer p {
        margin: 10px 0;
    }

    footer i {
        color: red;
    }

    footer a {
        color: #3c97bf;
        text-decoration: none;
    }
`;

export default Wrapper;
