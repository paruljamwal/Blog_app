import { Link } from 'react-router-dom'
import  './Regiter.css'

export const Register = () => {
  return (
    <div className='Register'>
        <span className="registerTitle">Register</span>
       <form className='RegisterForm'>
       <label>Username</label>
           <input className='RegisterInput' type="text" placeholder='Enter your username....'></input>
          <label>Email</label>
           <input className='RegisterInput' type="text" placeholder='Enter your email....'></input>
           <label>Password</label>
           <input className='RegisterInput' type="password" placeholder='Enter your Password....'></input>
           <button className='RegisterButton'>Register</button>
       </form>
       <button className='LoginButton'>
       <Link className='link' to="./login">LOGIN</Link>
       </button>
    </div>
  )
}
