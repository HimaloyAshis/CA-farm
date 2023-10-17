import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='lg:flex max-w-screen-2xl justify-center items-center list-none gap-4 text-center bg-[#] bg-orange-400 py-4 px-3'>
                <li>Logo</li>
                <li>Solutions</li>
                <li>Features</li>
                <li>Blogs</li>
                <li>About</li>
            </div>
            <div>
                <li>Login</li>
                <li>Register</li>
            </div>
        </div>
    );
};

export default Navbar;