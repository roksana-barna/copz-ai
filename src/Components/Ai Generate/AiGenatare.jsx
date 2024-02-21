
import React, { useState } from 'react';
import img from '../../assets/0_Bx8KWmQYWfJN0_w5.jpg';
import { AiOutlineFileText, AiOutlineFileImage, AiOutlineCopy } from 'react-icons/ai';
import { FaCheck, FaStar, FaStarHalfAlt } from "react-icons/fa";
import img2 from '../.././assets/basic-bar-graph.png'

const AiGenerate = () => {
    const [selectedDomain, setSelectedDomain] = useState('');
    const [selectedIntent, setSelectedIntent] = useState('');
    const [selectedFormality, setSelectedFormality] = useState('');

    const handleDomainChange = (event) => {
        setSelectedDomain(event.target.value);
    };

    const handleIntentChange = (event) => {
        setSelectedIntent(event.target.value);
    };

    const handleFormalityChange = (event) => {
        setSelectedFormality(event.target.value);
    };

    const isSelected = (option, selectedOption) => selectedOption === option;


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
                <button className='border-2 b border-gray-700 text-end text-white py-2 px-4 rounded-full mb-4'>Hide assistant</button>
                <div className='bg-slate-900 p-4 rounded-xl'>
                    <div className='flex justify-between'>
                        <h2 className='text-xl font-semibold mb-2 text-gray-500'>Prompt</h2>
                        <FaStarHalfAlt className='text-pink-400' />

                    </div>                    <p className='text-gray-400 mb-2 text-xs'>Anthropomorphic majestic blobfish knight, portrait, finely detailed armor, cinematic lighting,  4k, 8k, unreal engine, octane render</p>
                </div>

                <div>
                    <div className="mb-4">
                        <label htmlFor="domain" className="block text-sm font-medium text-gray-700">
                            Domain:
                        </label>
                        <select
                            id="domain"
                            name="domain"
                            value={selectedDomain}
                            onChange={handleDomainChange}
                            className="form-select  bg-blue-950 text-white w-full p-2 border rounded-md"
                        >
                            <option value="" disabled>Select Domain</option>
                            <option value="Technology">Technology</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="intent" className="block text-sm font-medium text-gray-700">
                            Intent:
                        </label>
                        <select
                            id="intent"
                            name="intent"
                            value={selectedIntent}
                            onChange={handleIntentChange}
                            className="form-select w-full bg-blue-950 text-white p-2 border rounded-md"
                        >
                            <option value="" disabled>Select Intent</option>
                            <option value="Inform">Inform</option>
                            <option value="Persuade">Persuade</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="formality" className="block text-sm font-medium text-gray-700">
                            Formality:
                        </label>
                        <select
                            id="formality"
                            name="formality"
                            value={selectedFormality}
                            onChange={handleFormalityChange}
                            className="form-select w-full  bg-blue-950 text-white p-2 border rounded-md"
                        >
                            <option value="" disabled>Select Formality</option>
                            <option value="Formal">Formal</option>
                            <option value="Casual">Casual</option>
                        </select>
                    </div>

                    <div>
                        {isSelected('Creative', selectedIntent) && (
                            <p>
                                Creative <FaCheck className="text-green-500" />
                            </p>
                        )}
                        {isSelected('Tell a story', selectedIntent) && (
                            <p>
                                Tell a story <FaCheck className="text-green-500" />
                            </p>
                        )}
                        {isSelected('Neutral', selectedFormality) && (
                            <p>
                                Neutral <FaCheck className="text-green-500" />
                            </p>
                        )}
                    </div>
                </div>
                <img className='h-28 w-40' src={img2} alt="" />
                <div className='flex justify-between bg-slate-800 mt-2 text-gray-300'>
                    <AiOutlineFileImage></AiOutlineFileImage>
                    <button>Add data chart </button>
                </div>
                <div className='flex justify-between  bg-slate-800 mt-1 text-gray-300'>
                    <FaStar></FaStar>
                    <button>Give me an idea </button>

                </div>
            </div>
        </div>
    );
};

export default AiGenerate;
