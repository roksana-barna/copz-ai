import React, { useState } from 'react';
import img from '../../assets/teacup-2324842_640.jpg';
import { AiOutlineFileText, AiOutlineFileImage, AiOutlineCopy } from 'react-icons/ai';
import img2 from '../../assets/Tailwind-Modal-Component-—-Tailwind-CSS-Components-version-4-update-is-here-.png'

const Chats = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello, how can I help you?', sender: 'assistant' },
        { text: 'Hi! I have a question about the product.', sender: 'user' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');
        }
    };
    return (
        <div>
            <div className='lg:flex'>
                <div className='lg:w-2/3 pr-8'>
                    <div className='lg:flex justify-between text-gray-400'>
                        <h1 className='text-xl text-white font-semibold mb-4'>Create welcome form</h1>
                        <AiOutlineFileText className='text-xl' />
                    </div>
                    <p className='text-slate-400 text-xs mb-4 mt-8'>Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project. </p>
                    <img src={img2} alt='AI Power' className='mb-4 rounded-4xl' />
                    <p className='text-gray-400 mb-2 text-xs'>Note: This is just an example of a simple HTML form. In a real-world scenario, you would also want to include proper validation and handling of the form data on the server side.</p>
                </div>
                <div className='lg:w-1/3 pl-8'>
                    <button className='border-2 b border-gray-700 text-end text-white py-2 px-4 rounded-full mb-4'>chat history</button>
                    <img className='h-28 w-40' src={img} alt="" />

                    <div>
                        <div className="max-w-md mx-auto bg-gray-950 shadow-md rounded-md p-4">
                            <div className="flex justify-between mb-4">
                                <h2 className="text-xl font-bold">Chat History</h2>
                                <button className="bg-gray-300 px-3 py-1 rounded-md">Toggle Mode</button>
                            </div>

                            <div className="space-y-4">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`p-3 rounded-md ${message.sender === 'user' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex">
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 rounded-l-md border border-r-0 border-gray-300"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Chats;