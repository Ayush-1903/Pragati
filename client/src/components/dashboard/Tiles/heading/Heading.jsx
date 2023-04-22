import React, {useContext} from 'react';
// import user from '../images/User.svg';

const Heading = () => {

    const date = new Date();
    const currTime = date.getHours();

    let greeting;

    if(currTime < 12){
        greeting = "Good Morning";
    }

    else if(currTime < 18){
        greeting = "Good Afternoon";
    }

    else{
        greeting = "Good Evening";
    }

    return (
        <div className="main-title">
                {/* <img alt="Hello" src={user}></img> */}
                <div className="main-greeting">
                    <h1>{greeting}!</h1>
                    <p>Welcome to your Dashboard</p>
                </div>
        </div>
    )
}

export default Heading;