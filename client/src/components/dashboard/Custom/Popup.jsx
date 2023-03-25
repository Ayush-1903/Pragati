import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Popup = (props) => {

  const [tile, setTile] = useState({
    title: "",
    url: ""
  });

  const dropIn = {
    hidden: {
      opacity: 0,
      transform: 'scale(0.9)',
    },
    visible: {
      transform: 'scale(1)',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      transform: 'scale(0.9)',
      opacity: 0,
    },
  };

  function handleChange(event) {
    const {name, value} = event.target;

    setTile(prevTile => {
      return {
        ...prevTile,
        [name]: value
      };
    });
  }

  function submitTile(event){
    props.onAdd(tile);
    setTile({
      title: "",
      url: ""
    });
    event.preventDefault();
  }

  return ( props.trigger ) ? (
    <AnimatePresence>
      <motion.div className='popup' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className='popup-inner' variants={dropIn} initial="hidden" animate="visible"
            exit="exit">
              <button className='close-btn' onClick={() => props.setTrigger(false)}><i class='bx bx-x-circle'></i></button>
              <form className='popup-wrapper'>
                <div className='input-data'>
                  <input name="title" type="text" onChange={handleChange} value={tile.title} required/>
                  <div className='underline'></div>
                  <label>Enter Title</label>
                </div>
                <div className='input-data url'>
                  <input name="url" type="url" onChange={handleChange} value={tile.url} required/>
                  <div className='underline'></div>
                  <label>Enter Website URL</label>
                </div>
                <div onClick={() => props.setTrigger(false)}>
                  <button className="tile-submit btn-15" onClick={submitTile}>Add Website Tile</button>
                </div>
              </form>
              {props.children}
          </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : "";
}

export default Popup;