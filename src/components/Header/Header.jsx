import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Nature</span>
            <span className='headerTitleslg'>Blog</span>
        </div>
        <img className='headerImage' src="https://images.unsplash.com/photo-1561571994-3c61c554181a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1bGwlMjBoZCUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  )
}
