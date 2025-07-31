import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

const SearchOverlay = ({ closeSearchOverlay }) => {
  const [animate, setAnimate] = useState(false);

  // Mount: entrance animation
  useEffect(() => {
    const timeoutId = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timeoutId);
  }, []);

  // Close with animation
  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      closeSearchOverlay();
    }, 300); // match animation duration
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed top-0 left-0 w-screen h-screen z-50 bg-white/80 backdrop-blur-[2px] 
        transition-all duration-300 ease-in-out 
        ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute font-bold cursor-pointer top-6 right-6 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500
          transition-all duration-300 ease-in-out origin-top-right"
      >
        <RxCross1 size={28} />
      </button>

      {/* Centered Search Box */}
      <div
        onClick={(e) => e.stopPropagation()} // 👈 stop click from closing overlay
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[484px] p-4 max-h-[100vh] overflow-auto"
      >
        <div className="w-full max-w-md px-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-center text-red-600 dark:text-red-400 text-2xl font-semibold placeholder-red-500 dark:placeholder-red-400 outline-none border-b-2 border-red-500 dark:border-red-400 bg-transparent py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
