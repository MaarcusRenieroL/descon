"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleNav = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="fixed shadow-lg w-full h-fit">
      <div className="flex justify-between items-center h-full w-full p-10">
        <Link href={"/"}>
          {/* <Image src={"/descon-logo.png"} alt="logo" width={100} height={100} /> */}
          <h1 className="tracking-[4px]">DESINGNER'S CONSORTIUM</h1>
        </Link>
        <div className="hidden lg:flex">
          <ul className="hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 hover:border-b text-xl">Home</li>
            </Link>
            <Link href={"#about"}>
              <li className="ml-10 hover:border-b text-xl">About</li>
            </Link>
            <Link href={"#members"}>
              <li className="ml-10 hover:border-b text-xl">Members</li>
            </Link>
            <Link href={"#events"}>
              <li className="ml-10 hover:border-b text-xl">Events</li>
            </Link>
            <Link href={"#contact"}>
              <li className="ml-10 hover:border-b text-xl">Contact</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          openMenu
            ? "fixed left-0 top-0 w-full lg:hidden bg-black p-10 h-fit ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-out duration-1000"
        }
      >
        <div className="w-full flex items-center justify-end">
          <div className="cursor-pointer" onClick={handleNav}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul className="text-center">
            <Link href={"/"} onClick={() => setOpenMenu(!openMenu)}>
              <li className="py-4 hover:border-b text-xl">Home</li>
            </Link>
            <Link href={"#about"} onClick={() => setOpenMenu(!openMenu)}>
              <li className="py-4 hover:border-b text-xl">About</li>
            </Link>
            <Link href={"#members"} onClick={() => setOpenMenu(!openMenu)}>
              <li className="py-4 hover:border-b text-xl">Members</li>
            </Link>
            <Link href={"#events"} onClick={() => setOpenMenu(!openMenu)}>
              <li className="py-4 hover:border-b text-xl">Events</li>
            </Link>
            <Link href={"#contact"} onClick={() => setOpenMenu(!openMenu)}>
              <li className="py-4 hover:border-b hover:border-b-black hover:ease-in-out hover:duration-500 text-xl">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row pt-10 items-center justify-around">
          <AiOutlineLinkedin size={30} />
          <AiOutlineInstagram size={30} />
          <AiOutlineMail size={30} />
        </div>
        <div className="text-center mt-14">
          <Link href={"/"}>
            {/* <Image src={"/descon-logo.png"} alt="logo" width={100} height={100} /> */}
            <h1 className="tracking-[4px]">DESINGNER'S CONSORTIUM</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
