import React from 'react';
import {Tooltip, IconButton} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const Custom = (props) => {

    function handleClick() {
        props.onDelete(props.id);
    }

    return (
        <div className="main-box">
                <div className="box">
                    <div className='favourite'>
                        <div className='hollow'>
                            <Tooltip title='Delete Tile' placement='top' arrow color='black'>
                            <IconButton onClick={handleClick}>
                                <DeleteOutlineIcon className='hollowStar'/>
                            </IconButton>
                            </Tooltip>
                        </div>
                        <div className='fill'>
                            <Tooltip title="Delete Tile" placement='top' arrow>
                            <IconButton onClick={handleClick}>
                                <DeleteIcon className='fillStar'/>
                            </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <a href={props.url} target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                        <h4 className="title">{props.title}</h4>
                    </a>
                </div>
        </div>
    )
}

export default Custom;