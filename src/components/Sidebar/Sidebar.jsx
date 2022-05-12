import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img className='sidebarimage' src="https://images.unsplash.com/photo-1563475454428-db1b68095419?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmFyYmllJTIwZG9sbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <p className='sidebartopic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis labore debitis dicta cumque 
          fuga quam ea dignissimos, consectetur dolore numquam fugiat quis perspiciatis itaque unde architecto
           quisquam accusamus rerum. Earum?</p>
      </div>

     <div className="sidebarItem">
       <div className="sidebarTitle">CATAGORIES</div>
       <ul className="sidebarList">
         <li className="sidebarListItem">Life</li>
         <li className="sidebarListItem">Music</li>
         <li className="sidebarListItem">Style</li>
         <li className="sidebarListItem">Sports</li>
         <li className="sidebarListItem">Tech</li>
       </ul>
     </div>


    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
     <div className='sidebarSocial'>
     <i className="topicon fa-brands fa-facebook"></i>
            <i className="slideicon fa-brands fa-twitter"></i>
            <i className="slideicon fa-brands fa-pinterest"></i>
            <i className="slideicon fa-brands fa-instagram"></i>
     </div>
      </div>    


    </div>
  )
}
