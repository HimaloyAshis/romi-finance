import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className=' no-underline  gap-3'>
            <div>

            </div>
            <div className='bg-purple-700 px-3 py-2 font-bold list-none  lg:flex'>
                <li className='no-underline list-none'><Link >Romi Finance</Link></li>
                <li><Link >Home</Link></li>
                <li><Link >About</Link></li>
                <li><Link >Dashboard</Link></li>
                <li><Link >Earn</Link></li>
                
            </div>
        </div>
    );
};

export default Navbar;