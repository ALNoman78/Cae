import { useEffect } from "react";
import { useState } from "react";
import UseData from "../User-Data/useData";
import './use.css'
// import { addToLocalStorage, getData } from "../../Local-storage/localStorage";
import Cart from "../Cart/Cart";

const User = () => {
    const [userData , setUserData] = useState([])
    const [cart , setCart] = useState([])

    const cartHandler = (data) => {
        const newData = [...cart , data]
        setCart(newData)
        // addToLocalStorage(data.id)
    }

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setUserData(data))
    }, [])

    // useEffect(() => {
    //     if(userData.length){
    //         const LocalData = getData()
    //         const saveData = [];
    //         for (const id of LocalData) {
    //             const bottle = userData.find((bottle) => bottle.id === id);
    //             if(bottle) {
    //                 saveData.push(bottle)
    //             }
    //         }
    //         setCart(saveData)
    //     }
    // }, [userData])

    return (
        <div className="">
            <h3>Bottles Available : {userData.length}</h3>
            <div>
            {/* <i className="fa-solid fa-cart-shopping" style={{padding : '5px'}}>{cart.length}</i> */}
            
            <Cart cart={cart}></Cart>
            </div>
            <div className="grid">
            {
                userData.map((data) => <UseData 
                key={data.id} 
                data={data} cartHandler={cartHandler} ></UseData>)
            }
            </div>
        </div>
    );
};

export default User;