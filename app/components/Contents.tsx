import { BsDash } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Contents = () => {
  return (
    <div className="section flex-col">
      <div className="flex border-b items-center gap-2 font-semibold">
        <button className="icon-button-sm">
          <BsDash className="text-gray-500" size={22} />
        </button>
        Contents
      </div>
      <ul className="text-gray-700 space-y-1">
        <li className="flex items-center justify-between">
          Senses <IoIosArrowForward className="mt-1" size={12} />
        </li>
        <li className="flex items-center justify-between">
          Behavior <IoIosArrowForward className="mt-1" size={12} />
        </li>
      </ul>
    </div>
  );
};

export default Contents;
