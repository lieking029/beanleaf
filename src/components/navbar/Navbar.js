import React from 'react'
import './Navbar.css'
import { FaFacebookSquare } from "react-icons/fa"
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='title'>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>Beanleaf</Link>
      </div>
        <div>
            <div className='d-flex justify-between'>
                <p>visit us on</p>
                <li> <FaFacebookSquare style={{color: "white", fontSize: "20px"}} /> </li>
                <li> <BsInstagram style={{color: "white", fontSize: "20px" }}  /> </li>
                <li> <BsTwitter style={{color: "white", fontSize: "20px"}}  /> </li>
            </div>
        </div>
    </div>
  )
}

export default Navbar
