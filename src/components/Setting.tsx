import { IoLanguageOutline } from "react-icons/io5";
import { TbWashGentle } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";

const Setting = () => {
  return (
    <div>
      <div className="flex gap-4 w-full mb-5 hover:border-l-4 hover:text-[#1FA45B]  duration-200 hover:border-[#1FA45B] py-1 px-5 rounded items-center bg-[#F7F8FA]">
        <p className="bg-[#E8F0F5] hover:text-[#1FA45B] text-2xl flex justify-center items-center text-[#868686] h-12 w-12 rounded-full p-2">
          <IoLanguageOutline className="" />
        </p>
        <p className="font-inter text-[#868686] hover:text-[#1FA45B] font-semibold text-lg">
          Language Settings
        </p>
      </div>
      <div className="flex gap-4 w-full mb-5 hover:border-l-4 hover:text-[#1FA45B]  duration-200 hover:border-[#1FA45B] py-1 px-5 rounded items-center bg-[#F7F8FA]">
        <p className="bg-[#E8F0F5] hover:text-[#1FA45B] text-2xl flex justify-center items-center text-[#868686] h-12 w-12 rounded-full p-2">
          <TbWashGentle className="" />
        </p>
        <p className="font-inter text-[#868686] hover:text-[#1FA45B] font-semibold text-lg">
          General Settings
        </p>
      </div>
      <div className="flex gap-4 w-full mb-5 hover:border-l-4 hover:text-[#1FA45B]  duration-200 hover:border-[#1FA45B] py-1 px-5 rounded items-center bg-[#F7F8FA]">
        <p className="bg-[#E8F0F5] hover:text-[#1FA45B] text-2xl flex justify-center items-center text-[#868686] h-12 w-12 rounded-full p-2">
          <RxDashboard className="" />
        </p>
        <p className="font-inter text-[#868686] hover:text-[#1FA45B] font-semibold text-lg">
          Font Settings
        </p>
      </div>
      <div className="flex gap-4 w-full  hover:border-l-4 hover:text-[#1FA45B]  duration-200 hover:border-[#1FA45B] py-1 px-5 rounded items-center bg-[#F7F8FA]">
        <p className="bg-[#E8F0F5] hover:text-[#1FA45B] text-2xl flex justify-center items-center text-[#868686] h-12 w-12 rounded-full p-2">
          <RxDashboard className="" />
        </p>
        <p className="font-inter text-[#868686] hover:text-[#1FA45B] font-semibold text-lg">
          Appearance Settings
        </p>
      </div>
      <div className="form-control border-b border-l border-r py-7 rounded-lg px-5">
        <label className="label cursor-pointer flex justify-between">
          <span className="label-text text-lg font-inter font-semibold">
            Night Mode
          </span>
          <input type="checkbox" className="toggle" />
        </label>
      </div>
    </div>
  );
};
export default Setting;
