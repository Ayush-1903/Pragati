import React from 'react'

const Intern = ({title, href, img, desc}) => {
  return (
    <div className="main-box" >
        <a href={href} target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
            <div className="box">
                <div className="icon"><img alt="LinkedIn" src={img}/></div>
                <h4 className="title">{title}</h4>
                <p className="description">{desc}</p>
            </div>
        </a>
    </div>  
  )
}

export default Intern