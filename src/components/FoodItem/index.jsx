import React, { useContext, useState } from 'react'
import './index.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {
    
    const {cartItems,addToCart,RemovefromCart,url}=useContext(StoreContext);

    return (
        <div className='w-[100%] m-auto rounded-[15px] shadow-sm '>
            <div className='relative'>
                <img className='w-[100%] rounded-md' src={url+"/images/"+image} />
                {
                  !cartItems[id]?<img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' src={assets.add_icon_white} onClick={()=>addToCart(id)}/> 
                  :<div className='absolute bottom-[15px] right-[15px] flex items-center p-2 gap-4 bg-white'> 
                        <img className='w-[30px]' src={assets.remove_icon_red} onClick={()=>RemovefromCart(id)} />
                        <p>{cartItems[id]}</p>
                        <img className='w-[30px]' src={assets.add_icon_green} onClick={()=>addToCart(id)}/>
                  </div>
                  
                }
            </div>
            <div className='p-[20px] '>
                <div className='flex justify-between items-center mb-2 '>
                    <p className='text-[20px] font-[600]'>{name}</p>
                    <image src={assets.rating_starts.png} alt="o"/>
                </div>
                <p className='text-[#676767] text-[15px]'>{description}</p>
                <p className='text-rose-500 font-[500] text-2xl mt-2'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem