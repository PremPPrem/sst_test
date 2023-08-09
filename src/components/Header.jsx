import React from 'react'
import '../styles/Header.scss'

function Header({name,title,image}) {
  return (
    <div className='header'>
        <div className="header_head">
            <span>{name}</span>
            <h1>{title}</h1>
        </div>
        <img src={image} alt={name} />
    </div>
  )
}

export default Header