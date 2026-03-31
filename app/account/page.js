"use client";
import { useEffect, useState } from "react";
const Account = () => {
  const [nameofuser, setNameofuser] = useState("");
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem("username")) || "";
    setNameofuser(name);
    console.log(name);
  }, []);

  return (
    <div>
      <p className="text-amber-300 text-2xl">Welcome {nameofuser}!</p>
      <p className="text-sm text-gray-400">To paradise, your save haven</p>

      <p className="mt-6">
        Make sure to fill in some more details at the Guest Profile section to
        get you ready to book cabin
      </p>
    </div>
  );
};

export default Account;
