import { IoLanguageOutline } from "react-icons/io5";
import { TbWashGentle } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";

const Setting = () => {
  return (
    <div className="p-4">
      {[
        { icon: TbWashGentle, label: "General" },
        { icon: RxDashboard, label: "Font" },
        { icon: IoLanguageOutline, label: "Language" },
        { icon: RxDashboard, label: "Appearance" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 rounded-lg duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full text-xl">
            <item.icon />
          </div>
          <p className="font-semibold text-base">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Setting;
