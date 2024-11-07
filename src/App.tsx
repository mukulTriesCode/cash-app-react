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
      {isSidebarOpen && (
        <div
          className={`fixed w-full top-0 left-0 h-full bg-gray-800 text-white transition duration-300 ease-in-out ${
            isSidebarOpen ? " translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative">
            <button
              onClick={toggleSidebar}
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } absolute top-4 left-4 p-3 text-2xl text-gray-700 bg-white rounded-full shadow-md focus:outline-none z-50`}
            >
              <HiCheck />
            </button>
          </div>
          <div className="p-8">
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
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 h-[200vh]">
        {/* Hamburger Icon (Sticky) */}
        <button
          onClick={toggleSidebar}
          className={`${
            isSidebarOpen ? "hidden" : "block"
          } fixed top-4 left-4 p-3 text-2xl text-gray-700 bg-white rounded-full shadow-md focus:outline-none z-50`}
        >
          <HiOutlineMenu />
        </button>

        <h1 className="text-3xl">Welcome to My Website</h1>
        <p className="mt-4">
          This is the main content area. The sidebar will slide in when the
          hamburger icon is clicked.
        </p>
      </div>
    </div>
  );
};

export default App;
