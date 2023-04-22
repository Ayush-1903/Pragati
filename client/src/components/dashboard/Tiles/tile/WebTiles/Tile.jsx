import React, { useState, useEffect, useContext } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Tooltip, IconButton } from '@mui/material';

import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const Tile = ({ title, link, image, description }) => {

  const [shimmer, setShimmer] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [isFavourite, setIsFavourite] = useState(false);

  // // Storing Email here
  // const {firstName} = useContext(UserContext);

  useEffect(() => {
    const shimmerInterval = setInterval(() => {
      setShimmer(!shimmer);
    }, 1200);

    setTimeout(() => {
      setShimmer(false);
      setShowContent(true);
    }, 1200);

    setIsMounted(true);

    return () => clearInterval(shimmerInterval);

  }, [shimmer]);

  // const addToFavourites = async () => {

  //   const favouritesRef = collection(db, 'favourites', 'userEmails', firstName);
    
  //   const querySnapshot = await getDocs(
  //     query(favouritesRef, where('title', '==', title), where('link', '==', link))
  //   );
  //   const isAlreadyFavourite = !querySnapshot.empty;
  
  //   if (!isAlreadyFavourite) {
      
  //     const docRef = await addDoc(favouritesRef, {
  //       title,
  //       link,
  //       image,
  //       description
  //     });

  //     console.log('Document written with ID: ', docRef.id);
  
  //     setIsFavourite(true);
  //   }
  // };  
  

  return (
    <div className="box">
      <div className={`shimmer ${shimmer ? 'shimmer-effect' : ''}`}></div>
      <div className={`content ${showContent ? 'show' : ''}`}>
        <div className="favourite" onClick={() => addToFavourites()}>
          <div className="hollow">
            <IconButton>
              <StarBorderIcon className="hollowStar" />
            </IconButton>
          </div>
          <div className="fill">
            <Tooltip title="Add to favourites" placement="top" arrow>
              <IconButton>
                <StarIcon className="fillStar" />
              </IconButton>
            </Tooltip>
          </div>

          {/* <div className="type">
            <i className={icon}></i>
            <p>{type}</p>
          </div> */}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <div className="icon">
            <img alt="LinkedIn" src={image} />
          </div>
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </a>
      </div>
    </div>
  );
};

export default Tile;