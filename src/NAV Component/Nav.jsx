import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Nav = () => {
  return (
    <div id='parent'>
         <div id='nav'>
            <li><Link to="/"><img src="public/logo.svg" alt="" id='logo' /></Link></li>
            <li><Link className='link' to="/home">Home</Link></li>
            <li><Link className='link' to="/cart" id='cart'>Cart</Link></li>
            <li><Link className='link' to="/product" id='product'>Product</Link></li>
            <li><Link className='link' to="/signin" id='login' ><button id='n1'>Sign-up</button></Link></li>
            <li><Link className='link' to="/login" id='login1'><button id='n1'>Login</button></Link></li>
         </div>
          <div id='box'>
            <Outlet></Outlet>
          </div>
    </div>
  )
}

export default Nav