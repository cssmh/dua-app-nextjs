import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-5 shadow-md">
      <div className="flex justify-between items-center font-inter px-4">
        <h1 className="text-2xl font-bold ">Dua Page</h1>
        <div className="flex items-center border w-96 px-2 py-1 rounded-lg shadow-sm">
          <input
            className="outline-none border-none text-sm bg-gray-50 px-3 py-2 rounded-lg w-full"
            type="text"
            placeholder="Search by Dua Name"
          />
          <CiSearch className="p-2 w-10 h-10 cursor-pointer rounded-lg" />
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/profile.jpg"
            width={30}
            height={30}
            className="rounded-full"
            alt="profile"
          />
          <select className="bg-transparent outline-none cursor-pointer">
            <option value="support us" hidden>
              Support Us
            </option>
            <option value="support us">Support Us</option>
            <option value="download dua">Download Dua</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
