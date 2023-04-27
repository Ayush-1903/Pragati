import React, {useState, useContext} from 'react';
import man from '../images/man.png';
import { AuthContext } from '../../../context/AuthContext';
import { collection, doc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../Tiles/firebase-config';

const Profile = () => {

  const {user} = useContext(AuthContext);

  const username = user?.user?.name;

  const email = user?.user?.email;

  const [count, setCount] = useState(0);

  const webData = collection(db, 'favourites', 'userEmails', email);

  getDocs(webData)
      .then((querySnapshot) => {
          setCount(querySnapshot.size);
      })
      .catch((error) => console.log(error.message));


  return (
    <div className='mainprofile'>
        <div className='profile' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100">
          <div className="profile-card js-profile-card">
            <div className="profile-card__img">
              <img src={man} alt="profile card" />
            </div>

            <div className="profile-card__cnt js-profile-cnt">
              <div className="profile-card__name">{username}</div>
              <div className="profile-card__txt"><strong>Email-id : </strong>{email}</div>

              <div className="profile-card-inf">
                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">{count}</div>
                  <div className="profile-card-inf__txt">Favourite Tiles</div>
                </div>

                <div className="profile-card-inf__item">
                  <div className="profile-card-inf__title">5</div>
                  <div className="profile-card-inf__txt">Custom Tiles</div>
                </div>

              </div>

              <div className="profile-card-ctr">
                <button className="profile-card__button button--blue js-message-btn">Change Username</button>
                {/* <button className="profile-card__button button--orange">Follow</button> */}
              </div>
            </div>

          </div>
        </div>
        <div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
        </div>
      </div>
  )
}

export default Profile;