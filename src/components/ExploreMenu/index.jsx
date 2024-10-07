import React from 'react'
import './index.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu=({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-[20px]' id='explore-menu'>
      <h1 className='text-2xl font-[500]'>Explore Our Menu</h1>  
      <p  className='max-w-[60%]'>"🍴 Ready to discover your new favorite dish? Tell us what you’re craving or what ingredients you have on hand, and we’ll recommend a mouthwatering meal just for you! 👇"</p>
      <div className='flex justify-between items-center mt-4'>
        {menu_list.map((item,index)=>{
         return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
             <img  src={item.menu_image} className={` w-[7.5vw] min-w-[80px] cursor-pointer ease-linear ${category === item.menu_name?"active":""}`}/>
             <p className='text-center mt-[10px] text-[#747474] cursor-pointer'>{item.menu_name}</p>
            </div>
         )
        })}
      </div>
      <hr className='m-[10px] h-[2px] bg-[#e2e2e2] border-none'/>
    </div>
  )
}

export default ExploreMenu