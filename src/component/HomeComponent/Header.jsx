// import airplane from "@/assets/airplane.png"; // Replace with your local path
import { FaGlobe } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import userAvatar from "../../assets/Ellipse.png"; // Replace with your local path
import { navItems } from "../../data";
import ToggleSwitch from "../commoncomponent/ToggleSwitch"; // Adjust the import path as necessary

const Header = () => {
  return (
    <header className="w-full border-b border-gray-400/20 text-sm py-4 ">
      {/* Main navbar */}
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-800">
            <span className="text-green-600">T</span>
          </span>
        </div>

        {/* Navigation links */}
        <ul className="hidden lg:flex gap-6 text-sm items-center">
          {navItems.map((items, id) => (
            <li key={id}>
              <a href={items.url} className="text-base flex items-center gap-1">
                {items.title}
                {items.dropdown && <IoIosArrowDown />}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <ToggleSwitch className="hidden md:block" />

          <div className="hidden md:flex items-center gap-2">
            <FaGlobe className="text-green-600" />
            <span>English</span>
            <IoIosArrowDown />
          </div>

          <div className="hidden md:flex items-center gap-2">
            <span>USD</span>
            <IoIosArrowDown />
          </div>

          <FiSearch className="text-lg cursor-pointer" />

          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden ml-4">
          <div className="w-10 h-10 bg-green-600 rounded-md grid grid-cols-3 gap-1 p-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
