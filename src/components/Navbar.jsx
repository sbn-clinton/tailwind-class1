"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
      <section className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <Link href="/">🚀 Acme Rocket</Link>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl md:hidden focus:outline-none cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <Link href="#rockets" className="hover:opacity-90">
              Our Rockets
            </Link>
            <Link href="#testimonials" className="hover:opacity-90">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:opacity-90">
              Contact
            </Link>
          </nav>
        </div>
      </section>
      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="md:hidden fixed inset-0 bg-teal-700 flex flex-col justify-center items-center space-y-8 text-2xl"
          aria-label="mobile"
        >
          <Link
            href="#rockets"
            className="hover:opacity-90"
            onClick={closeMenu}
          >
            Our Rockets
          </Link>
          <Link
            href="#testimonials"
            className="hover:opacity-90"
            onClick={closeMenu}
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:opacity-90"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
