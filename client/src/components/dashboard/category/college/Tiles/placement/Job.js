import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import {Tooltip, IconButton} from '@mui/material';

const Job = ({title, href, img, desc}) => {
  return (
    <div className="main-box">
            <div className="box">
            <div className='favourite'>
                  <div className='hollow'>
                    <Tooltip title='Add to favourites' placement='top' arrow color='black'>
                      <IconButton>
                        <StarBorderIcon className='hollowStar'/>
                      </IconButton>
                    </Tooltip>
                  </div>
                  <div className='fill'>
                    <Tooltip title="Add to favourites" placement='top' arrow>
                      <IconButton >
                        <StarIcon className='fillStar'/>
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
                <a href={href} target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                  <div className="icon"><img alt="Codeforcess" src={img}/></div>
                  <h4 className="title">{title}</h4>
                  <p className="description">{desc}</p>
                </a>
            </div>
    </div>
  )
}

export default Job;