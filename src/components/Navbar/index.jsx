import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar=({setShowLogin})=> {

  const [menu,setMenu]=useState("Home");
  const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
  
const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar p-[20px] flex justify-between'>
    <img src={assets.logo} alt="logo" className='w-[150px]'/>
    <ul className="hidden md:flex gap-10 text-[#49557e] text-[18px] items-center">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact-Us</a>
    </ul>
    <div className='flex gap-10 items-center'>
      <img src={assets.search_icon} alt="search" />
      <div className='flex gap-10 items-center' >
        <Link to='/cart ' className='relative'><img src={assets.basket_icon} className='relative object-contain'/>
         <div className={getTotalCartAmount()===0?"":"dot"}></div> </Link>
        
            {!token?<div className="flex text-[#49557e] border-2 border-[#49557e] w-[80px] rounded-md cursor-pointer">  <button
            onClick={()=>{setShowLogin(true)}}
            className='w-full hover:bg-[#fff4f2] transition ease-in-out'>Sign in</button></div>
            :<div className='navbar-profile relative '>
              <img  src={assets.profile_icon}/>
              <ul className='navbar-profile-dropdown absolute hidden z-10 right-0 w-auto'>
                <li onClick={()=>navigate('/myorders')} className='flex item-center justify-center gap-[10px] cursor-pointer w-fit'><img className='w-[20px]' src={assets.bag_icon}/><p className="hover:text-pink-500">Orders</p></li>
                <hr/>
                <li onClick={logout} className='flex item-center justify-center gap-[10px] cursor-pointer w-fit '><img className='w-[20px]' src={assets.logout_icon}/><p className="hover:text-pink-500">Logout</p></li>
              </ul>
              </div>
              }
          </div>
        </div>
    </div>

  
  )
}

export default Navbar