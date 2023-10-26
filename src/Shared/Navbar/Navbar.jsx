import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' no-underline bg-purple-700'>
            <Link className='no-underline bg-purple-800'>Romi Finance</Link>
            <Link className='no-underline'>Home</Link>
            <Link className='no-underline'>Home</Link>
            <Link className='no-underline'>Home</Link>
            <Link className='no-underline'>Home</Link>
            <Link className='no-underline'>Home</Link>
        </div>
    );
};

export default Navbar;