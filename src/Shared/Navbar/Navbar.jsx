import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className=' no-underline  gap-3'>
            <div onClick={() => setOpen(!open)}>
                <span>
                    {
                        open === false ? <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" /> 
                        : 
                        <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    }
                </span>

            </div>
            <div className='bg-purple-700 gap-4 px-3 py-2 font-bold list-none  lg:flex'>
                <li className=''><Link >Romi Finance</Link></li>
                <li><Link >Home</Link></li>
                <li><Link >About</Link></li>
                <li><Link >Dashboard</Link></li>
                <li><Link >Earn</Link></li>

            </div>
        </div>
    );
};

export default Navbar;