import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/gradient-logo-template-with-abstract-shape_23-2148211728.jpg'
const Footer = () => {
    return (
        <footer className="  text-slate-400 bg-gray-950 mt-20 py-8">
            <div className='mt-6'>
                <div style={{ background: 'linear-gradient(100deg, #FFFF00, #800080, #0000FF)' }} className="p-6 rounded-md">
                   <div className=' flex justify-between'>
                   <span className="text-xl font-semibold mb-4 text-white bg-clip-text">
                        It will help you improve your writing & <br/> bring ideas more clearly.
                    </span>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4  rounded-full">
                        Start 14 Days Free Trial
                    </button>
                   </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between bg-gray-950 p-10 ">
                <div className="flex flex-col">
                    <h4 className="text-lg font-thin mb-4">Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">How to</a>
                    <a href="#">Use Cases</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-lg font-thin mb-4">Help</h4>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-lg font-thin mb-4">Resources</h4>

                    <a href="#">Facebook Group</a>
                    <a href="#">Discord Community</a>
                    <a href="#">Guide and Tutorials</a>
                    <a href="#">Request API access</a>
                </div>
                <div className="flex flex-col">
                    <h4 className="text-lg font-thin mb-4">Use Case</h4>
                    <a href="#">AI Writer</a>
                    <a href="#">AI Article Writer</a>
                    <a href="#">AI Content Writing</a>
                    <a href="#">Content Rewriter</a>
                </div>
            </div>
            <div className='flex mt-8 justify-between'>
                <div className='flex'>
                    <img className='w-8 h-8  ml-2 mr-1 rounded-2xl' src={logo} alt="" />
                    <Link to={"/"} className="normal-case text-xl">
                        <h1 className="text-3xl font-bold mb-4" style={{
                            background: '-webkit-linear-gradient(45deg, #FFFF00, #800080, #0000FF)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Copz AI
                        </h1>
                    </Link>
                </div>

                <p>© Copyright 2023, All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
