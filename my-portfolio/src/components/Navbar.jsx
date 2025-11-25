import React, { useState } from "react";
import { FaBars, FaGithub, FaSearch, FaBell, FaPlus, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Portfolio-specific links
  const navLinks = [
    { name: "Overview", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* NAVBAR HEADER */}
      <nav className="bg-[#010409] text-[#c9d1d9] py-3 px-4 md:px-6 flex justify-between items-center border-b border-[#30363d] font-sans">
        
        {/* --- LEFT SECTION: Logo & Desktop Menu --- */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger */}
          <button
            className="text-[#c9d1d9] border border-[#30363d] rounded-md p-1 md:hidden hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <FaBars size={20} />
          </button>

          {/* Logo Group */}
          <a href="#" className="flex items-center gap-2 hover:text-white transition-colors group">
            <FaGithub className="text-3xl text-white" />
            <span className="text-sm font-bold text-white tracking-tight group-hover:underline">
              Lakshya.dev
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 ml-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold px-2 py-1 rounded-md hover:bg-[#1f2428] hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* --- RIGHT SECTION: Search & User --- */}
        <div className="flex items-center gap-4">
          
          {/* GitHub Style Search Bar */}
          <div className="hidden md:flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-2 py-1 w-64 focus-within:border-[#58a6ff] focus-within:ring-1 focus-within:ring-[#58a6ff] transition-all">
            <FaSearch className="text-gray-500 text-xs mr-2" />
            <input
              type="text"
              placeholder="Search projects..."
              className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full h-full"
            />
            <div className="text-gray-500 text-xs border border-[#30363d] px-1 rounded ml-1">/</div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 text-[#c9d1d9]">
            {/* Create New / Plus Icon */}
            <div className="hidden md:flex items-center gap-1 hover:text-white cursor-pointer">
                <FaPlus />
                <FaCaretDown size={12} />
            </div>

            {/* Avatar (Using a placeholder div or img) */}
            <div className="relative group cursor-pointer">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 border border-[#30363d] flex items-center justify-center text-white font-bold text-xs">
                 LD
               </div>
               {/* Online Status Dot */}
               <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#010409] rounded-full"></span>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {open && (
        <div className="md:hidden bg-[#010409] border-b border-[#30363d] animate-fade-in-down">
          <div className="px-4 py-3 space-y-3">
            
            {/* Mobile Search */}
            <div className="flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-2">
              <FaSearch className="text-gray-500 text-sm mr-2" />
              <input
                type="text"
                placeholder="Search portfolio..."
                className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full"
              />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col text-[#c9d1d9] font-semibold text-sm">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="py-2 border-t border-[#21262d] hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="py-2 border-t border-[#21262d] text-left hover:text-white">
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;