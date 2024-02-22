import React from 'react';
import img from '../../assets/set-of-google-apps-logo-design-free-vector.jpg'
import { Fade } from "react-awesome-reveal";

const Genius = () => {
    return (
        <div className='md:flex justify-around sm:items-center  my-16 '>
            <Fade direction="left" cascade damping={0.1}>
                <div>
                    <img className='md:h-48 md:w-48 lg:ml-32 rounded-lg bg-black' src={img} alt="" />
                </div>
            </Fade>
            <Fade direction="right">
                <div className='lg:mr-20 text-center lg:text-left'>
                    <h2 className="text-2xl font-semibold text-white mb-4">Al Genius Works on your<br /> favorite websites</h2>
                    <p className="mb-4 font-thin text-xs text-slate-500">People ask about our Al writing tool. We are always ready to<br /> answer all your questions. Also, some questions and answers are highlighted</p>
                    <button className='bg-lime-600 px-2 py-2 text-black rounded-lg'> Get Started For Free</button>
                </div>
            </Fade>

        </div>

    );
};

export default Genius;