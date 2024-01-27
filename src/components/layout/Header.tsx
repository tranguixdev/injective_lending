import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinkType } from "@/lib/types";
import { NavbarSection } from "@/lib/content/home";
import ConnectWallet from "../buttons/ConnectWallet";

const Logo = ({ path }: { path: string }) => {
  return (
    <div className="flex-grow">
      <Link href="/">
        <Image src={path} width={44} height={44} alt="logo" />
      </Link>
    </div>
  );
};

const NavBar = ({ items }: { items: NavLinkType[] }) => {
  return (
    <>
      <ul className="flex-row sm:flex gap-5 hidden">
        {items.map((item) => (
          <li className="flex items-center" key={item.name}>
            <Link
              href={item.href}
              className={`text-white cursor-pointer hover:no-underline text-lg m-0`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const hideNavWhileScrolling = ({ when = true }: { when: boolean }) => {};

const NavButton = () => {
  const [navbarCollapse, setNavbarCollapse] = useState(false);

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapse });
  }, [navbarCollapse]);

  const classes = `bg-white h-0.5 duration-200 ${
    navbarCollapse ? "absolute" : ""
  }`;

  return (
    <>
      <button
        className="box sm:hidden w-7 h-7 transition focus:outline-none"
        onClick={() => {
          setNavbarCollapse((prev) => !prev);
        }}
      >
        {" "}
        <div
          className={`flex flex-col items-end ${
            navbarCollapse ? "space-y-0" : "space-y-1.5"
          }`}
        >
          <div
            className={`w-5 ${classes} ${navbarCollapse ? "rotate-45" : ""}`}
          ></div>
          <div
            className={`w-5 ${classes} ${
              navbarCollapse ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-5 ${classes} ${navbarCollapse ? "-rotate-45" : ""}`}
          ></div>
        </div>
      </button>
    </>
  );
};

export default function header() {
  const [nav, setNav] = useState(false);
  const { navigation, logo } = NavbarSection;
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex w-full px-8 py-4 text-sm items-center gap-5 ">
      <Logo path={logo} />
      <NavBar items={navigation} />
      <ConnectWallet />
      <NavButton />
    </div>
  );
}
