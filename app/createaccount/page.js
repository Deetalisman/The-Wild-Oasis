"use client";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Createaccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [copy, setCopy] = useState(false);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      console.log("empty");
      setErrors(true);
    } else {
      setErrors(false);
      console.log(password);
      const user = {
        id: Date.now(),
        name,
        email,
        password,
      };
      console.log(user);
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = (newUser, users) => {
        return users.some(
          (res) => res.name === newUser.name && res.email === newUser.email,
        );
      };

      if (userExists(user, users)) {
        setCopy(true);
      } else {
        const updateUser = [...users, user];
        console.log(updateUser);
        localStorage.setItem("users", JSON.stringify(updateUser));
        localStorage.setItem("username", JSON.stringify(name));
        router.push("/account");
      }
    }
  };
  return (
    <div className=" bg-[#0f101f] mt-0 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex-col h-fit w-fit mt-0   py-6  sm:px-10 rounded-lg  flex"
      >
        <h1 className=" text-[0.96rem] lg:text-[1.1rem] text-gray-400 mt-3 mb-10">
          Sign in or create an account.
        </h1>
        <label className="text-[1rem] text-gray-400">Username</label>
        <input
          className="bg-gray-500 text-[0.9rem] p-2 text-white  rounded-lg  mt-1 w-"
          placeholder="Enter a username.."
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="mt-4 text-gray-400">Email</label>
        <input
          className="bg-gray-500 text-[0.9rem] p-2 text-white
           rounded-lg  mt-1 w-[20rem]"
          placeholder="Enter your email.."
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="mt-4 text-gray-400">Password</label>
        <input
          className="bg-gray-500 text-[0.9rem] p-2 text-white
           rounded-lg  mt-1 w-[20rem]"
          placeholder="min 8 letters"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errors && (
          <p className="text-red-300 mt-2 text-[0.9rem] float-right">
            Please fill all.
          </p>
        )}

        <button
          type="submit"
          className="mt-6 text-[0.9rem] cursor-pointer rounded-lg  justify-center flex border-1 border-gray-900 py-2  w-full bg-gray-700"
        >
          <span className="ml-2 ">Sign up</span>
        </button>
        <p className="mt-1 text-[0.9rem] text-gray-300 lg:text-lg">
          Existing user?{" "}
          <Link href="/login" className="text-white underline text-[1rem]">
            Login
          </Link>
        </p>
        {copy && (
          <p className="text-red-200 text-[0.85rem] mt-2 text-center float-right">
            account already exist{" "}
          </p>
        )}
      </form>
      <div className="absolute bottom-5 w-[60%] text-gray-500 text-center text-sm">
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

export default Createaccount;
