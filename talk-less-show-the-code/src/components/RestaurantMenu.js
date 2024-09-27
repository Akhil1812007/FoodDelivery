import React, { useEffect } from 'react'
import { RESTAURANT_API } from '../utils/contents';

const RestaurantMenu = () => {
    useEffect(()=>{
        fetchData();
    });

    const fetchData=async ()=>{
        try {
           console.log("test");
            const response = await fetch(RESTAURANT_API);
            const responseData = await response.json();
            console.log(responseData);
        
           } catch (error) {
            console.log(error);
          }
    }
    
    return (
        <div className='menu'>
            <h1>Restaurant name</h1>
            <h2>Menu</h2>
            <ul>
                <li>item 1</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu
