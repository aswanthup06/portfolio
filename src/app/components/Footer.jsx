import React from "react";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn, FaWhatsapp, FaBehance } from "react-icons/fa";
import { FaWebflow } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="w-full flex justify-center pb-6 bg-transparent">
      <div className="border bg-white border-gray-200 rounded-xl shadow-lg w-fit px-10 py-6">

        {/* Top Section */}
        <div className="flex items-center justify-between gap-16">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="
                h-9 w-9 rounded
                bg-linear-to-b
                from-blue-400 to-blue-600
                text-white
                flex items-center justify-center
                shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
              "
            >
              <FaWebflow />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900">
                Aswanth UP
              </h4>
              <p className="text-xs text-gray-500">
                UI Developer & Designer
              </p>
            </div>
          </div>

          {/* Links */}
          <ul className="flex gap-6 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-500 hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-500 hover:text-blue-500 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-gray-500 hover:text-blue-500 transition">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-4" />

        {/* Bottom Section */}
        <div className="flex items-center justify-between text-xs text-gray-500">

          <p>© {new Date().getFullYear()} Aswanth. All rights reserved.</p>

        
         {/* Social Links */}
<div className="flex items-center gap-3">
  <a
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      h-8 w-8
      rounded-full
      bg-gray-100
      flex items-center justify-center
      text-gray-600
      hover:bg-blue-500 hover:text-white
      transition
    "
  >
    <FaLinkedinIn size={14} />
  </a>

  <a
    href="https://wa.me/XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="
      h-8 w-8
      rounded-full
      bg-gray-100
      flex items-center justify-center
      text-gray-600
      hover:bg-green-500 hover:text-white
      transition
    "
  >
    <IoLogoWhatsapp  size={14} />
  </a>

  <a
    href="https://www.behance.net/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      h-8 w-8
      rounded-full
      bg-gray-100
      flex items-center justify-center
      text-gray-600
      hover:bg-blue-500 hover:text-white
      transition
    "
  >
    <FaBehance size={14} />
  </a>
</div>


        </div>

      </div>
    </footer>

  );
}
