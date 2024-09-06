import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="w-full flex px-6 mb-8 justify-between md:px-3.5 py-4 md:mb-0 items-center gap-4">
        <div id="menu" className="flex gap-4 items-center">
          <button className="icon-button">
            <HiOutlineMenu size={20} />
          </button>
          <Image
            src="/logo.png"
            width={198}
            height={48}
            className="cursor-pointer"
            alt="logo"
          />
        </div>
        <div className="absolute top-20 left-[20%] w-1/2 flex justify-between text-gray-400 items-center md:static md:grow mx-8 max-w-[800px] bg-gray-100 px-4 rounded-lg h-9 cursor-pointer hover:bg-gray-200">
          Search Wikipedia <IoSearchSharp />
        </div>
        <div id="options" className="flex gap-2 items-center">
          <button className="bg-yellow-400 text-gray-700 h-[34px] px-3 text-sm font-semibold rounded-md text-nowrap">
            Go PRO
          </button>
          <button className="icon-button">
            <FaRegUser size={17} />
          </button>
          <button className="icon-button">
            <MdOutlinePalette size={21} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
