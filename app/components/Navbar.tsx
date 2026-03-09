"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="top-0 z-50 fixed bg-white shadow-md w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <a href="#" className="font-bold text-gray-800 text-2xl">
              Brand
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white transition-colors duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-gray-600 hover:text-gray-900"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-white shadow-lg px-2 sm:px-3 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block hover:bg-gray-50 px-3 py-2 rounded-md text-gray-600 hover:text-gray-900"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 mt-4 px-4 py-2 rounded-md w-full text-white transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
