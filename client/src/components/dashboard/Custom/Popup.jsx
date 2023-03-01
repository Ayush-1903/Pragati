import React, { useState } from 'react';

const Popup = (props) => {

  const [tile, setTile] = useState({
    title: "",
    url: ""
  });

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
    <div className='popup'>
        <div className='popup-inner'>
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
        </div>
    </div>
  ) : "";
}

export default Popup;