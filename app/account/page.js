"use client";
import { useEffect, useState } from "react";
const Account = () => {
  const [nameofuser, setNameofuser] = useState("");
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("username")) || "";
    setNameofuser(name);
    console.log(name);
  },[]);

  return (
    <div>
      <p className="text-amber-300 text-2xl">Welcome {nameofuser}!</p>
    </div>
  );
};

export default Account;
