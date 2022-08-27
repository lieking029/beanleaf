import React from 'react'
import './ProductText.css'
import image from '../../assets/image'
import { Link } from 'react-router-dom'

const ProductText = () => {
  return (
    <div className='container'>
      <div className='product-container'>
        <div className='product-heading'>
            <span>Coffee product that might be in your taste</span> 
            <p>we also sell variant kinds of coffee!</p>
            <div className='order-btn'>
            <Link to="/login" style={{textDecoration: "none"}} className='btn btn-brown'>Order Now</Link>
          </div>
        </div>
          
      </div>
      <div className='order-img'>
        <img src={image.support} alt='support' />
      </div>
    </div>
  )
}

export default ProductText
