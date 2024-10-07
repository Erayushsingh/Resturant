import React from 'react'
import './index.css'

const Header=()=> {
  return (
   <>
   <div className='h-[34vw] m-[30px,auto] bg-[url("/header_img.png")] object-fill relative '>
       <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
       <h1 className='text-6xl font-bold text-white'>Order Your favourite Food Here</h1>
       <p className='text-white text-2xl'>"Indulge in culinary perfection with every bite—experience gourmet dishes crafted just for you. Taste the difference quality makes today!"</p>
       <button className='border border-none rounded-full border-full bg-white font-md px-4 py-2'>View Menu</button>
   </div>
   </div>
   </>
  )
}

export default Header