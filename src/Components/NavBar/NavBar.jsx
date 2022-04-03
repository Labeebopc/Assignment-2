import React from 'react'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
    <div className='icons'>
        <div className='icon'><i className='bi bi-list'></i></div>
        <div className='icon'><i className='bi bi-search'></i></div>
        <div className='image'><img className='logo' src="./images/logo.png" alt="" /></div>
        <div className='icon'><i className='bi bi-chat'></i></div>
        <div className='icon'><i className='bi bi-bell'></i></div>




    </div>
  )
}

export default NavBar