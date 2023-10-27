import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <nav className='bg-[#0F0F0F] shadow-purple-200'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === false ? <Bars3Icon className="h-6 w-6 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                            :
                            <XMarkIcon className="h-6 w-6 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                    }
                </span>

            </div>
            <ul className={` gap-4 items-center justify-center absolute md:static bg-[#0F0F0F] text-white duration-500 md:flex p-3  ml-0 shadow-purple-200 ${open ? "top-6" : "-top-48"}`}>

                <li className='hover:bg-purple-700 rounded-md p-1'> <Link >Romi Finance</Link></li>
                <li className='hover:bg-purple-700 rounded-md p-1'> <Link >Home</Link></li>
                <li className='hover:bg-purple-700 rounded-md p-1'> <Link >About</Link></li>
                <li className='hover:bg-purple-700 rounded-md p-1'> <Link >Dashboard</Link></li>
                <li className='hover:bg-purple-700 rounded-md p-1'> <Link >Earn</Link></li>

            </ul>

        </nav>
    );
};

export default Navbar;