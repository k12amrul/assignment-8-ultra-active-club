import React from 'react';
import './ZimSingleService.css'

const ZimSingleService = (props) => {
    const {img,name,time,age,handleAddToCart,zimSinglePic } =props
    return (
        
        <div  className='zim-img'>
           <img src={props.img} alt="" />
           <div className='zim-info'>
            <h1 className='name'>name : {name}</h1>

            <h1>for age {age}</h1>
            <p> time :{time}</p> 
           </div>
            <button onClick={() => handleAddToCart(zimSinglePic)} className='btn-cart'>
                <p className='btn-text'>add to list</p>
                
            </button>
            

            
        </div>
    );
};

export default ZimSingleService;