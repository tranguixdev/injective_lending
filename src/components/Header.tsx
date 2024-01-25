import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import ConnectWallet from "./ConnectWallet";
import { useTranslation } from "next-i18next";
import { NavbarSection } from "../lib/content/navbar";

export default function header() {
  const [nav, setNav] = useState(false);
  const { navigation, logoTitle } = NavbarSection;
  const { t } = useTranslation("header");
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="left-0 p-4 w-full ease-in duration-300 z-50">
      <div className="topbar m-auto flex justify-between items-center px-1 md:px-4 py-2">
        <Link href="/">
          <h1 className="text-2xl text-white">{logoTitle}</h1>
        </Link>
        <ul className="hidden md:flex">
          {navigation.map((item) => (
            <li className="px-4 flex items-center" key={item.name}>
              <Link
                href={item.href}
                className={`text-white cursor-pointer hover:no-underline text-xl`}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="px-4">
            <ConnectWallet />
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="flex md:hidden items-center">
          {nav ? <></> : <ConnectWallet />}
          {nav ? (
            <AiOutlineClose
              onClick={handleNav}
              size={20}
              className={`text-white z-10 ml-2`}
            />
          ) : (
            <AiOutlineMenu
              onClick={handleNav}
              size={20}
              className={`text-white z-10 ml-2`}
            />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            "md:hidden absolute left-0 right-0 bottom-0 justify-center items-center w-full h-screen bg-color-primary text-center ease-in duration-500 pb-10 " +
            (nav ? "top-0 overflow-auto" : "top-[-100vh] overflow-hidden")
          }
        >
          <div className={`text-left text-white px-5 py-5 text-2xl`}>
            {logoTitle}
          </div>
          <ul className={`text-white`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white cursor-pointer hover:no-underline text-xl`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
