import Image from "next/image";
import logo from "../Header/logo-light.png";
import Navigation from "../Navigation/page";
import Link from "next/link";
const Header = () => {
  return (
    <div className=" pt-10 relative z-10 flex justify-between">
      <aside className="flex">
        <Image src={logo} alt="logo" width={80} />
        <Link href="/" className="mt-3 text-gray-300 hover:text-amber-200">
          The Wild Oasis.
        </Link>
      </aside>
      <Navigation />
    </div>
  );
};

export default Header;
