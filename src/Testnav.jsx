import React from "react";

const Navbarr = () => {
  return (
    <nav className="flex justify-between items-center p-8 bg-gray-800 text-white">
      <div className="text-3xl font-bold">Logo</div>
      <ul className="flex space-x-10 text-xl">
        <li className="relative group">Home</li>

        <li className="relative group">
          Services
          <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-gray-700 text-lg py-4 shadow-lg">
            <li className="relative group px-8 py-4 hover:bg-gray-600">
              Service 1
              <ul className="absolute top-0 left-full hidden group-hover:flex flex-col bg-gray-600 text-lg py-4 shadow-lg">
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 1A</li>
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 1B</li>
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 1C</li>
              </ul>
            </li>
            <li className="relative group px-8 py-4 hover:bg-gray-600">
              Service 2
              <ul className="absolute top-0 left-full hidden group-hover:flex flex-col bg-gray-600 text-lg py-4 shadow-lg">
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 2A</li>
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 2B</li>
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 2C</li>
              </ul>
            </li>
            <li className="relative group px-8 py-4 hover:bg-gray-600">
              Service 3
              <ul className="absolute top-0 left-full hidden group-hover:flex flex-col bg-gray-600 text-lg py-4 shadow-lg">
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 3A</li>
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 3B</li>
                <li className="px-8 py-3 hover:bg-gray-500">Sub-service 3C</li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="relative group">
          About
          <ul className="absolute top-full left-0 hidden group-hover:flex flex-col bg-gray-700 text-lg py-4 shadow-lg">
            <li className="px-8 py-4 hover:bg-gray-600">Our Team</li>
            <li className="px-8 py-4 hover:bg-gray-600">Our Mission</li>
            <li className="px-8 py-4 hover:bg-gray-600">Our Story</li>
          </ul>
        </li>

        <li className="relative group">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbarr;
