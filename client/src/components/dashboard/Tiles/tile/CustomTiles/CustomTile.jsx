import React, {useState, useEffect} from 'react';
import {Tooltip, IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { collection, addDoc, getDocs, query, where, deleteDoc } from 'firebase/firestore';
import { AuthContext } from '../../../../../context/AuthContext';
import { toast } from 'react-hot-toast';

const CustomTile = ({ title, url, favIconUrl }) => {

  const [shimmer, setShimmer] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isMounted, setIsMounted] = useState(false);  

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

  return (
    <div className="box">
        <div className={`shimmer ${shimmer ? 'shimmer-effect' : ''}`}></div>
          
          <div className={`content ${showContent ? 'show' : ''}`}>

          <div className='favourite'>
              <div className='hollow'>
                  <Tooltip title='Remove from custom' placement='top' arrow color='black'>
                  <IconButton>
                      <DeleteOutlineIcon className='hollowStar'/>
                  </IconButton>
                  </Tooltip>
              </div>
          </div>

          <a
            href={url}  
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <div className="icon">
              <img alt="LinkedIn" src={favIconUrl} />
            </div>
            <h4 className="title">{title}</h4>
          </a>
        </div>
    </div>
  )
}

export default CustomTile;