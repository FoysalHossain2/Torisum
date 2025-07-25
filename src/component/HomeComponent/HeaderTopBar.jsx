import {
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HeaderTopBar = () => {
  return (
    <div className=" py-  text-white text-sm header-top-wrapper">
      {/* Top Bar */}
      <div className="   py-4  text-white text-sm flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaClock />
          <span>09:00 am - 06:00 pm</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Follow Us:</span>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
