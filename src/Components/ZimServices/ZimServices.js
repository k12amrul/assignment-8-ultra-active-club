import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ZimSingleService from '../ZimSigleService/ZimSingleService';
import './ZimServices.css'
const ZimServices = () => {
    const[zimPics,setzimPic]=useState([])

    useEffect(() =>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setzimPic(data))
    },
    [])
    // 
    return (
        <div className='zim-container'>

            <div className='zim-detail-container'>
            {
                zimPics.map(zimSinglePic =>
                    <ZimSingleService key={zimSinglePic.id}
                    name={zimSinglePic.name}
                    img={zimSinglePic.img}
                    age={zimSinglePic.age}
                    time={zimSinglePic.time}
                    ></ZimSingleService>
                    // console.log(zimSinglePic);
                )
            }

            </div>
            <div className='zim-detail-container'>
               
                <Cart></Cart>

            </div>

            
            
            {/* <img src={img} alt="" />
            <h1>name {name}</h1>
            <p> time{time}</p> */}

        
            
        </div>
    );
};

export default ZimServices;