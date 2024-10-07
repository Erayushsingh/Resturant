import React, { useContext, useEffect } from 'react'
import "./index.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const Verify = () => {
  
  const [searchParams,setSearchParams]=useSearchParams();
  const success = searchParams.get("success");
  const orderId=searchParams.get("orderId")
  const {url}=useContext(StoreContext);
  const navigate=useNavigate();


  const verifyPayment = async ()=>{
    const response=await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success){
      navigate("/myorders");
    }
    else{
      navigate("/")
    }
  }

  useEffect(()=>{
  verifyPayment();
  },[])

  return (
    <>
      <div className='min-h-[60vh] grid  items-center justify-center'>
         <div className='w-[50px] h-[50px] border-2 border-[#3416dd] rounded-full animate-ping bg-green-700'>

         </div>
      </div>
    </>
  )
}

export default Verify