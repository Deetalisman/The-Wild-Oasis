"use client";
import { useEffect, useState } from "react";
import { CabinsData } from "../Api/api";
import Image from "next/image";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
const Cabin = () => {
  const [cabins, setCabins] = useState(CabinsData);
  const [activeButton, setActiveButton] = useState("all");
  const handleallcabin = () => {
    setCabins(CabinsData);
    setActiveButton("all");
  };
  const handlethreeguest = () => {
    const threecabin = CabinsData.filter(
      (item) => (item.maxCapacity >= "2") & (item.maxCapacity <= "3")
    );
    setCabins(threecabin);
    console.log(threecabin);
    setActiveButton("three");
  };
  const handlefourguest = () => {
    const fourcabin = CabinsData.filter(
      (item) => (item.maxCapacity >= "4") & (item.maxCapacity <= "7")
    );
    setCabins(fourcabin);
    console.log(fourcabin);
    setActiveButton("four");
  };
  const handleeightguest = () => {
    const eightcabin = CabinsData.filter((item) => item.maxCapacity >= "8");
    setCabins(eightcabin);
    console.log(eightcabin);
    setActiveButton("eight");
  };
  return (
    <div className="mt-15 pb-10">
      <h1 className="text-4xl mb-5 text-amber-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-gray-300 text-[1rem] mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex justify-end text-gray-400 flex-row gap-3">
        <button
          onClick={() => handleallcabin()}
          className={
            "py-3 px-5 text-sm cursor-pointer  " +
            (activeButton === "all" ? "bg-gray-500 text-white" : "bg-none")
          }
        >
          All Cabin
        </button>
        <button
          onClick={() => handlethreeguest()}
          className={
            "py-3 px-5 text-sm hover:bg-gray-500 cursor-pointer  " +
            (activeButton === "three" ? "bg-gray-500 text-white" : "bg-none")
          }
        >
          3-2 guests
        </button>
        <button
          onClick={() => handlefourguest()}
          className={
            "py-3 px-5 text-sm hover:bg-gray-500 cursor-pointer " +
            (activeButton === "four" ? "bg-gray-500 text-white" : "bg-none")
          }
        >
          4-7 guests
        </button>
        <button
          onClick={() => handleeightguest()}
          className={
            "py-3 px-5 text-sm cursor-pointer hover:bg-gray-500 " +
            (activeButton === "eight" ? "bg-gray-500 text-white" : "bg-none")
          }
        >
          8-12 guests
        </button>
      </div>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 mt-7 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <div key={cabin.id} className="flex border-2 border-gray-800">
              <Image
                src={cabin.image}
                alt={cabin.name}
                width={150}
                className="h-50 object-cover object-top"
              />
              <aside className="w-full">
                <div className="px-5 pt-4">
                  <h1 className="text-amber-300 text-lg">{cabin.name}</h1>
                  <div className="text-sm mt-3 flex">
                    <BsFillPeopleFill className="mr-2 text-gray-500 mt-1 text-lg" />
                    <p className="text-gray-300">
                      For up to{" "}
                      <span className="font-bold text-[1rem]">
                        {cabin.maxCapacity}
                      </span>{" "}
                      guests.
                    </p>
                  </div>
                  <p className="text-right mt-3 text-gray-300 text-sm">
                    <span className="  text-3xl">{cabin.regularPrice}</span> /
                    night
                  </p>
                </div>
                <div className="border-t-2 flex border-gray-800 mt-6">
                  <p className="w-[0] lg:w-[30%] xl:w-[40%]"></p>
                  <div className="border-l-2 flex w-70 pl-2 xl:pl-2 text-gray-300 hover:bg-amber-300 hover:text-black cursor-pointer text-[0.75rem] lg:text-sm py-3 border-gray-800 ">
                    <Link href={`cabin/${cabin.id}`} className="flex">
                      Details & reservations
                      <FaArrowRightLong className="mt-1 ml-2 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cabin;
