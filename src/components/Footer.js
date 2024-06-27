import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">E-Commerce Website</h3>
                    <p> &copy; {new Date().getFullYear()}. All rights reserved.</p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
