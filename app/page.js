import Link from "next/link";
import bg from "../public/bg.png";
import Image from "next/image";

export default async function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const data = await res.json();
  return (
    <div className="flex items-center mt-40 justify-center">
      <Image
        src={bg}
        fill
        alt="bg"
        quality={80}
        className="object-cover object-top"
      />
      <div className="text-center relative z-10">
        <p className="text-6xl">Welcome to paradise.</p>
        <Link href="/cabin">
          <button className="bg-amber-200 text-sm cursor-pointer px-12 py-4 mt-7 rounded-sm  text-black">
            Explore luxury cabins
          </button>
        </Link>
      </div>
    </div>
  );
}
