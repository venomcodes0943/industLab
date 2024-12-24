"use client";

import Image from "next/image";
import Logo from "/public/logo1.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`z-[100000] flex tracking-widest items-center justify-between ${
          isScrolled ? "bg-black rounded-md transition-all py-2" : ""
        }`}
      >
        <div className="px-2">
          <img  className="w-16" src={"/logo.svg"}  alt="logo" />
        </div>
        <div className="px-2">
          <ul className="hidden md:flex items-center">
            <Link
              className="px-2 text-xs uppercase font-semibold"
              href={"#home"}
            >
              Home
            </Link>
            <Link
              className="px-2 text-xs uppercase font-semibold"
              href={"#about"}
            >
              About
            </Link>
            <Link
              className="px-2 text-xs uppercase font-semibold"
              href={"#contact-us"}
            >
              Contact Us
            </Link>
            <button className="mx-2 ml-4 uppercase px-6 rounded-full border-2 py-2 hover:bg-white hover:text-black transition-all duration-200 font-semibold text-sm">
              Contact Us
            </button>
          </ul>
          <span className="block md:hidden" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="35px"
              height="35px"
              fillRule="nonzero"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M5,8c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,23c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175zM5,38c-0.72127,-0.0102 -1.39216,0.36875 -1.75578,0.99175c-0.36361,0.623 -0.36361,1.39351 0,2.01651c0.36361,0.623 1.0345,1.00195 1.75578,0.99175h40c0.72127,0.0102 1.39216,-0.36875 1.75578,-0.99175c0.36361,-0.623 0.36361,-1.39351 0,-2.01651c-0.36361,-0.623 -1.0345,-1.00195 -1.75578,-0.99175z"></path>
                </g>
              </g>
            </svg>
          </span>
        </div>
      </div>

      <div
        className={`p-4 fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={toggleSidebar}
        >
          ✖
        </button>
        <div className="py-2 mb-2">
          <Image width={120} src={Logo} alt="logo" />
        </div>
        <Link
          className="px-2 block py-2 text-xs uppercase font-semibold"
          href={""}
        >
          Home
        </Link>
        <Link
          className="px-2 block py-2 text-xs uppercase font-semibold"
          href={"#about"}
        >
          About
        </Link>
        <Link
          className="px-2 block py-2 text-xs uppercase font-semibold"
          href={"#contact-us"}
        >
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Header;
