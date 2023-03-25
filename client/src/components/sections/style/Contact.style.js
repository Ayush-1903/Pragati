import styled from "styled-components";

const ContactWrapper = styled.div`
    .contact-us {
        padding-top: 40px;
    }

    .contact-us .section-heading .line-dec {
        margin: 0 auto;
    }

    .contact-us .section-heading {
        text-align: center;
        margin-bottom: 80px;
    }

    .section-heading {
        position: relative;
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
        width: 150px;
        height: 3px;
        background-color: #4da6e7;
    }

    form#contact:before {
        position: absolute;
        right: 0;
        top: 0;
        width: 726px;
        height: 78px;
        content: '';
        z-index: 1;
    }

    .contact-dec img {
        max-width: 224px;
        position: absolute;
        right: 25px;
        top: -242px;
    }

    form#contact:after {
        background-image: url(../images/contact-bottom-right-v3.png);
        position: absolute;
        right: 0;
        bottom: 0;
        width: 532px;
        height: 106px;
        background-repeat: no-repeat;
        content: '';
        z-index: 1;
    }

    form#contact {
        margin-top: -50px;
        box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
        position: relative;
        background-color: #fff;
        border-radius: 23px;
        text-align: center;
    }

    form#contact #map img {
        margin-top: 30px;
        max-width: 400px;
    }

    .fill-form {
        padding: 80px 60px 80px 30px;
    }

    form#contact input {
        width: 100%;
        height: 46px;
        background-color: transparent;
        border: 1px solid #343434;
        outline: none;
        font-size: 15px;
        font-weight: 300;
        color: #343434;
        padding: 0px 20px;
        border-radius: 23px;
        margin-top: 30px;
    }

    form#contact input::placeholder {
        color: #343434;
    }

    form#contact textarea {
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        max-height: 200px;
        min-height: 200px;
        height: 200px;
        border-radius: 23px;
        background-color: transparent;
        border: 1px solid #343434;
        outline: none;
        font-size: 15px;
        font-weight: 300;
        color: #343434;
        padding: 15px 20px;
        margin-top: 30px;
    }

    form#contact textarea::placeholder {
        color: #343434;
    }

    form#contact button {
        display: inline-block;
        background-color: #fff;
        font-size: 15px;
        font-weight: 400;
        color: #4da6e7;
        margin-top: 30px;
        width: 100%;
        text-transform: capitalize;
        padding: 12px 25px;
        border-radius: 23px;
        letter-spacing: 0.25px;
        border: 1px solid #4da6e7;
        transition: all .3s;
        outline: none;
    }

    form#contact button:hover {
        background-color: #4da6e7!important;
        color: #fff!important;
    }

    @media only screen and (max-width: 426px) {
        .section-heading h4{
            font-size: 24px;
        }
    }
`

export default ContactWrapper;