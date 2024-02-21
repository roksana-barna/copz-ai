import React from 'react';
import img from '../../assets/set-of-google-apps-logo-design-free-vector.jpg'

const Genius = () => {
    return (
        <div className='md:flex justify-around  my-16 '>
            <div>
                <img className='h-48 w-48 lg:ml-32' src={img} alt="" />
            </div>
            <div className='lg:mr-20'>
                <h2 className="text-2xl font-semibold text-white mb-4">Al Genius Works on your<br/> favorite websites</h2>
                <p className="mb-4 font-thin text-xs text-slate-500">People ask about our Al writing tool. We are always ready to<br/> answer all your questions. Also, some questions and answers are highlighted</p>
                <button className='bg-lime-600 px-2 py-2 text-black rounded-lg'> Get Started For Free</button>
            </div>

        </div>
    );
};

export default Genius;