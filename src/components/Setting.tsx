"use client";

import { IoLanguageOutline } from "react-icons/io5";
import { TbWashGentle } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { useState } from "react";

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className="p-6 rounded-lg shadow-lg">
      {/* Header */}
      {[
        { icon: IoLanguageOutline, label: "Language Settings" },
        { icon: TbWashGentle, label: "General Settings" },
        { icon: RxDashboard, label: "Font Settings" },
        { icon: RxDashboard, label: "Appearance Settings" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 mb-4 p-4 rounded-lg duration-200 cursor-pointer"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full text-2xl">
            <item.icon />
          </div>
          <p className="font-semibold text-lg">{item.label}</p>
        </div>
      ))}
      {/* Night Mode Toggle */}
      <div
        className="flex items-center justify-between p-4 rounded-lg"
      >
        <span className="font-semibold text-lg">Night Mode</span>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={darkMode}
            onChange={handleToggle}
          />
        </label>
      </div>
    </div>
  );
};

export default Setting;
