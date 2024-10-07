import { createContext, useEffect, useState } from "react";
import axios from 'axios'


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:8001"
    const [token, setToken] = useState("")
    const [food_list, setFood_list] = useState([])

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }

    const RemovefromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(token){
            await axios.delete(url+"/api/cart/remove",{ data: { itemId } },{headers:{token}})
        }
    }

    const getTotalCartAmount = () => {
        let totalamount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item)
                totalamount += itemInfo.price * cartItems[item];
            }
        }
        return totalamount;
    }

    const fetchFoodList = async () => {
        const res = await axios.get(url+"/api/food/list")
        setFood_list(res.data.data);
    }

    const loadCartData= async (token)=>{
     const res=await axios.post(url+"/api/cart/get",{},{headers:{token}})
     setCartItems(res.data.loadCartData);
    }




    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData()
    }, [])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        RemovefromCart,
        getTotalCartAmount,
        url, token, setToken
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider

//This is the code that will store the data globally.