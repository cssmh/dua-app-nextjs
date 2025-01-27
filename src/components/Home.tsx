import fs from "fs";
import path from "path";
import { CiSearch } from "react-icons/ci";
import Setting from "./Setting";
import Image from "next/image";
import logo from "/public/assets/duacard.png";

export default async function Home() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const dataDua = JSON.parse(jsonData);

  return (
    <div className="max-w-screen-2xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Sidebar */}
      <div className="lg:col-span-3 col-span-12 border rounded-lg shadow-md sticky top-4 h-max">
        <div className="bg-green-600 text-center rounded-t-lg py-3">
          <p className="text-lg font-bold">Categories</p>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4 border rounded-md px-3 py-2 bg-gray-50 shadow-sm">
            <CiSearch className="text-gray-600 text-xl" />
            <input
              className="outline-none border-none text-sm placeholder-gray-500 w-full"
              type="text"
              placeholder="Search by Dua Name"
            />
          </div>
          {dataDua.map((item) => (
            <p
              key={item._id}
              className="text-sm font-medium hover:text-green-600 transition-all duration-200 mb-3"
            >
              <a href={`#category_${item._id}`}>{item.category}</a>
            </p>
          ))}
        </div>
      </div>
      {/* Center Content */}
      <div className="lg:col-span-6 col-span-12 border rounded-lg shadow-md p-4 h-[80vh] overflow-y-auto">
        {dataDua.map((item, index) => (
          <div
            key={item._id}
            className="mb-6 p-4 rounded-lg shadow-sm border"
          >
            <div
              id={`category_${item._id}`}
              className="flex items-center gap-4 mb-3"
            >
              <Image src={logo} width={100} height={50} alt="logo" />
              <p className="text-xl font-bold text-green-600">
                {index + 1}. {item.title}
              </p>
            </div>
            <p className="mb-2">{item.description}</p>
            <p className="italic mb-2">{item.translation}</p>
            <p className="font-medium">
              <span className="text-green-600 font-bold">Reference:</span>{" "}
              {item.reference}
            </p>
          </div>
        ))}
      </div>
      {/* Right Sidebar */}
      <div className="lg:col-span-3 col-span-12 border rounded-lg shadow-md bg-white p-4">
        <h1 className="text-xl font-bold text-center mb-4">Setting</h1>
        <Setting />
      </div>
    </div>
  );
}
