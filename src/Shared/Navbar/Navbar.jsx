import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <nav className='bg-purple-400 py-2 px-2'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === false ? <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />
                            :
                            <XMarkIcon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    }
                </span>

            </div>
            <ul className={` absolute md:static bg-purple-400 duration-500 md:flex p-3  ${open ? "top-6" : "-top-48"}`}>
                <li className=''><Link >Romi Finance</Link></li>
                <li> <Link >Home</Link></li>
                <li> <Link >About</Link></li>
                <li> <Link >Dashboard</Link></li>
                <li> <Link >Earn</Link></li>
            </ul>

        </nav>
    );
};

export default Navbar;