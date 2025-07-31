import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { TfiSearch } from "react-icons/tfi";
import RightSightBar from "../commoncomponent/RightSightBar";
import SearchOverlay from "../commoncomponent/SearchOverlay";
import HeaderTopBar from "./HeaderTopBar";

const Header = () => {
  const [SearchbarOverlay, setSearchbarOverlay] = useState(false);
  const [RightMenu, setRightMenu] = useState(false);

  const handleSearchbarOverlay = () => {
    setSearchbarOverlay(true);
  };

  const closeSearchOverlay = () => {
    setSearchbarOverlay(false);
  };

  // Right Sidebar State
  const handleRightSidebar = () => {
    setRightMenu(true);
  };

  return (
    <>
      {SearchbarOverlay && (
        <SearchOverlay
          SearchbarOverlay={SearchbarOverlay}
          closeSearchOverlay={closeSearchOverlay}
        />
      )}
      {RightMenu && <RightSightBar onClose={() => setRightMenu(false)} />}
      <header className="dark:bg-black bg-white w-full">
        <div className="w-full container mx-auto flex justify-between gap-x-14 items-center">
          {/* Left Logo Section */}
          <div className=" flex items-center justify-center gap-2">
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
            <div className=" dark:bg-[#111111] bg-black text-white header-navbar-wrapper">
              {/* Navigation Links */}
              <nav className="hidden lg:flex items-center gap-8 font-semibold dark:text-white">
                {[
                  "Home",
                  "About Us",
                  "Shop",
                  "Pages",
                  "Blog",
                  "Contact Us",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1 cursor-pointer hover:text-red-600"
                  >
                    <span className="font-semibold text-[17px] font-Lato ">
                      {item}
                    </span>
                    <IoIosArrowDown className="text-xs" />
                  </div>
                ))}
              </nav>

              {/* Right Side Icons */}
              <div className="flex items-center gap-6">
                <TfiSearch
                  onClick={handleSearchbarOverlay}
                  className="text-xl text-gray-400 dark:text-white cursor-pointer"
                />

                <div className="relative">
                  <HiOutlineShoppingCart className="text-2xl text-gray-400 dark:text-white cursor-pointer" />
                  <span className="absolute -top-2 -right-2 text-base bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <button className="bg-[#E60028] font-Hanken-Grotesk text-white/80 px-4 py-2 flex items-center gap-2 font-medium ">
                  ORDER NOW <BsArrowRight />
                </button>

                <MdOutlineMenu
                  onClick={handleRightSidebar}
                  className="text-2xl  dark:text-white cursor-pointer text-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
