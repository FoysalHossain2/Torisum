import {
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTimes,
  FaVimeoV,
} from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";

const HeaderTopBar = () => {
  return (
    <div className="bg-gray-100 text-gray-600  text-base">
      <div className="container">
        <div className=" flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 items-center flex-wrap justify-between">
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-green-600" />
              <span>Thursday, Mar 26, 2021</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope className="text-green-600" />
              <span>Info@Webmail.Com</span>
            </div>
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-green-600" />
              <span>684 555–0102 490</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 mt-2 md:mt-0">
            <a href="#" className="flex items-center gap-1 text-green-600">
              <MdCalendarToday />{" "}
              <span className="text-gray-600"> Booking Now</span>
            </a>
            <span className="text-gray-500">Follow Us :</span>
            <div className="flex gap-3 text-gray-700">
              <FaFacebookF />
              <FaVimeoV />
              <FaTimes />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTopBar;
