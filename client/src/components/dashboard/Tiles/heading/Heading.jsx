import React, {useContext} from 'react';
import userimage from '../../images/User.svg';
import { AuthContext } from '../../../../context/AuthContext';

const Heading = () => {

    const { user } = useContext(AuthContext);

    const username = user?.user?.name;

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
                <img alt="Hello" src={userimage}></img>
                <div className="main-greeting">
                    <h1>{greeting} ! {username}</h1>
                    <p>Welcome to your Dashboard</p>
                </div>
        </div>
    )
}

export default Heading;