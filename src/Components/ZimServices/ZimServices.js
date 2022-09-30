import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ZimSingleService from '../ZimSigleService/ZimSingleService';
import './ZimServices.css'
const ZimServices = () => {
    const[zimPics,setzimPic]=useState([])
    const [cart, setCart] = useState([]);


    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setzimPic(data))
    },
    [])
    // 
    const handleAddToCart = (zimSinglePic) =>{
        console.log(zimSinglePic);
        const newCart=[...cart,zimSinglePic]
        setCart(newCart)
    }
    return (
        // zim-container   max-w-[1100px] gap-4 mx-10 md:mx-auto min-h-[300px] grid sm:grid-cols-1
        <div  className='flex'>
            {/* className='zim-detail-container */}

            <div  className=' max-w-[1100px] gap-4 mx-10 md:mx-auto min-h-[300px] grid md:grid-cols-3 sm:grid-cols-1'>
            {
                zimPics.map(zimSinglePic =>
                    <ZimSingleService key={zimSinglePic.id}
                    name={zimSinglePic.name}
                    img={zimSinglePic.img}
                    age={zimSinglePic.age}
                    time={zimSinglePic.time}
                    zimSinglePic={zimSinglePic}
                    handleAddToCart={handleAddToCart}
                    ></ZimSingleService>
                    // console.log(zimSinglePic);
                )
            }

            </div>
            <div className=' zim-detail-containe'>
            
                <Cart cart={cart}></Cart>

            </div>

            
            
            {/* <img src={img} alt="" />
            <h1>name {name}</h1>
            <p> time{time}</p> */}

        
            
        </div>
    );
};

export default ZimServices;