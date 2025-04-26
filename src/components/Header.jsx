import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 text-sm bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="font-bold text-3xl">
        DevH.<span className="text-fuchsia-400">io</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-lg">
        <a href="#home" className="hover:underline">
          Home
        </a>

        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#contacts" className="hover:underline">
          Contacts
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={35} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="absolute top-20 right-6 bg-gray-800 p-6 rounded-lg flex flex-col space-y-4 md:hidden shadow-lg text-lg">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:underline">
            Home
          </a>

          <a href="#about" onClick={() => setIsOpen(false)} className="hover:underline">
            About
          </a>
          <a href="#contacts" onClick={() => setIsOpen(false)} className="hover:underline">
            Contacts
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
