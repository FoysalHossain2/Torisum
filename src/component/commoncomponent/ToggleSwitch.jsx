import { useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

const ToggleSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex items-center">
      <div
        onClick={() => setDarkMode(!darkMode)}
        className={`relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all`}
      >
        {/* Sun Icon */}
        <IoIosMoon className="w-5 h-5 text-yellow-400" />

        {/* Toggle Button */}
        <div
          className={`absolute w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform ${
            darkMode ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>

        {/* Moon Icon */}
        <IoIosSunny className="w-5 h-5 text-gray-900 dark:text-white ml-auto" />
      </div>
    </div>
  );
};

export default ToggleSwitch;
