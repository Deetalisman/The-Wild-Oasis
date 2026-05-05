"use client";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersdetails, setUsersdetails] = useState({});
  const [errors, setErrors] = useState(false);
  const [fail, setFail] = useState(false);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    if (email.trim() === "") {
      setErrors(true);
    } else {
      const user = {
        email,
        password,
      };
      console.log(user);
      const users = JSON.parse(localStorage.getItem("users")) || [];
      setUsersdetails(users);
      console.log(usersdetails);
      const userCheck = (newUser, users) => {
        return users.some(
          (res) =>
            res.email === newUser.email && res.password === newUser.password,
        );
      };

      if (userCheck(user, users)) {
        console.log("correct");
        const currentUser = usersdetails.find(
          (userdetail) => userdetail.email === user.email,
        );
        console.log(currentUser);

        const name = currentUser.name;
        const currentuser =
          JSON.parse(localStorage.getItem("currentuser")) || [];

        localStorage.setItem("currentuser", JSON.stringify(currentUser));
        localStorage.setItem("username", JSON.stringify(name));
        setErrors(false);
        router.push("/account");
        setFail(false);
      } else {
        setFail(true);
        console.log("incorrect");
      }
    }
  };
  return (
    <div className=" bg-[#0f101f] mt-[3rem] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex-col h-fit w-fit  py-6  sm:px-10 rounded-lg  flex"
      >
        <label className="mt-4  text-gray-400">Email</label>
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
          <p className="text-red-300 text-sm float-right">Please fill</p>
        )}
        {fail && (
          <p className="text-red-300 text-[0.8rem] mt-2 text-center float-right">
            Invalid email or password
          </p>
        )}
        <button
          type="submit"
          className="mt-6 text-[0.9rem] cursor-pointer rounded-lg  justify-center flex border-1 border-gray-900 py-2  w-full bg-gray-700"
        >
          <span className="ml-2 ">Sign in</span>
        </button>
        <p className="text-gray-500 mt-2 text-[0.9rem]">
          No account{" "}
          <Link
            href="/createaccount"
            className="text-gray-300 underline text-[1rem]"
          >
            Sign Up
          </Link>
        </p>
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

export default Login;
