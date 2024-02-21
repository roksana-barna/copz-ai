import React from 'react';
import logo1 from '../../assets/images.png'
import logo2 from '../../assets/images (1).png'
import logo3 from '../../assets/download.png'
import logo4 from '../../assets/a3aeb11137ac5da4915ff39d61a83130.jpg'
import logo5 from '../../assets/amazon-dark-logo-black-and-white.png'


const Trusted = () => {
    return (
        <div className='bg-black text-2xl text-center  text-white py-6 '>
            <h2>Trusted by Professional and Terms</h2>
            <div className='flex justify-evenly skeleton bg-black mt-6' >
                <img className='w-20 h-14' src={logo1} alt="" />
                <img className='w-20 h-14' src={logo2} alt='' />
                <img className='w-20 h-14' src={logo3} alt='' />
                <img className='w-20 h-14' src={logo4} alt='' />
                <img className='w-20 h-14' src={logo5} alt="" />
            </div>
        </div>
    );
};

export default Trusted;