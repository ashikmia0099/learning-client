import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { AuthContext } from '../AuthProvider/AuthProvider';
import TheamContoler from './TheamContoler';

import logo from '../assets/bannerPageImage/logo.png';

const Navbar = () => {

    const { user, setUser, LogOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const links = <>



        {
            user && user?.email ? (
                <div className='lg:flex'>

                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "   text-[#FCA5A5]" : " text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>Home</p></li>
                    </NavLink>


                    <NavLink to='/findTutors' className={({ isActive }) =>
                        isActive ? "  text-[#FCA5A5] " : "text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>Find tutors</p></li>
                    </NavLink>


                    <NavLink to='/addtutorials' className={({ isActive }) =>
                        isActive ? "  text-[#FCA5A5] " : "text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>Add Tutorials</p></li>
                    </NavLink>


                    <NavLink to='/myTutorials' className={({ isActive }) =>
                        isActive ? "  text-[#FCA5A5] " : "text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>My Tutorials</p></li>
                    </NavLink>


                    <NavLink to='/myBookedTutors' className={({ isActive }) =>
                        isActive ? "  text-[#FCA5A5] " : "text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>My booked tutors</p></li>
                    </NavLink>




                </div>
            ) : (
                <div className='lg:flex'>

                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? "  text-[#FCA5A5] " : "text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>Home</p></li>
                    </NavLink>
                    <NavLink to='/findTutors' className={({ isActive }) =>
                        isActive ? "  text-[#FCA5A5] " : "text-[#ffffff]"
                    }>
                        <li><p className='text-lg font-semibold '>Find tutors</p></li>
                    </NavLink>
                   








                </div>
            )
        }




    </>

    // handle Logout

    const handleLogout = () => {
        LogOut()
            .then(() => {
                navigate("/auth/login")
            })
            .catch((error) => {
                // console.log('Error', error)
                return ('Error', error)
            })
    }


    return (

        <div className='  sticky top-0 z-40 '>
            <div className="navbar grid grid-cols-10  lg:backdrop-blur-xl bg-[#171f2d] px-0  mx-auto max-w-7xl">
                <div className="col-span-1 navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                            <div className='p-2 px-3'>
                                <NavLink to="/auth">
                                    <a className="text-md font-semibold">Login</a>
                                </NavLink>

                            </div>
                            <div className=' -mt-3 -ml-3'>

                                <TheamContoler />
                            </div>
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logo} alt="Logo" className='mx-auto' /></Link>

                </div>
                <div className="col-span-7 items-center navbar-center hidden lg:block mx-auto">
                    <ul className="menu menu-horizontal px-1">{links}</ul>



                </div>
                <div className="col-span-2  lg:flex">
                    <div className="hidden md:block">
                        <TheamContoler />
                    </div>
                    {user && user.email ? (
                        <div className="navbar-end space-x-4 flex items-center">
                            <div className="dropdown dropdown-hover">
                                <div>
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="User Profile"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    ) : (
                                        <CgProfile tabIndex={0} className="h-8 w-8" />
                                    )}
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 shadow left-0">
                                    <li>
                                        <h3>
                                            <span className="font-bold">Name:</span> {user.displayName}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <span className="font-bold">Email:</span> {user.email}
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            <NavLink onClick={handleLogout}>
                                <a className="text-md font-semibold text-white">Logout</a>
                            </NavLink>
                        </div>
                    ) : (


                        <div className="navbar-end flex items-end justify-end hidden md:block">
                            <NavLink to="/auth" className={({ isActive }) =>
                                isActive ? "  text-[#FCA5A5] " : "text-white"
                            }>
                               <p className=' -mt-1 text-lg font-semibold'> Login</p>
                            </NavLink>
                           
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default Navbar;