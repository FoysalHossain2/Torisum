// import { FaLocationDot, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const RightSightBar = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 h-screen w-[320px] sm:w-[400px] bg-white z-50 shadow-lg overflow-y-auto p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png" // change to your logo path
            alt="Logo"
            className="h-10 w-10"
          />
          <div>
            <h2 className="text-lg font-bold text-[#E60028]">FRESHEAT</h2>
            <p className="text-xs font-semibold text-gray-500">RESPONDENT</p>
          </div>
        </div>
        <button onClick={onClose}>
          <RxCross1
            size={28}
            className="text-red-600 hover:text-red-800 transition"
          />
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        This involves interactions between a business and its customers. It's
        about meeting customers' needs and resolving their problems. Effective
        customer service is crucial.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {[
          "/img1.jpg",
          "/img2.jpg",
          "/img3.jpg",
          "/img4.jpg",
          "/img5.jpg",
          "/img6.jpg",
        ].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`food-${i}`}
            className="w-full h-20 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Contact Info */}
      <h3 className="text-base font-bold mb-2">Contact Info</h3>
      <ul className="space-y-3 text-sm text-gray-700">
        <li className="flex items-center gap-2">
          {/* <FaLocationDot className="text-red-600" /> */}
          <span>Main Street, Melbourne, Australia</span>
        </li>
        <li className="flex items-center gap-2">
          {/* <MdEmail className="text-red-600" /> */}
          <span>info@fresheat.com</span>
        </li>
        <li className="flex items-center gap-2">
          {/* <FaRegClock className="text-red-600" /> */}
          <span>Mon-Friday, 09am -05pm</span>
        </li>
        <li className="flex items-center gap-2">
          {/* <FaPhoneAlt className="text-red-600" /> */}
          <span>+11002345909</span>
        </li>
      </ul>

      {/* Order Button */}
      <button className="mt-6 flex items-center justify-center gap-2 w-full bg-[#E60028] text-white font-semibold py-2 rounded hover:bg-red-700 transition">
        <FaCartShopping />
        ORDER NOW
      </button>
    </div>
  );
};

export default RightSightBar;
