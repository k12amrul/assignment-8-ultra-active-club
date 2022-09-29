import React from 'react';
import './ZimSingleService.css'

const ZimSingleService = (props) => {
    const {img,name,time,age} =props
    return (
        
        <div >
           <img src={props.img} alt="" />
            <h1>name : {name}</h1>
            <h1>for age {age}</h1>
            <p> time :{time}</p> 
            <button>
                <p>add to list </p>
            </button>

            
        </div>
    );
};

export default ZimSingleService;