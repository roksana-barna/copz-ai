
import React from 'react';
import img from '../../assets/0_Bx8KWmQYWfJN0_w5.jpg';
import { AiOutlineFileText, AiOutlineFileImage, AiOutlineCopy } from 'react-icons/ai';


const AiGenerate = () => {
    return (
        <div className='lg:flex'>
            <div className='lg:w-2/3 pr-8'>
                <h1 className='text-xl text-white font-semibold mb-4'>Ai Generate</h1>
                <div className='lg:flex items-center text-gray-400'>
                    <div className='lg:w-1/3'>
                        <AiOutlineFileText className='text-xl' />
                        <p className='text-sm'>Article</p>
                    </div>
                    <div className='lg:w-1/3'>
                        <AiOutlineFileImage className='text-xl' />
                        <p className='text-sm'>Images</p>
                    </div>
                    <div className='lg:w-1/3'>
                        <AiOutlineCopy className='text-xl' />
                        <p className='text-sm'>Copy</p>
                    </div>
                </div>
                <h2 className='text-3xl text-white font-semibold mb-2 mt-8'>The Potential of AI Power</h2>
                <p className='text-slate-400 text-xs mb-4 mt-8'>We are on a mission to revolutionize the way businesses leverage artificial intelligence. With a team of dedicated experts and a , commitment to innovation, we strive to make AI accessible</p>
                <img src={img} alt='AI Power' className='mb-4 rounded-4xl' />
            </div>
            <div className='lg:w-1/3 pl-8'>
                <button className='bg-blue-500 text-white py-2 px-4 rounded-full mb-4'>Hide Section</button>
                <div>
                    <h2 className='text-2xl font-semibold mb-4'>Prompt</h2>
                    <p className='text-gray-600 mb-4'>Write a compelling prompt for AI generation.</p>
                </div>
            </div>
        </div>
    );
};

export default AiGenerate;
