"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import { MdLightMode } from "react-icons/md";
import { Button } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Navbar = () => {
  const [menu, showMenu] = useState(true);
  const [navbarpadding, setNavbarPadding] = useState("py-5");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarPadding("py-3");
    } else {
      setNavbarPadding("py-5");
    }
  };

  return (
    <>
      <div className="fixed w-full bg-[#f5f5f5] z-50">
        <div
          className={`container flex flex-row items-center justify-between ${navbarpadding} mb-8 lg:mb-0`}
        >
          <div className="flex flex-row items-center gap-16">
            <Link href={"/"} className="text-xl font-bold uppercase z-50">
              jp
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            {/* <Button
              className="text-white bg-cornflowerBlue hidden lg:block"
              color="blue"
            >
              <Link
                href="/assets/cv.pdf"
                target="_blank"
                className="text-xs uppercase"
              >
                Contact Me
              </Link>
            </Button> */}
            <div
              onClick={() => showMenu(!menu)}
              className="cursor-pointer z-50"
            >
              {menu ? <TbMenu size={"1.2rem"} /> : <TfiClose size={"1.2rem"} />}
            </div>
          </div>
        </div>
        <div
          onClick={() => showMenu(true)}
          style={menu ? { display: "none" } : { display: "block" }}
          className="py-12 absolute top-0 w-full bg-white z-40"
        >
          <div className="flex flex-col gap-3 items-center">
            {/* <Button className="text-white bg-cornflowerBlue" color="blue">
              <Link
                href=""
                target="_blank"
                className="text-xs uppercase"
              >
                Contact Me
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
