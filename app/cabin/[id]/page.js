"use client";
import { use } from "react";
import Image from "next/image";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Reservation from "../../Reservation/page";
import { CabinsData } from "../../Api/api";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const CabinDetails = ({ params }) => {
  const { id } = use(params);
  const cab = CabinsData.find((item) => item.id === id);
  console.log(cab);
  const router = useRouter();
  return (
    <div className="pb-10">
      <FaCircleArrowLeft
        onClick={() => router.back()}
        className="text-xl text-amber-400 cursor-pointer"
      />
      <div className="flex justify-between">
        <Image
          src={cab.image}
          alt={cab.name}
          width={500}
          className="h-130 object-cover rounded-tl-3xl rounded-br-3xl object-top w-[40%] mt-8"
        />
        <div className="w-[50%] mt-15 text-gray-300">
          <h1 className="text-5xl font-bold text-gray-200">{cab.name}</h1>
          <p className="mt-5 tracking-wide">
            {cab.description} {cab.name}. {cab.fulldescription}
          </p>
          <div className="text-[1rem] mt-10 flex">
            <BsFillPeopleFill className="mr-2 text-gray-500 mt-1 text-lg" />
            <p className="text-gray-300 ">
              For up to{" "}
              <span className="font-bold text-[1.2rem]">{cab.maxCapacity}</span>{" "}
              guests.
            </p>
          </div>
          <div className="text-[1rem] mt-4 flex">
            <FaLocationDot className="mr-2 text-gray-500 mt-1 text-lg" />
            <p className="text-gray-300 ">
              Located in the heart of the{" "}
              <span className="font-bold text-[1.2rem]">{cab.location}</span>{" "}
            </p>
          </div>
          <div className="text-[1rem] mt-4 flex">
            <FaEyeSlash className="mr-2 text-gray-500 mt-1 text-lg" />
            <p className="text-gray-300 ">
              Privacy{" "}
              <span className="font-bold text-[1.2rem]">
                {cab.privacylevel}
              </span>{" "}
              guaranteed.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center mt-10 text-3xl">
        Reserve {cab.name} today! Pay on arrival.
      </h1>
      <Reservation cab={cab} />
    </div>
  );
};

export default CabinDetails;
