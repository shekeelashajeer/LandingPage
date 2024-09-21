import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="image/Icon.png" alt="icon" className="h-8 w-8" width={24.36} height={16.71}/>
          <span className="text-2xl font-bold">Nexcent</span>
        </div>
        <div className="flex items-center space-x-4" >
          <a href="#home" className="text-gray-700">Home</a>
          <a href="#features" className="text-gray-700">Features</a>
          <a href="#community" className="text-gray-700">Community</a>
          <a href="#product" className="text-gray-700">Product</a>
          <a href="#blog" className="text-gray-700">Blog</a>
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#register" className="bg-[#4CAF50] text-white px-4 py-2 rounded-md hover:bg-[#3e9f3e] transition duration-300">
            Register Now-&gt;
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
