"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const handlePage = () => {
    const signedIn = JSON.parse(localStorage.getItem("username")) || "";
    if (signedIn === "") {
      router.push("/signup");
    } else {
      router.push("/account");
    }
  };
  return (
    <div className="md:block hidden text-[0.9rem] md:text-md">
      <ul className="flex text-gray-300 justify-between mt-3 w-[12rem] md:w-[15rem]">
        <li>
          <Link className="hover:text-amber-200" href="/cabin">
            Cabin
          </Link>
        </li>
        <li>
          <Link className="hover:text-amber-200" href="/about">
            About
          </Link>
        </li>
        <li>
          <p
            onClick={handlePage}
            className="hover:text-amber-200 cursor-pointer"
          >
            Guest Area
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
