import React, { useContext } from 'react'
import './index.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem';


const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext);

    return (
        <>
            <div className='mt-[30px] '>
                <h1 className='text-2xl font-[600] '>Top dishes near you </h1>
                <div className='grid grid-cols-4 mt-[30px] gap-[30px]'>
                    {food_list.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                        }
                    })}
                </div>
            </div>
        </>
    )
}
export default FoodDisplay