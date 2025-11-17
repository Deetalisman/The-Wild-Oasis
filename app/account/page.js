"use client";
import { useEffect, useState } from "react";
const Account = () => {
  const name = JSON.parse(localStorage.getItem("username")) || "";
  const [nameofuser, setNameofuser] = useState(name);
  console.log(name);
  return (
    <div>
      <p className="text-amber-300 text-2xl">Welcome {nameofuser}!</p>
    </div>
  );
};

export default Account;
