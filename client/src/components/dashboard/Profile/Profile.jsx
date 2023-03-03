import React from 'react';
import man from '../images/man.png';

const Profile = () => {
  return (
    <div className='mainprofile'>
        <div className='profile' data-aos="zoom-in" data-aos-duration="800" data-aos-delay="100">
          <div class="profile-card js-profile-card">
            <div class="profile-card__img">
              <img src={man} alt="profile card" />
            </div>

            <div class="profile-card__cnt js-profile-cnt">
              <div class="profile-card__name">Username</div>
              <div class="profile-card__txt"><strong>Email-id : </strong>user@gmail.com</div>

              <div class="profile-card-inf">
                <div class="profile-card-inf__item">
                  <div class="profile-card-inf__title">1</div>
                  <div class="profile-card-inf__txt">Favourite Tiles</div>
                </div>

                <div class="profile-card-inf__item">
                  <div class="profile-card-inf__title">5</div>
                  <div class="profile-card-inf__txt">Custom Tiles</div>
                </div>

                {/* <div class="profile-card-inf__item">
                  <div class="profile-card-inf__title">123</div>
                  <div class="profile-card-inf__txt">Articles</div>
                </div> */}

              </div>

              <div class="profile-card-ctr">
                <button class="profile-card__button button--blue js-message-btn">Change Username</button>
                {/* <button class="profile-card__button button--orange">Follow</button> */}
              </div>
            </div>

          </div>
        </div>
        <div class="area" >
            <ul class="circles">
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
        </div >
      </div>
      
  )
}

export default Profile;