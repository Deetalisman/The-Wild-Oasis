"use client";
import { Router } from "next/router";
import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [signin, setSignin] = useState(false);
  const [signedin, setSignedin] = useState("");
  const [errors, setErrors] = useState(false);
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
    if (name.trim() === "") {
      console.log("empty");
      setErrors(true);
    } else {
      router.push("/account");
      setSignin(false);
      localStorage.setItem("username", JSON.stringify(name));
      setErrors(false);
    }
  };
  return (
    <div className="relative">
      <div className="flex min-h-[50vh] flex-col justify-center items-center">
        <h1 className="text-lg text-gray-400">
          Sign in to access your guest area.
        </h1>
        <button
          onClick={() => setSignin(true)}
          className="mt-6 cursor-pointer flex border-1 border-gray-900 py-2 px-8 bg-gray-700"
        >
          <FcGoogle className="text-2xl" />
          <span className="ml-2 ">Sign in</span>
        </button>
      </div>
      {signin && (
        <Loginpage
          name={name}
          email={email}
          setEmail={setEmail}
          setName={setName}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  );
};

export default Login;

const Loginpage = ({
  name,
  email,
  setEmail,
  setName,
  handleSubmit,
  errors,
}) => {
  return (
    <div className="absolute flex  align-middle mt-[10%]  z-10 -top-10 w-[120%] -left-53 h-[60vh] bg-[#0f101f]">
      <form
        onSubmit={handleSubmit}
        className="flex-col h-fit  bg-gray-500 p-5 px-10 rounded-lg ml-[40%]  flex"
      >
        <label>Name</label>
        <input
          className="bg-gray-400 p-3 text-black  mt-1 w-[20rem]"
          placeholder="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mt-4">Email</label>
        <input
          className="bg-gray-400 p-3 text-black  mt-1 w-[20rem]"
          placeholder="email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors && (
          <p className="text-red-300 text-sm float-right">Please fill</p>
        )}
        <button
          type="submit"
          className="mt-6 cursor-pointer  justify-center flex border-1 border-gray-900 py-2  w-[10rem] bg-gray-700"
        >
          <FcGoogle className="text-2xl" />
          <span className="ml-2 ">Sign in</span>
        </button>
      </form>
    </div>
  );
};
