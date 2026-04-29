"use client";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function SignOutButton() {
  const handleSignout = () => {
    localStorage.removeItem("username");
  };
  return (
    <Link
      href="/"
      onClick={handleSignout}
      className="py-3 px-2 sm:px-5 hover:bg-gray-900 hover:text-gray-100 transition-colors flex items-center gap-1 sm:gap-4 font-semibold text-primary-200 w-full"
    >
      <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600" />
      <span>Sign out</span>
    </Link>
  );
}

export default SignOutButton;
