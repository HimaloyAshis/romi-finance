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
                        open === false ? <Bars3Icon className="h-8 w-8 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                            :
                            <XMarkIcon className="h-8 w-8 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                    }
                </span>

            </div>
            <ul className={` gap-4 items-center  absolute md:static bg-[#0F0F0F] text-white duration-500 md:flex p-3  ml-0 shadow-purple-200 ${open ? "top-12" : "-top-96"}`}>
                <div className='flex justify-center items-center'>
                    <Link><img className='h-12 w-12' src="https://i.ibb.co/XFKjMfT/New-Logo.png" alt="" /></Link>
                    <li className='hover:bg-purple-700 rounded-md text-xl p-1'> <Link >Romi Finance</Link></li>
                </div>

                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >Home</Link></li>
                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >Dashboard</Link></li>
                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >NFT</Link></li>
                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >Buy</Link></li>
                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >Referrals</Link></li>
                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >Earn</Link></li>
                <li className='hover:bg-purple-700 rounded-md px-3 py-2 '> <Link >About</Link></li>

            </ul>

        </nav>
    );
};

export default Navbar;