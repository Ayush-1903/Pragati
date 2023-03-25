import styled from "styled-components";

const ForgotWrapper = styled.div`
    form{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        background: rgb(80, 170, 255);
        border: none;
        z-index: 1;
    }

    .btn-15:hover{
        color: white;
    }


`    
export default ForgotWrapper;