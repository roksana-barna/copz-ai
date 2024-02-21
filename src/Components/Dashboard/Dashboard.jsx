import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaPlusCircle, FaRegCalendarAlt, FaRegStar } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";
import { BiAnalyse } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../../assets/gradient-logo-template-with-abstract-shape_23-2148211728.jpg'

const Dashboard = () => {
    return (
        <div className='mt-12 p-10 b border-2 bg-gray-950 rounded-2xl  border-gray-600'>
            <div className=''>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side ">
                        <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                        <div className='flex mt-8'>
                            <img className='w-8 h-8  ml-2 mr-1 rounded-2xl' src={logo} alt="" />
                            <Link to={"/"} className="base-case text-xl">
                                <h1 className="text-3xl font-bold mb-4" style={{
                                    background: '-webkit-linear-gradient(45deg, #FFFF00, #800080, #0000FF)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    Copz AI
                                </h1>
                            </Link>
                        </div>
                        <ul className="menu  p-4 lg:w-72">
                            <div className="divider"></div>
                            <li>
                                <Link to="/dashboard" className="text-white font-base text-lg bg-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  px-4 py-2">
                                    <FaHome />Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/ai-generate" className="text-white font-base text-lg bg-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  px-4 py-2">
                                    <FaRegStar />AI Generate
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/posts" className="text-white font-base text-lg bg-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  px-4 py-2">
                                    <FaMobileRetro />Posts
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/schedules" className="text-white font-base text-lg bg-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  px-4 py-2">
                                    <FaRegCalendarAlt />Schedules
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/analytics" className="text-white font-base text-lg bg-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  px-4 py-2">
                                    <BiAnalyse />Analytics
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings" className="text-white font-base text-lg bg-transparent hover:bg-gradient-to-r from-blue-500 via-purple-500  to-pink-500  px-4 py-2">
                                    <IoSettingsOutline />Settings
                                </Link>
                            </li>
                        </ul>
                        <div className='border-dashed '>
                            <div className=' text-white items-center text-center border-2 border-dashed border-gray-700 mx-6 py-9'>
                                <FaPlusCircle className='items-center text-purple-600 h-6 w-6  lg:ml-28' />
                                <h4>Create new workspace</h4>
                                <p>up to 5 workplace</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;