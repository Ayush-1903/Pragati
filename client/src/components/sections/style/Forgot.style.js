import styled from "styled-components";

const ForgotWrapper = styled.div`
    
    .forgot-main{
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center; 
        z-index: 200;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .forgot-main img{
        width: 450px;
        margin-bottom: 40px;
    }

    form input{
        width: 300px;
        border: none;
        padding: 10px 20px;
        outline: none;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
       7px 7px 20px 0px rgba(0,0,0,.1),
       4px 4px 5px 0px rgba(0,0,0,.1);
    }

    .forgot-submit{
        border: none;
        border-radius: 0px 5px 5px 0px;
        padding: 10px 20px;
        background: transparent;
        font-weight: 500 !important;
        box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
       7px 7px 20px 0px rgba(0,0,0,.1),
       4px 4px 5px 0px rgba(0,0,0,.1);
        outline: none;
        transition: all .3s ease;
    }

    .btn-15{
        background: #2B4A79;
        border: none;
        z-index: 1;
        color: white;
    }

    .btn-15:hover{
        color: black;
    }


`    
export default ForgotWrapper;