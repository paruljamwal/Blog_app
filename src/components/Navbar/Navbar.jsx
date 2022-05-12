import React from 'react';
import "./Navbar.css";
import pic from '../../assests/p5.jpeg'
import { Link } from 'react-router-dom';
export const Navbar = () => {
const user=false;
  return (
    <div className='topbar'>
        <div className='topleft'>
            <i className="topicon fa-brands fa-facebook"></i>
            <i className="topicon fa-brands fa-twitter"></i>
            <i className="topicon fa-brands fa-pinterest"></i>
            <i className="topicon fa-brands fa-instagram"></i>
       </div>

        <div className='topcenter'>
            <ul className='toplist'>
                <li className='toplistitem'>
                    <Link className='link' to='/'>HOME</Link>
                </li>
                <li className='toplistitem'>
                <Link className='link' to='/'>ABOUT</Link>
                </li>
                <li className='toplistitem'>
                <Link className='link' to='/'>CONTACT</Link>
                </li>
                <li className='toplistitem'>
                <Link className='link' to='/write'>WRITE</Link>
                </li>
                <li className='toplistitem'>
                <Link className='link' to='/'>{user && "LOGOUT"}</Link>
                </li>
            </ul>
        </div>
        <div className='topright'>
            {
                user ? (
                    <img className='topimage' src={pic} alt="user" />
              )
                 :
                 (  
                 <ul className='toplist'>
                      <li className="toplistitem">
                      <Link className='link' to='/login'>LOGIN</Link>
                      </li>
                      <li className="toplistitem">
                      <Link className='link' to='/register'>REGISTER</Link>
                      </li>
                 </ul>
                 )
            }
            <i className="topsearch fa-solid fa-magnifying-glass"></i>
        </div>
 
    </div>
  )
}
