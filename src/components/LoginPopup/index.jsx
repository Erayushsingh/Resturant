import React, { useContext, useState} from 'react'
import './index.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken}=useContext(StoreContext)

    const [currState, setcurrState] = useState("Sign up")
    const [data,setData]=useState({name:"",email:"",password:""})

    const onChangeHandler=(e)=>{
     const name=e.target.name;
     const value=e.target.value;
     setData({
        ...data,
        [name]:value
     })
    }

    const onLogin=async (e)=>{
      e.preventDefault();
      let newUrl=url;
      if(currState=="Login"){
        newUrl+="/api/user/login"
      }
      else{
       newUrl+="/api/user/register" 
      }

      const res=await axios.post(newUrl,data);
      if(res.data.success){
        setToken(res.data.token);
        localStorage.setItem("token",res.data.token)
        setShowLogin(false)
      }
      else{
        alert(res.data.message)
      }
    }


    return (
        <div className='absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid'>
            <form onSubmit={onLogin} className='w-[20vw] text-[#808080] gap-[25px] bg-white flex flex-col h-fit m-auto border-[8px] font-medium p-10'> 
                <div className='flex justify-between items-center text-black'>
                    <h2>{currState}</h2>
                    <img className='w-[16px] cursor-pointer'
                        onClick={() => {
                            setShowLogin(false)
                        }}
                        src={assets.cross_icon} />
                </div>

                <div  className='flex flex-col gap-[20px] '>
                    {
                        currState === "Login" ? <></> : <input onChange={onChangeHandler} value={data.name} name="name" className='border-2 px-2' type="text" placeholder='Your name' required />
                    }
                    <input name="email" onChange={onChangeHandler} value={data.email} className='border-2 px-2' type="email" placeholder='Enter email' required />
                    <input name="password" onChange={onChangeHandler} value={data.password} className='border-2 px-2' type="password" placeholder='Password' required />
                </div>
                <button type="submit" className='bg-orange-500 text-white  p-2 rounded-md '>{currState === "Sign up" ? "Create account" : "Login"}</button>
                <div className='flex item-start gap-4'>
                    <input  type='checkbox' required />
                    <p>I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currState === "Login" ? <p>Create a new account?
                        <span className='text-green-500' onClick={() => setcurrState("Sign up")}>Click here</span></p> :
                        <p>Already have an acoount?<span className='text-rose-500' onClick={() => setcurrState("Login")}>Login here</span></p>
                }

            </form>
        </div>
    )
}

export default LoginPopup