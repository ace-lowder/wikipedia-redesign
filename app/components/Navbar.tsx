import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="px-6 mb-8 section justify-between md:px-3.5 py-4 md:mb-0 items-center">
        <div id="menu" className="flex gap-4 items-center">
          <button className="icon-button">
            <HiOutlineMenu size={20} />
          </button>
          <Image src="/logo.png" width={198} height={48} alt="logo" />
        </div>
        <input
          className="absolute top-20 left-[20%] w-1/2 md:static md:grow mx-8 max-w-[800px] bg-gray-100 px-4 rounded-lg h-9 cursor-pointer hover:bg-gray-200"
          placeholder="Search Wikipedia"
        />
        <div id="options" className="flex gap-2 items-center">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-700 h-[34px] px-3 text-sm font-semibold rounded-md text-nowrap">
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
