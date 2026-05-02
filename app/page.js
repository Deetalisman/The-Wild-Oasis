import Link from "next/link";
import bg from "../public/bg.png";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex items-center h-fit mt-36 md:mt-48 px-[10%] lg:px-[20%] justify-center">
      <Image
        src={bg}
        fill
        alt="bg"
        quality={80}
        className="object-cover object-top "
      />
      <div className="text-center relative">
        <div className=" text-[#0c0f3a]">
          <h1 className=" text-2xl md:text-3xl font-extrabold">
            {" "}
            Welcome to your perfect getaway.
          </h1>
          <p className=" text-[0.9rem] md:text-md mt-2">
            Discover cosy cabins, modern comforts, and unforgettable stays. Book
            your ideal escape with just a few clicks and enjoy a seamless,
            stress‑free experience from start to finish.
          </p>
        </div>
        <Link href="/cabin">
          <button className="bg-amber-200 text-[0.8rem] md:text-sm cursor-pointer px-5 md:px-8 py-3 mt-7 rounded-sm  text-black">
            Explore luxury cabins
          </button>
        </Link>
      </div>
    </div>
  );
}
