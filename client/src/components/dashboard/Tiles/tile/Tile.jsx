import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {Tooltip, IconButton} from '@mui/material';

const Tile = ({title, href, img, desc, icon, type}) => {
  return (
    <div className="main-box" >
            <div className="box">
            <div className='favourite'>
              <div className='hollow'>
                <IconButton>
                  <StarBorderIcon className='hollowStar'/>
                </IconButton>
              </div>
              <div className='fill'>
                <Tooltip title="Add to favourites" placement='top' arrow>
                  <IconButton >
                    <StarIcon className='fillStar'/>
                  </IconButton>
                </Tooltip>
              </div>

              <div className='type'>
                <i class={icon}></i>
                <p>{type}</p>
              </div>
                
            </div>
            <a href={href} target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
              <div className="icon"><img alt="LinkedIn" src={img}/></div>
              <h4 className="title">{title}</h4>
              <p className="description">{desc}</p>
            </a>
            </div>
    </div>  
  )
}

export default Tile