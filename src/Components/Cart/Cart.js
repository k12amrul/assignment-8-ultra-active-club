import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    console.log(cart)
    let totalTaime= 0
    for(const   singleCart of cart){
        totalTaime=totalTaime + singleCart.time
    }

    return (
        <div className='cart'>
            <div className='flex'>
            <img className='img' src="https://scontent.fcgp4-1.fna.fbcdn.net/v/t1.15752-9/309240445_1103412236953033_3288885802171803017_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHmXOTDzNGKaF2zT2bzUy6RuIMafy0UGmG4gxp_LRQaYTMuxk297_AduIgb_0a4C3W2FW6dqbbunWWSFJwHtyBq&_nc_ohc=l1xJNmhpZJwAX-oMeae&_nc_ht=scontent.fcgp4-1.fna&oh=03_AVLO4SBN22t7qttymUQZxPdvis8XnWJ-ceJ9MwGv_aIXhA&oe=635DE46F" alt="" />
            <h1>kamrul islam</h1>

            </div>
            <div className='flex'>

                    <h4>  60 kg</h4>
                    <h4> 5.5 inc</h4>
                    <h4>25 </h4>
            </div>
            <div className='flex'>
                <p>Weight</p>
                <p>height</p>
                <p>years</p>
    

            </div>
            {/*  */}
            <h1> Add a break </h1>
            <div>
               <button></button>
            </div>
            <h1> Exercise Details {cart.length}</h1>
            <h2>Exercise time {totalTaime}</h2>
            <h2>Break time </h2>
            
        </div>
    );
};

export default Cart;