import { Link } from 'react-router-dom'
import  './Login.css'

export const Login = () => {
  return (
    <div className='login'>
 
        <span className="loginTitle">Login</span>
       <form className='LoginForm'>
           <label>Email</label>
           <input className='LoginInput' type="text" placeholder='Enter your email....'></input>
           <label>Password</label>
           <input className='LoginInput' type="password" placeholder='Enter your Password....'></input>
           <button className='loginButton'>Login</button>
       </form>
       <button className='registerButton'>
         <Link className='link' to="/register">REGISTER</Link>
       </button>
     
    </div>
  )
}
