"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import CollapseHeader from "../CollapseHeader";

const Contents = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full flex flex-col gap-4">
      <CollapseHeader isOpen={isOpen} onClick={toggle}>
        Contents
      </CollapseHeader>

      {isOpen && (
        <ul className="text-gray-700 space-y-1">
          <li className="flex items-center justify-between">
            Senses
            <button className="icon-button-sm -mr-2">
              <IoIosArrowForward className="mt-1" size={12} />
            </button>
          </li>
          <li className="flex items-center justify-between">
            Behavior
            <button className="icon-button-sm -mr-2">
              <IoIosArrowForward className="mt-1" size={12} />
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Contents;
