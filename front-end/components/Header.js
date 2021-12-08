import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaPhoneAlt } from "react-icons/fa";

import UseOutsideClick from "./UseOutsideClick";

const Header = (props) => {
  const [show, setSate] = useState(false);
  const router = useRouter();

  const ref = useRef();

  UseOutsideClick(ref, () => {
    if (show) setSate(false);
  });

  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full "
          : "relative lg:sticky lg:top-0 bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-5 z-10"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a data-aos="fade-right" data-aos-delay="400">
              <div
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  "text-base font-bold leading-relaxed flex justify-center items-center mr-4 py-2 whitespace-nowrap"
                }
              >
                <Image
                  alt="Pleasant Smith"
                  src="/romance.svg"
                  width={60}
                  height={60}
                />
                <h3 className="text-2xl lg:text-xl xl:text-3xl text-indigo-500 font-bold font-display ml-4  tracking-wide">
                  Zoro <span className="text-pink-600">Shop</span>
                </h3>
              </div>
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            // onClick={() => setNavbarOpen(!navbarOpen)}
            onClick={() => setSate(!show)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={
                (props.transparent ? "text-pink-800 " : "text-indigo-800") +
                " w-8 h-8 font-bold"
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (show
              ? " fixed rounded shadow-lg pb-8 left-0 right-0 top-0  mt-28"
              : " hidden")
          }
          id="example-navbar-warning"
          ref={ref}
        >
          <ul className="nvb flex flex-col lg:flex-row list-none lg:ml-auto justify-center items-center ">
            <li className="flex items-center">
              <Link href="/">
                <a
                  className={
                    (props.transparent ? "text-gray-800 " : "text-gray-800 ") +
                    (router.pathname == "/" ? "active" : "") +
                    " navlinks "
                  }
                  onClick={() => setSate(false)}
                >
                  Welcome
                </a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/about-pleasant">
                <a
                  className={
                    (props.transparent ? "text-gray-800" : "text-gray-800 ") +
                    (router.pathname == "/about-pleasant" ? "active" : "") +
                    " navlinks"
                  }
                  onClick={() => setSate(false)}
                >
                  About
                </a>
              </Link>
            </li>

            <li className="flex items-center">
              <Link href="/services">
                <a
                  className={
                    (props.transparent ? " text-gray-800" : "text-gray-800 ") +
                    (router.pathname == "/services" ? "active" : "") +
                    " navlinks"
                  }
                  onClick={() => setSate(false)}
                >
                  Services
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/posts">
                <a
                  className={
                    (props.transparent ? " text-gray-800" : "text-gray-800 ") +
                    (router.pathname == "/posts" ? "active" : "") +
                    " navlinks"
                  }
                  onClick={() => setSate(false)}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/payment">
                <a
                  className={
                    (props.transparent ? " text-gray-800" : "text-gray-800 ") +
                    (router.pathname == "/payment" ? "active" : "") +
                    " navlinks"
                  }
                  onClick={() => setSate(false)}
                >
                  Payment
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/contact-pleasant">
                <a
                  className={
                    (props.transparent ? " text-gray-800" : "text-gray-800 ") +
                    (router.pathname == "/contact-pleasant" ? "active" : "") +
                    " navlinks"
                  }
                  onClick={() => setSate(false)}
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? " text-pink-600 active:bg-gray-100"
                    : "bg-pink-600 text-white") +
                  "  flex justify-center items-center lg:ml-6 px-4 py-2  bg-transparent border border-pink-600 cursor-pointer transition duration-500 ease-in-out hover:bg-transparent hover:text-pink-600 "
                }
                data-aos="fade-left"
                data-aos-delay="400"
                // style={{ transition: "all .15s ease" }}
                href="tel:8606064401"
              >
                <FaPhoneAlt />
                <span className="ml-2 text-xl  font-bold tracking-wider ">
                  (860) 606 - 4401
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
