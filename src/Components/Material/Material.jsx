import React from 'react';
import { AiOutlineCheckCircle, AiOutlineBulb, AiOutlineEdit, AiOutlineReload, AiOutlineGlobal, AiOutlineCopy } from 'react-icons/ai';

const Material = () => {
    return (
        <div className='bg-black '>
            <div className='text-slate-300 py-6 bg-black text-center'>
            <h2 className='text-2xl' >AI Create material in a matter of seconds.</h2>
            <p className=' mb-3 font-thin text-xs mt-5'>Give our AI a few descriptions and we'll automatically create blog articles,<br /> product descriptions and more for you within just few second.</p>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="group bg-slate-950 text-slate-300 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <AiOutlineCopy className="text-4xl text-purple-700 mb-2" />
          <h3 className="text-lg font-semibold mb-2">AI-powered language suggestion  <br/> and correction</h3>
          <p className=' mb-3 font-thin text-xs mt-5'>Save hours every day. The world's first AI writer that works across your Mac, iPhone, and iPad.</p>
        </div>
        <div className="group bg-slate-950 text-slate-300 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <AiOutlineCheckCircle className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Automatic Grammar and <br/> Spelling Checking</h3>
          <p className=' mb-3 font-thin text-xs mt-5'>Using our AI tools and pre-built templates to create content briefs, write, and optimize content in one place.</p>
        </div>

        <div className="group bg-slate-950 text-slate-300 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <AiOutlineBulb className="text-4xl text-blue-500 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Intelligent Content Generation <br></br> and Rephrasing</h3>
          <p className=' mb-3 font-thin text-xs mt-5'>You do not need to spend hours to write good content - let our advanced AI Writer get it done.</p>
        </div>

        <div className="group bg-slate-950 text-slate-300 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <AiOutlineEdit className="text-4xl  text-purple-600 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Repurpose Content Easily</h3>
          <p className=' mb-3 font-thin text-xs mt-5'>Write and save once, use everywhere. Also, rewrite content for different purposes with minimal effort.</p>
        </div>

        <div className="group bg-slate-950 text-slate-300 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <AiOutlineGlobal className="text-4xl text-red-500  mb-2" />
          <h3 className="text-lg font-semibold mb-2">Write in Any  <br/>Language</h3>
          <p className=' mb-3 font-thin text-xs mt-5'>Let AI write for you in over 40 languages. Our AI can write in English, Spanish, French, and many more languages.</p>
        </div>

        <div className="group bg-slate-950 text-slate-300 p-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:border-2 hover:border-purple-600">
          <AiOutlineReload className="text-4xl text-yellow-600 mb-2" />
          <h3 className="text-lg font-semibold mb-2">Copy and Publish  <br/>Anywhere</h3>
          <p className=' mb-3 font-thin text-xs mt-5'>You can simply copy your desired content and then publish it, like Shopify, WordPress, or anywhere.</p>
        </div>

       
        </div>
        </div>
    );
};

export default Material;