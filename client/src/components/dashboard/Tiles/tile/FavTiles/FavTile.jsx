import React, {useEffect, useState, useContext} from 'react';
import {Tooltip, IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { db } from '../../firebase-config';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { AuthContext } from '../../../../../context/AuthContext';
import { toast } from 'react-hot-toast';

const FavTile = ({ title, link, image, description, filter }) => {

    const [shimmer, setShimmer] = useState(true);
    const [showContent, setShowContent] = useState(false);
    const [isMounted, setIsMounted] = useState(false);  
    const [isFavourite, setIsFavourite] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

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

    const handleDelete = async () => {
      try {
        const querySnapshot = await getDocs(
          query(collection(db, 'favourites', 'userEmails', email))
        );
        querySnapshot.forEach(async (doc) => {
          if (doc.data().link === link) {
            await deleteDoc(doc.ref);
            setIsFavourite(false);
            setIsDeleted(true);
          }
        });
      } catch (error) {
        console.error("Error deleting document: ", error);
      }

      toast.success('Removed from favourites');
    };
    
    if (isDeleted) {
      return null;
    }
    
    return (
      <div className="box">
        <div className={`shimmer ${shimmer ? 'shimmer-effect' : ''}`}></div>
          <div className={`content ${showContent ? 'show' : ''}`}>

          <div className='favourite' onClick={handleDelete}>
              <div className='hollow'>
                  <Tooltip title='Remove from favourites' placement='top' arrow color='black'>
                  <IconButton>
                      <DeleteOutlineIcon className='hollowStar'/>
                  </IconButton>
                  </Tooltip>
              </div>

              <div className="type">
                <p>{filter}</p>
              </div>
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
    )
}

export default FavTile;
