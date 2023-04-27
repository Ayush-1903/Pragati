import React, { useState, useEffect, useContext } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Tooltip, IconButton } from '@mui/material';
import { AuthContext } from '../../../../../context/AuthContext';
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { toast } from 'react-hot-toast';

const Tile = ({ title, link, image, description, filter }) => {

  const [shimmer, setShimmer] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);  

  const [isFavourite, setIsFavourite] = useState(false);

  const { user } = useContext(AuthContext);

  const email = user?.user?.email;

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

  useEffect(() => {
    const checkIfFavourite = async () => {
      const favouritesRef = collection(db, 'favourites', 'userEmails', email);

      const querySnapshot = await getDocs(
        query(favouritesRef, where('title', '==', title), where('link', '==', link))
      );
      const isAlreadyFavourite = !querySnapshot.empty;

      setIsFavourite(isAlreadyFavourite);
    };

    if (isMounted && email) {
      checkIfFavourite();
    }

  }, [email, isMounted, title, link]);

  const addToFavourites = async () => {

    const favouritesRef = collection(db, 'favourites', 'userEmails', email);
    
    const querySnapshot = await getDocs(
      query(favouritesRef, where('title', '==', title), where('link', '==', link))
    );
    const isAlreadyFavourite = !querySnapshot.empty;
  
    if (!isAlreadyFavourite) {
      
      const docRef = await addDoc(favouritesRef, {
        title,
        link,
        image,
        description,
        filter
      });

      console.log('Document written with ID: ', docRef.id);
  
      setIsFavourite(true);

      toast.success('Added to favourites');
    }
  }; 

  return (
    <div className="box">
      <div className={`shimmer ${shimmer ? 'shimmer-effect' : ''}`}></div>
        <div className={`content ${showContent ? 'show' : ''}`}>

        <div className="favourite" onClick={() => addToFavourites()}>
          {isFavourite ? (
            <div className="fill">
              <Tooltip title="Added to favourites" placement="top" arrow>
                <IconButton>
                  <StarIcon className="fillStar" />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <div className="hollow">
              <Tooltip title="Add to favourites" placement="top" arrow>
                <IconButton className="hollowicon">
                  <StarBorderIcon className="hollowStar" />
                </IconButton>
              </Tooltip>
            </div>
          )}
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