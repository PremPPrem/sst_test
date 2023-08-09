import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiRegisteredFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/Navbar.scss"

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = () => setToggle(!toggle);
  return (
    <div className='nav'>
        <div className="nav_left">
            <h1>Navbar</h1>
        </div>
        <div className="nav_right">
            <ul   onClick={() => {
              setToggle(false);
            }}  className={toggle ? "nav_list nav_list_toggle" : "nav_list"}>
                <li>
                <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <AiFillHome className="nav_list_icon" />
                <span>Home</span>
              </NavLink>
                </li>
                <li>
                <NavLink
                to="/Register"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <RiRegisteredFill className="nav_list_icon" />
                <span>Register</span>
              </NavLink>
                </li>
            </ul>
            <div className="nav_icon" onClick={toggleMenu}>
            {toggle ? <FaTimes /> : <FaBars />}
            </div>
        </div>

    </div>
  )
}

export default Navbar