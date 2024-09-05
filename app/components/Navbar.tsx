import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlinePalette } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="section justify-between p-4 items-center">
        <div id="menu" className="flex gap-4 items-center">
          <button className="icon-button">
            <HiOutlineMenu size={20} />
          </button>
          <Image src="/logo.png" width={198} height={48} alt="logo" />
        </div>
        <input
          className="w-1/2 bg-gray-100 px-4 rounded-lg h-9 cursor-pointer hover:bg-gray-200"
          placeholder="Search Wikipedia"
        ></input>
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
