import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-4 shadow-md">
      <div className="flex justify-between items-center font-inter px-8">
        <h1 className="text-2xl font-semibold">
          <Image src="/assets/logo.webp" width={40} height={40} alt="logo" />
        </h1>
        <div className="flex items-center w-96 px-2 py-1">
          <input
            className="outline-none text-sm px-3 py-2 rounded-lg w-full"
            type="text"
            placeholder="Search by Dua Name"
          />
          <CiSearch className="p-2 w-10 h-10 cursor-pointer rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/muslim.jpg"
            width={30}
            height={30}
            className="rounded-full"
            alt="profile"
          />
          <Link href={""}>Support</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
