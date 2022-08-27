import React from 'react'
import image from '../../../assets/image'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='app__login-container'>
      <div className='app__login-img'>
        <img src={image.register} alt='login-img' />
      </div>

      <div className='app__login-form_body'>
        <div className='app__login-title'>
            <p>Sign-in</p>
          <form>
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </form>
          <div className='app__login-btns'>
            <Link to="/" className='link' style={{ fontWeight: "300", fontSize: "13px", }}> Forgot password </Link>
            <button className=' btn-login'>ok</button>
          </div>
          <div className='text-center'>
              <div className='d-flex'>
                <p style={{ color: "black" }}>Dont have an account?
                 <Link to="/register" style={{color: "blue"}}> Click here</Link>
                 </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
