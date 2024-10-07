import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='w-[100%]  m-auto mt-[100px] mx-auto font-[500]' id='app-download'>
      <p className='text-2xl text-center'>For Better Experience Download <br/>Tomato App</p>
      <div className=' flex justify-center gap-10 mt-4 '>
      <img  className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer' src={assets.play_store} alt="" />
      <img className='w-[max(30vw,120px)] max-w-[180px] cursor-pointer' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload