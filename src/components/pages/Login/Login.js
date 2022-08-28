import React, {useState} from 'react'
import image from '../../../assets/image'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = e => {
    e.preventDefault();
    
  }

  const handleChange = e => {
    const [name, value] = e.target
      setValues({
        ...values,
          [name]: value
      })
  }

  console.log(values)

  return (
    <div className='app__login-container'>
      <div className='app__login-img'>
        <img src={image.register} alt='login-img' />
      </div>

      <div className='app__login-form_body'>
        <div className='app__login-title'>
            <p>Sign-in</p>
          <form onSubmit={handleSubmit}>
            <input 
                  type="email" 
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder='Email Address' />
            <input 
                  type="password" 
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder='Password' />
          <div className='app__login-btns'>
            <Link to="/" className='link' style={{ fontWeight: "300", fontSize: "13px", }}> Forgot password </Link>
            <button className=' btn-login'>ok</button>
          </div>
          </form>
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
