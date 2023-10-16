import React from 'react';

const Navbar = () => {
    return (
        <div>
            <p>Navbar</p>
            <div className='lg:flex'>
                <li>Logo</li>
                <li>Solutions</li>
                <li>Features</li>
                <li>Blogs</li>
                <li>About</li>

            </div>
        </div>
    );
};

export default Navbar;