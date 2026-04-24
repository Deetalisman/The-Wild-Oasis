"use client";
import Image from "next/image";
import logo from "../Header/logo-light.png";
import Navigation from "../Navigation/page";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const handlePage = () => {
    setNav(false);
    const signedIn = JSON.parse(localStorage.getItem("username")) || "";
    if (signedIn === "") {
      router.push("/login");
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
    <div className=" pt-10 relative z-10 flex justify-between">
      <aside className="flex">
        <Image src={logo} alt="logo" width={80} />
        <Link href="/" className="mt-3 text-gray-300 hover:text-amber-200">
          The Wild Oasis.
        </Link>
      </aside>
      <Navigation />
      <div
        className="sm:hidden block text-5xl cursor-pointer"
        onClick={handledisplay}
      >
        =
      </div>
      {nav && (
        <div className="absolute -right-8 top-0 z-10 h-[100vh] w-[11rem] pl-10 pt-10 backdrop-blur-2xl">
          <div
            className="text-2xl mr-5 hover:text-4xl float-end cursor-pointer"
            onClick={handleclose}
          >
            X
          </div>

          <ul className="text-gray-300 mt-16 ">
            <li>
              <Link
                onClick={handleclose}
                className="hover:text-amber-200"
                href="/cabin"
              >
                Cabin
              </Link>
            </li>
            <li className="mt-8">
              <Link
                onClick={handleclose}
                className="hover:text-amber-200"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <p
                onClick={handlePage}
                className="hover:text-amber-200 mt-8 cursor-pointer"
              >
                Guest Area
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
