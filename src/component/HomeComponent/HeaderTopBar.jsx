import {
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const HeaderTopBar = () => {
  return (
    <div className=" py- bg-red-500  text-white text-sm header-top-wrapper ml-2.5 ">
      {/* Top Bar */}
      <div className=" text-white text-sm flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaClock />
          <span className="font-Lato text-base">09:00 am - 06:00 pm</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-Lato text-base">Follow Us:</span>
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
