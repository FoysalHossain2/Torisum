import { BsArrowRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import HeaderTopBar from "./HeaderTopBar";

const Header = () => {
  return (
    <header className="dark:bg-black bg-white w-full">
      <div className="w-full container mx-auto px-4 py-2 flex justify-between gap-x-2">
        {/* Left Logo Section */}
        <div className="bg-green-300 flex items-center gap-2 px-8">
          <div className="text-red-600 text-5xl font-bold">🍽️</div>
          <div>
            <h1 className="font-extrabold text-lg dark:text-white text-black">
              FRESHEAT
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              RESPONDENT
            </p>
          </div>
        </div>

        {/* Right Side Full Section */}
        <div className="flex-1">
          {/* Header Top */}
          <HeaderTopBar />

          {/* Main Header */}
          <div className="py-4 dark:bg-[#111111] bg-black text-white header-navbar-wrapper">
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 font-semibold dark:text-white">
              {["Home", "About Us", "Shop", "Pages", "Blog", "Contact Us"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1 cursor-pointer hover:text-red-600"
                  >
                    <span>{item}</span>
                    <IoIosArrowDown className="text-xs" />
                  </div>
                )
              )}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              <FiSearch className="text-xl dark:text-white cursor-pointer" />

              <div className="relative">
                <HiOutlineShoppingCart className="text-2xl dark:text-white cursor-pointer" />
                <span className="absolute -top-2 -right-2 text-xs bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </div>

              <button className="bg-[#E60028] text-white px-4 py-2 flex items-center gap-2 font-semibold">
                ORDER NOW <BsArrowRight />
              </button>

              <MdOutlineMenu className="text-2xl lg:hidden dark:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
