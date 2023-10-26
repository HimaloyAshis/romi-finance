import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className=' no-underline bg-purple-700 gap-3'>
            <div>

            </div>
            <div>
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