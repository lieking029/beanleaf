import React from 'react'
import './Index.css'
import image from '../../../assets/image'
import ProductText from '../../productText/ProductText'
import { Link } from 'react-router-dom'


const Index = () => {
  return (
    <div>
      <div className='app_index'>
      <div className='coffee-img'>
        <img src={image.coffee} alt='coffee-login' />
      </div>

      <div className='app__index-content flex_left'>
        <p> <span>Join us and</span> <br/> share your coffee story with us </p>
        <div className='app__index-content_btn'>
          <button>
            <Link to="/login" style={{textDecoration: "none", color: "white"}}>Join the fun</Link>
          </button>
        </div>
      </div>
    </div>
      <ProductText /> 
    </div>
  )
}

export default Index
