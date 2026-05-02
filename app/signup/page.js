"use client";
import Link from "next/link";
import { useEffect } from "react";
const Signup = () => {
  return (
    <div className="px-[20%] text-center ">
      <h1 className="text-[1.1rem] text-gray-400 mt-30 mb-10">
        Sign in or create an account.
      </h1>

      <Link
        href="/login"
        className="ml-2 cursor-pointer underline text-gray-300"
      >
        Log in
      </Link>
      <p className="text-gray-500 mt-2">
        No account{" "}
        <Link href="/createaccount" className="text-gray-300 underline">
          Sign Up
        </Link>
      </p>
      <div className="absolute bottom-10 w-[60%] text-gray-500 text-sm">
        <p>
          By signing in or creating an account, you agree with our{" "}
          <span className="text-gray-300">
            Terms & conditions and Privacy statements{" "}
          </span>
        </p>
        <p className="mt-3">All rights reserved.</p>
        <p>Copyrights (2026)</p>
      </div>
    </div>
  );
};

export default Signup;
