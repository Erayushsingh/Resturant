import React, { useContext,useState,useEffect } from 'react'
import './index.css'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const PlaceOrder=()=> {

const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
const [data,setData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  state:"",
  pincode:"",
  country:"",
  phone:""
})

const navigate=useNavigate();


const onChangeHandler=(e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setData(data=>({...data,[name]:value}))
}


const placeOrder=async (e)=>{
e.preventDefault();
let orderItems=[];
food_list.map((item,index)=>{
 if(cartItems[item._id]>0){
  let itemInfo=item;
  itemInfo["quantity"]=cartItems[item._id];
  orderItems.push(itemInfo);
 }
})


let orderData={
 address:data,
 items:orderItems,
 amount:getTotalCartAmount()+2 
}
let res=await axios.post(url+"/api/order/place",orderData,{headers:{token}})
if(res.data.success){
  const {session_url}=res.data;
  window.location.replace(session_url);

}
else{
  alert("error");
}
}


useEffect(()=>{
if(!token){
 navigate("/cart")
}
else if(getTotalCartAmount()===0){
  navigate('/cart')
}
},[token])


  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[15px] mt-[100px]'>
        <div className='w-[100%] max-w-[30%]'>
          <p className='font-[600] mb-[16px] text-3xl'>Delivery Information</p>
          <div className="multifield" >
            <input required onChange={onChangeHandler} value={data.firstName} name="firstName" className="set" type="text" placeholder='First Name'/>
            <input required onChange={onChangeHandler} value={data.lastName} name="lastName"className="set" type="text" placeholder='Last Name'/>
          </div>
          <input required onChange={onChangeHandler} value={data.email} name="email" className="set" type="email" placeholder='Email Address' />
          <input required onChange={onChangeHandler} value={data.street} name="street" className="set" type="text" placeholder='Street' />
          <div className="multifield">
            <input required onChange={onChangeHandler} value={data.city} name="city" className="set" type="text" placeholder='City'/>
            <input required onChange={onChangeHandler} value={data.state} name="state" className="set" type="text" placeholder='State'/>
          </div>

          <div className="multifield">
            <input required onChange={onChangeHandler} value={data.pincode} name="pincode" className="set" type="text" placeholder='Pin Code'/>
            <input required onChange={onChangeHandler} value={data.country} name="country" className="set" type="text" placeholder='Country'/>
          </div>
          <input required onChange={onChangeHandler} value={data.phone} name="phone" className="set" type="text" placeholder='Phone'/>
        </div>

        
        <div className='w-[100%] max-w-[40%]'>
        <div className='flex flex-1 flex-col gap-2 '>
          <h2 className='text-2xl font-semibold'>Cart Totals</h2>
          <div>
            <div className='flex justify-between shadow-md mt-3 px-2'>
              <p >SubTotal</p>
              <p >${getTotalCartAmount()}</p>
            </div>
            <div className='flex justify-between shadow-md mt-3 px-2'>
              <p >Delivery Fees</p>
              <p >${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div className='flex justify-between mt-3 px-2 shadow-md'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type="submit" className='w-fit mt-5 shadow-lg border px-2 py-2 bg-orange-700 rounded-md'>Proceed To Payment</button>
      </div>
        </div>
    </form>
  )
}

export default PlaceOrder