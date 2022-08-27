import React from 'react'
import './Register.css'
import image from '../../../assets/image'
import { Link } from 'react-router-dom'
import useForm from './useForm'
import validate from './validateInfo' 


const Register = () => {

  const {handleChange, values, handleSubmit, errors} = useForm(validate)


  return (
    <div>
       <div className='app__register-container'>
      <div className='app__register-img'>
        <img src={image.alternative} alt='login-img' />
      </div>

      <div className='app__register-form_body'>
        <div className='app__register-title'>
            <p className='register'>Register</p>
            <div className='app__register-info'>
                <p>Personal Information</p>
            </div>
          <form onSubmit={handleSubmit} className='app__register-form'>

              
            <div className='personal-info'>
                <div>
                {errors.nickname && <p>{errors.nickname}</p> }
                <input 
                       id='nickname'
                       type="text"
                       name="nickname"
                       placeholder='Nickname*'
                       value={values.nickname}
                       onChange={handleChange}
                       /> 
                </div>
                <div>
                 {errors.firstName && <p>{errors.firstName}</p>}
                <input 
                       className='input-lg' 
                       id='firstName'
                       type="text" 
                       name="firstName"
                       placeholder='Firstname*'
                       value={values.firstName}
                       onChange={handleChange}
                       />
                </div>
                <div>
              {errors.lastName && <p>{errors.lastName}</p> }
                <input 
                       id='lastName'
                       type="text" 
                       name='lastName'
                       placeholder='Lastname*'
                       value={values.lastName}
                       onChange={handleChange} 
                       />
                </div>
            </div>
                <div className='app__info'>
                    <p>Account Information</p>
                </div>
            <div className='account-info'>
               <div className='upper'>
                <div>
                {errors.email && <p>{errors.email}</p> }
                <input 
                       className='input-large'
                       id='email' 
                       type="email"
                       name='email' 
                       placeholder='Email Address*' 
                       value={values.email}
                       onChange={handleChange}
                       />
               </div>
                  <div>
                  {errors.phone && <p>{errors.phone}</p> }
                  <input 
                          id='phone'
                          type="text"
                          name='phone' 
                          className='phone'
                          placeholder='Contact-number*' 
                          value={values.phone}
                          onChange={handleChange}
                          /> 
                  </div>
                </div>
               <div className='lower'>
                <div>
                {errors.password && <p>{errors.password}</p> }
                <input 
                       className='input-large'
                       id='password' 
                       type="password"
                       name="password" 
                       placeholder='Password*'
                       value={values.password}
                       onChange={handleChange}
                       />
                </div>
                <div>
                {errors.cpassword && <p>{errors.cpassword}</p> }
                <input 
                       type="password"
                       id='cpassword'
                       name='cpassword' 
                       className='cpassword'
                       placeholder='Confirm Password*' 
                       value={values.cpassword}
                       onChange={handleChange}
                       />
                </div>
               </div>
               
            </div>
            <div className='app__register-btns'>
                <p style={{ color: "black" }}>Already have an account?
                 <Link to="/login" style={{color: "blue"}}> Click here</Link>
                 </p>
            <button type='submit' className='btn-register'>Register</button>
          </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
