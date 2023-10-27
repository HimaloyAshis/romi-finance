import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className='  gap-3'>
            <div>

            </div>
            <div className='bg-purple-700 px-3 py-2 font-bold lg:flex'>
                <Link className='no-underline '>Romi Finance</Link>
                <Link className='no-underline ml-4'>Home</Link>
                <Link className='no-underline ml-4'>Home</Link>
                <Link className='no-underline ml-4'>Home</Link>
                <Link className='no-underline ml-4'>Home</Link>
                <Link className='no-underline ml-4'>Home</Link>
            </div>
        </div>
    );
};

export default Navbar;