import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import axios  from 'axios';


const MyOrders = () => {

    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        const res = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
        setData(res.data.data);
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div>
            <h2 className='my-[50px] mx-[0px] flex flex-col gap-[20px] mt-[30px]'>My Orders</h2>
            <div className=' flex flex-col gap-[20px] mt-[30px]'>
                {data.map((order, index) => {
                    return (
                        <div key={index} className='grid grid-cols-[0.5fr,2fr,1fr,1fr,2fr,1fr] items-center gap-[30px] text-[14px] py-[10px] px-[20px] text-[#454545] border-[1px] border-[tomato]'>
                            <img className='w-[50px]' src={assets.parcel_icon}/>
                            <p>{order.items.map((item,index)=>{
                               if(index===order.items.lenght-1){
                                return item.name+"X"+item.quantity;
                               } 
                               else{
                                return item.name+"X"+item.quantity+", ";
                               }
                            })}</p>
                            <p>${order.amount}.00</p>
                            <p>Items:{order.items.length}</p>
                            <p><span className='text-[orange]'>&#x25cf;</span><b className='font-[500] text-[#454545] '>{order.status}</b></p>
                            <button
                            onClick={fetchOrders}
                            className='bg-[#49557E] border-[green] border-2 rounded p-3 cursor-pointer text-[#449557]'>Track Order</button>
                        </div>
                    )
                }

                )}
            </div>
        </div>
    )
}

export default MyOrders