import React, { useState } from "react";
import { HiCheck, HiOutlineMenu } from "react-icons/hi"; // Import the hamburger icon from react-icons

const App = () => {
  // State to track if sidebar is open
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar visibility
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed w-full top-0 left-0 h-full bg-gray-800 text-white transition duration-300 ease-in-out ${
          isSidebarOpen ? " translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 pt-20">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          <ul className="overflow-y-scroll h-[calc(100vh-300px)]">
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Services</li>
            <li className="mt-4">Contact</li>
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Services</li>
            <li className="mt-4">Contact</li>
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Services</li>
            <li className="mt-4">Contact</li>
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Services</li>
            <li className="mt-4">Contact</li>
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Services</li>
            <li className="mt-4">Contact</li>
            <li className="mt-4">Home</li>
            <li className="mt-4">About</li>
            <li className="mt-4">Services</li>
            <li className="mt-4">Contact</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 h-[200vh]">
        {/* Hamburger Icon (Sticky) */}
        <button
          onClick={toggleSidebar}
          className={`${
            isSidebarOpen ? "opacity-100" : "opacity-100"
          } fixed top-4 left-4 p-3 text-2xl duration-500 transition text-gray-700 bg-white rounded-full shadow-md focus:outline-none z-50`}
        >
          {isSidebarOpen ? <HiOutlineMenu /> : <HiCheck />}
        </button>

        <h1 className="text-3xl pt-12">Welcome to My Website</h1>
        <p className="mt-4">
          This is the main content area. The sidebar will slide in when the
          hamburger icon is clicked.
        </p>
      </div>
    </div>
  );
};

export default App;
