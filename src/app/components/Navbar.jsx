'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaWebflow } from "react-icons/fa6";
import { useContactModal } from '../context/ContactModalContext';

export default function Navbar() {
  const pathname = usePathname();

  const { openModal } = useContactModal();

  const navLinkClass = (path) =>
    `font-medium text-[14px] transition-colors duration-200 ${
      pathname === path
        ? "text-blue-500 font-semibold"
        : "text-gray-500 hover:text-gray-900"
    }`;

  return (
    <div className="flex items-center justify-center fixed w-full z-30">
      <nav className="border shadow-2xl bg-white border-gray-200 rounded h-14 flex gap-24 items-center px-2 w-fit mt-4">

        {/* Logo */}
        <Link
          href="/"
          className="
            h-10 w-10 rounded
            bg-linear-to-b
            from-blue-400 to-blue-600
            text-white
            flex items-center justify-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500 hover:to-blue-700
            transition-all duration-200
          "
        >
          <FaWebflow />
        </Link>

        {/* Navigation */}
        <ul className="flex gap-4">
          <li>
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={navLinkClass("/projects")}>
              Projects
            </Link>
          </li>
          {/* <li>
            <Link href="/blogs" className={navLinkClass("/blogs")}>
              Blogs
            </Link>
          </li> */}
        </ul>

        {/* CTA */}
        <button
          onClick={openModal}
          className="
            bg-linear-to-b
            from-blue-400 to-blue-600
            rounded-md
            text-white
            h-10 w-36
            font-medium text-[14px]
            flex items-center gap-2 justify-center
            shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)]
            hover:from-blue-500 hover:to-blue-700
            transition-all duration-200
            cursor-pointer
          "
        >
          Get in Touch <MdOutlineArrowOutward />
        </button>

      </nav>
    </div>
  );
}
