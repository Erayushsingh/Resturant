import React from 'react'
import './index.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='flex flex-col justify-center gap-[20px] p-[20px] text-[#d9d9d9] bg-[#323232] mt-[100px] ' id='footer'>
                <div className='grid grid-cols-[2fr_1fr_1fr] gap-[80px] w-[80%] m-auto'> 
                    <div>
                       <img className='w-[100px]' src={assets.logo}/>
                       <p>"Good food is the foundation of genuine happiness."</p>
                       <div className='flex gap-[20px] mt-4 justify-start'>
                           <img className='w-[40px] mr-[15px] cursor-pointer' src={assets.facebook_icon} alt="" />
                           <img className='w-[40px] mr-[15px] cursor-pointer' src={assets.twitter_icon} alt="" />
                           <img className='w-[40px] mr-[15px] cursor-pointer' src={assets.linkedin_icon} alt="" />
                       </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <h2 className='text-2xl font-semibold'>COMPANY</h2>
                      <ul>
                        <li className='mb-[10px] cursor-pointer'>Home</li>
                        <li className='mb-[10px] cursor-pointer'>About us</li>
                        <li className='mb-[10px] cursor-pointer'>Delivery</li>
                        <li className='mb-[10px] cursor-pointer'>Privacy Policy</li>
                      </ul>
                    </div>

                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-2xl font-semibold'>Get IN TOUCH</h2>
                        <ul>
                            <li className='mb-[10px] cursor-pointer'>+1-212-456-789</li>
                            <li className='mb-[10px] cursor-pointer'>contact@tomato.com</li>
                        </ul>
                    </div>
                </div>
                <hr className='w-[100%] h-[2px] mt-[20px] bg-gray-500 border border-none'/>
                <p className='text-center' >
                  Copyright 2024 © Tomato.com - All Right Reserved.
                </p>
            </div>
        </>
    )
}

export default Footer