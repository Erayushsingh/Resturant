import React, { useContext } from 'react';
import './index.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, RemovefromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='mt-[100px]'>
      <div>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-gray-400 text-start'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <React.Fragment key={item._id}>
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] my-[10px] text-black text-start'>
                  <img className='w-[50px]' src={`${url}/images/${item.image}`} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => RemovefromCart(item._id)} className='cursor-pointer'>×</p>
                </div>
                <hr className="h-[2px] bg-[#e2e2e2] border-none" />
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>

      <div className='flex mt-[80px] justify-between gap-[20px]'>
        <div className='flex flex-1 flex-col gap-2'>
          <h2 className='text-2xl font-semibold'>Cart Totals</h2>
          <div>
            <div className='flex justify-between shadow-md mt-3 px-2'>
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className='flex justify-between shadow-md mt-3 px-2'>
              <p>Delivery Fees</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className='flex justify-between mt-3 px-2 shadow-md'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')} className='w-fit mt-3 shadow-lg border px-2 py-2 bg-rose-500 rounded-md'>Proceed To CheckOut</button>
        </div>

        <div className='flex flex-1'>
          <div className='flex-1'>
            <p className='text-[#555]'>If you have a promo code, enter it here</p>
            <div className='flex justify-between items-center bg-gray-100 h-[40px] mt-2'>
              <input className='p-2 bg-[transparent] border-2 rounded-md' type='text' placeholder='promo code' />
              <button className='bg-black text-white p-2 rounded-md'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
