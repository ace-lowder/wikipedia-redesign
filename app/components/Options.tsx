import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";

const Options = () => {
  return (
    <div className="w-full flex border-b pt-2">
      <button className="relative top-[1px] flex p-2 items-center gap-2 border-b-2 border-blue-400 text-blue-400">
        <IoMdEye size={18} />
        Read
      </button>
      <button className="flex p-2 items-center gap-2 text-gray-400">
        <MdEdit size={18} />
        Edit
      </button>
      <button className="flex p-2 items-center gap-2 text-gray-400">
        <MdHistory size={20} />
        History
      </button>
      <button className="flex p-2 items-center gap-2 text-gray-400">
        <IoNewspaperOutline />
        Related Pages
      </button>
    </div>
  );
};

export default Options;
