"use client";
import Image from "next/image";
import logo from "../Header/logo-light.png";
import Navigation from "../Navigation/page";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiWoodCabin } from "react-icons/gi";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";

const Header = () => {
  const router = useRouter();
  const handlePage = () => {
    setNav(false);
    const signedIn = JSON.parse(localStorage.getItem("username")) || "";
    if (signedIn === "") {
      router.push("/createaccount");
    } else {
      router.push("/account");
    }
  };
  const [nav, setNav] = useState(false);
  const handledisplay = () => {
    setNav(true);
  };
  const handleclose = () => {
    setNav(false);
  };
  return (
    <div className="pt-3 md:pt-7 relative z-10 flex justify-between">
      <aside className="flex">
        <Image src={logo} alt="logo" width={80} />
        <Link
          href="/"
          className="mt-3 text-gray-100 text-md lg:text-lg hover:text-amber-200"
          onClick={handleclose}
        >
          The Wild Oasis.
        </Link>
      </aside>
      <Navigation />
      <div
        className="md:hidden block text-3xl mt-3 z-20 cursor-pointer"
        onClick={handledisplay}
      >
        <GiHamburgerMenu />
      </div>
      {nav && (
        <div className="absolute -right-[5%] bg-[#242533] top-0 z-100 w-[111%] h-[100vh]  pl-[15%] pt-5 backdrop-blur-2xl">
          <div
            className="text-2xl mr-5  float-end cursor-pointer"
            onClick={handleclose}
          >
            X
          </div>

          <ul className="text-gray-300 mt-20 w-[8rem]">
            <li>
              <Link
                onClick={handleclose}
                className="hover:text-amber-200 flex w-fit"
                href="/cabin"
              >
                <GiWoodCabin className="mr-3 text-xl" />
                Cabin
              </Link>
            </li>
            <li className="mt-8">
              <Link
                onClick={handleclose}
                className="hover:text-amber-200 flex w-fit"
                href="/about"
              >
                <IoExtensionPuzzleSharp className="mr-3 text-xl" />
                About
              </Link>
            </li>
            <li>
              <p
                onClick={handlePage}
                className="hover:text-amber-200 mt-8 cursor-pointer flex"
              >
                <BiSolidUser className="mr-3 text-xl" /> Guest Area
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
