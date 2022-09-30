import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    console.log(cart)
    let totalTaime= 0
    for(const   singleCart of cart){
        totalTaime=totalTaime + singleCart.time
    }

    // const [time,setTime]=useState(0)
    // console.log(time);
    // const btn=(p)=>{
    //     //console.log(p)
    //    //setTime(p)
    //     // console.log(event.target.value);
    // }

    return (
        <div className='cart'>
            <div className='flex'>
            <img className='img' src="https://scontent.fcgp4-1.fna.fbcdn.net/v/t1.15752-9/309240445_1103412236953033_3288885802171803017_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHmXOTDzNGKaF2zT2bzUy6RuIMafy0UGmG4gxp_LRQaYTMuxk297_AduIgb_0a4C3W2FW6dqbbunWWSFJwHtyBq&_nc_ohc=l1xJNmhpZJwAX-oMeae&_nc_ht=scontent.fcgp4-1.fna&oh=03_AVLO4SBN22t7qttymUQZxPdvis8XnWJ-ceJ9MwGv_aIXhA&oe=635DE46F" alt="" />
            <h1>kamrul islam</h1>

            </div>
            <div className='flex'>

                    <h4> Weight  50kg</h4>
                    <h4> Height 5.5inc</h4>
                    <h4> Age 25 </h4>
            </div>
            {/* <div className='flex'>
                <p>Weight</p>
                <p>height</p>
                <p>years</p>
    

            </div> */}
            {/*  */}
            <h1> Add a break </h1>
            <div className='btn'>
               <button >10</button>
               <button>20</button>
               <button>30</button>
               <button>40</button>
            </div>
            <h1 className=''> Exercise Details</h1>
            <h2>Exercise time {totalTaime}</h2>
            <h2>Break time </h2>
            
        </div>
    );
};

export default Cart;

//  https://github.com/Programming-Hero-Web-Course4/b6-ultra-active-club-k12amrul
// https://comforting-monstera-75b69a.netlify.app/