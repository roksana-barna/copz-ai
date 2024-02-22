import React from 'react';
import { BsChatSquareDots, BsCardHeading, BsLightning, BsListCheck, BsArrowRight } from 'react-icons/bs'; // Import icons
import { motion } from "framer-motion";

const Content = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5, 
            }
        }
    };

    return (
        <div>
            <div className='text-center mt-10'>
                <h5 className='text-purple-500'>How To </h5>
                <h2 className="text-3xl font-normal text-white mb-4">Few steps to write content</h2>
            </div>
            <div>
                <div className="md:flex justify-between p-8 ">
                    <div className="md:w-1/2 bg-gray-950 py-10">
                        <div className="container mx-auto text-left pl-6">
                            <h2 className="text-3xl font-semibold text-white mb-8">Select Writing <br />Template</h2>
                            <p className="text-sm text-gray-400 mb-6">
                                Simply choose a template from the available list to write content for blog <br /> posts, landing page, website content, etc.
                            </p>
                            <ui>
                                <li className="text-base text-white mb-6">
                                    Available more than 10 templates
                                </li>
                                <li className="text-base text-white mb-6">
                                    Available more than 10 templates
                                </li>
                                <li className="text-base text-white mb-6">
                                    Available more than 10 templates
                                </li>
                            </ui>
                            <a
                                href="#"
                                className="bg-purple-400 px-4 rounded-lg  py-3 mt-8 hover:text-blue-500"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                    <motion.div className="md:w-1/2 grid grid-cols-1 skeleton lg:grid-cols-2 border-8 rounded-2xl border-blue-700"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="w-full bg-white p-6 border border-skyblue rounded-lg" variants={item}>
                            <BsChatSquareDots className="text-3xl text-skyblue mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Posts on Social Media</h3>
                            <p className="text-sm text-gray-600">Creative and engaging social media posts for your brand.</p>
                        </motion.div>
                        <motion.div className="w-full bg-white p-6 border border-skyblue rounded-lg" variants={item}>
                            <BsCardHeading className="text-3xl text-skyblue mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Website Headlines/Copy</h3>
                            <p className="text-sm text-gray-600">Generate professional copy for your website that converts users.</p>
                        </motion.div>
                        <motion.div className="w-full bg-white p-6 border border-skyblue rounded-lg" variants={item}>
                            <BsLightning className="text-3xl text-skyblue-300 mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Blog Ideas</h3>
                            <p className="text-sm text-gray-600">Creative and engaging blog ideas for your brand.</p>
                        </motion.div>
                        <motion.div className="w-full bg-white p-6 border border-skyblue rounded-lg" variants={item}>
                            <BsListCheck className="text-3xl text-skyblue mb-4" />
                            <h3 className="text-lg font-semibold mb-2">Blog Post Outline</h3>
                            <p className="text-sm text-gray-600">Generate professional outlines for your blog posts.</p>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="md:flex  justify-between p-8 mt-10 ">
                    <div className="md:w-1/2  rounded-2xl skeleton bg-orange-300 p-6">
                        <div className="bg-white p-6 border border-skyblue rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Social Media Posts</h3>
                            <p className="text-sm text-gray-600">What is your post about?</p>
                            <textarea
                                className="w-full h-24 border border-gray-300 rounded-md p-2 mt-2"
                                placeholder="e.g., A Facebook post about [your topic] that revolutionizes the world through the power of data. Aim for 1-2 sentences for better results."
                            ></textarea>
                            <p className="text-sm text-gray-600 mt-2">0/500 Characters</p>
                            <label className="block text-sm text-gray-600 mb-1 mt-4">Primary Keywords</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2"
                                placeholder="Enter primary keywords"
                            />
                            <div className='md:flex'>
                                <label className="block text-sm text-gray-600 mb-1 mt-4">Number of Variants</label>
                                <input
                                    type="number"
                                    className="w-40 border border-gray-300 rounded-md p-1"
                                    placeholder="Enter the number of variants"
                                />
                                <label className="block text-sm text-gray-600 mb-1 mt-4">Select Tone</label>
                                <select className="w-40 border border-gray-300 rounded-md p-2">
                                    <option value="neutral">Neutral</option>
                                    <option value="formal">Formal</option>
                                    <option value="informal">Informal</option>
                                </select>
                            </div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-xl mt-4">
                                Generate Content
                            </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-gray-950 py-10">
                        <div className="container mx-auto lg:ml-24 text-left">
                            <h2 className="text-3xl font-semibold text-white mb-8">Describe your
                                <br />Topic</h2>


                            <p className="text-sm text-gray-400 mb-6">
                                Provide our Al content writer with few sentences on what you <br />want to write, and it will start writing for you.
                            </p>
                            <ui>
                                <li className="text-base text-white mb-6">Simply provide a few input as topic</li>

                                <li className="text-base text-white mb-6">Type a topic like "best ways to earn money"</li>

                                <li className="text-base text-white mb-6">Facebook Ads, Headlines and other 10+ tools</li>
                            </ui>
                            <a
                                href="#"
                                className="bg-orange-400 px-4 rounded-lg  py-3 mt-8 hover:text-blue-500"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="md:flex  justify-between p-8 mt-10 ">
                    <div className="md:w-1/2 bg-gray-950 py-10">
                        <div className="container mx-auto text-left pl-6">
                            <h2 className="text-3xl font-semibold text-white mb-8">Generate quality <br />content</h2>
                            <p className="text-sm text-gray-400 mb-6">
                                Simply choose a template from the available list to write content for blog <br /> posts, landing page, website content, etc.
                            </p>
                            <ui>
                                <li className="text-base text-white mb-6">
                                    Generate content in under 30 seconds.                                </li>

                                <li className="text-base text-white mb-6">
                                    All content is unique and original.                                </li>

                                <li className="text-base text-white mb-6">
                                    Generate up to 200 words each time.                                </li>
                            </ui>
                            <a
                                href="#"
                                className="bg-blue-400 px-4 rounded-lg  py-3 mt-8 hover:text-blue-500"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 skeleton  rounded-2xl bg-blue-400 p-6">
                        <div className="bg-white p-6 border border-skyblue rounded-lg">
                            <div className='flex justify-between'>
                                <h3 className="text-lg font-semibold mb-2">
                                    Social Media Posts</h3>
                                <p className="text-sm text-blue-600">Edit Prompt</p>
                            </div>
                            <textarea
                                className="w-full h-24 border border-gray-300 rounded-md p-2 mt-2"
                                placeholder="Write a Facebook post about ChatGPT that is self-explanatory to the audience and creates engagement for the audience."
                            ></textarea>
                            <p className="text-sm text-gray-600 mt-2">
                                Showing Output</p>
                            <p className="text-sm text-gray-600 mt-2">Variant 1</p>
                            <textarea
                                className="w-full h-16 border border-gray-300 rounded-md p-2 mt-2"
                                placeholder="I'm trained to answer your questions and have a conversation with you! Ask me anything, and let's get chatting!"
                            ></textarea>

                            <p className="text-sm text-gray-600 mt-2">Variant 2</p>
                            <textarea
                                className="w-full h-16 border border-gray-300 rounded-md p-2 mt-2"
                                placeholder="Are you tired of Googling for answers? Meet ChatGPT - your one-stop solution for all your queries! "
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Content;