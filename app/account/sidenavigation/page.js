"use client";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "../signoutbutton/page";
import Link from "next/link";
import { useEffect, useState } from "react";
import { tr } from "date-fns/locale";

function SideNavigation() {
  const [home, setHome] = useState(true);
  const [reserve, setReserve] = useState(false);
  const [profile, setProfile] = useState(false);
  const handlehome = () => {
    setHome(true);
    setProfile(false);
    setReserve(false);
    console.log("home");
  };
  const handleReserve = () => {
    setHome(false);
    setProfile(false);
    setReserve(true);
    console.log("reserve");
  };
  const handleProfile = () => {
    setHome(false);
    setProfile(true);
    setReserve(false);
    console.log("reserve");
  };
  return (
    <nav className="border-r-1 border-gray-500">
      <ul className="flex md:flex-col flex-wrap flex-row gap-2 h-full text-[0.8rem] sm:text-lg">
        <li
          className={
            "cursor-pointer " + (home ? "border-b-2 border-amber-300" : null)
          }
          onClick={handlehome}
        >
          <Link
            href="/account"
            className="py-3 px-2 sm:px-5 hover:bg-gray-900 hover:text-gray-100 transition-colors flex items-center gap-1 sm:gap-4 font-semibold text-primary-200 "
          >
            <HomeIcon className="h-5 w-5 text-gray-600" />
            <p>Home</p>
          </Link>
        </li>
        <li
          className={
            "cursor-pointer " + (reserve ? "border-b-2 border-amber-300" : null)
          }
          onClick={handleReserve}
        >
          <Link
            href="/account/reservation"
            className="py-3  px-2 sm:px-5 hover:bg-gray-900 hover:text-gray-100 transition-colors flex items-center gap-1 sm:gap-4 font-semibold text-primary-200"
          >
            <CalendarDaysIcon className="h-5 w-5 text-gray-600" />
            <p>Reservation</p>
          </Link>
        </li>
        <li
          className={
            "cursor-pointer  " + (profile && "border-b-2 border-amber-300")
          }
        >
          <Link
            href="/account/profile"
            className="py-3  px-2 sm:px-5 hover:bg-gray-900 hover:text-gray-100 transition-colors flex items-center gap-1 sm:gap-4 font-semibold text-primary-200"
            onClick={handleProfile}
          >
            <UserIcon className="h-5 w-5 text-gray-600" />
            <p>Guest</p>
          </Link>
        </li>

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
