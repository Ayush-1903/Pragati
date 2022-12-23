import React from 'react';

const DSA = ({title, img, href, desc}) => {
  return (
    <div className="main-box">
        <a href={href} target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
            <div className="box">
                <div className="icon"><img alt="Tutorials Point" src={img}/></div>
                <h4 className="title">{title}</h4>
                <p className="description">{desc}</p>
            </div>
        </a>
    </div>
  )
}

export default DSA;