import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faDumbbell, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div>
            <div className='flex text-size 10'>



            
                {/* <FontAwesomeIcon  icon={faCoffee}></FontAwesomeIcon> */}
            <img className='img-icon' src="https://image.shutterstock.com/image-vector/weightlifter-lifts-big-barbell-isolated-600w-1630916395.jpg" alt="" />
            <h1 className='  text-5xl '> Body Bilder Club</h1>

            </div>

            {/* <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.mensjournal.com%2Fwp-content%2Fuploads%2Fmf%2Ftraining_main.jpg%3Fw%3D900%26h%3D506%26crop%3D1%26quality%3D55%26strip%3Dall&imgrefurl=https%3A%2F%2Fwww.mensjournal.com%2Fhealth-fitness%2Fwomens-favorite-trainable-body-part-man%2F&tbnid=DJVULIfIqrJ0wM&vet=10CAcQxiAoBGoXChMI0KXxpJa5-gIVAAAAAB0AAAAAEAY..i&docid=Zovnr4iFeYVxJM&w=900&h=506&itg=1&q=gym%20guy&ved=0CAcQxiAoBGoXChMI0KXxpJa5-gIVAAAAAB0AAAAAEAY" alt="" /> */}
            
        </div>
    );
};

export default Header;