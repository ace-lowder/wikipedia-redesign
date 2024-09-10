"use client";

import { IoLanguage } from "react-icons/io5";
import { FaSitemap } from "react-icons/fa";
import { MdOutlineEditNote } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { HiMiniLink } from "react-icons/hi2";
import { BiSolidQuoteAltRight } from "react-icons/bi";
import { useState } from "react";
import CollapseHeader from "./CollapseHeader";

const Tools = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prev) => !prev);

  // prettier-ignore
  const toolButtons = [
    { name: "Languages", icon: <IoLanguage className="w-6" />, pro: false },
    { name: "Topic Map", icon: <FaSitemap className="w-6" size={12} />, pro: true },
    { name: "My Notes", icon: <MdOutlineEditNote className="w-6" size={22} />, pro: true},
    { name: "Ask WikiPal", icon: <BsStars className="w-6" />, pro: true },
    { name: "Save Article", icon: <FaRegBookmark className="w-6" size={16} />, pro: false },
    { name: "Watch Changes", icon: <FaRegStar className="w-6" />, pro: false },
    { name: "Permanent Link", icon: <IoLink className="w-6" />, pro: false },
    { name: "Share Link", icon: <HiMiniLink className="w-6" />, pro: false },
    { name: "Quote", icon: <BiSolidQuoteAltRight className="w-6" />, pro: false},
  ];

  const proTag = (
    <div className="px-1 pt-0.5 bg-yellow-400 text-[0.7rem] text-white font-bold rounded-[4px] leading-3 ml-auto">
      PRO
    </div>
  );

  return (
    <div className="w-full space-y-4">
      <CollapseHeader isOpen={isOpen} onClick={toggle}>
        Tools
      </CollapseHeader>

      {isOpen && (
        <div className="flex flex-col gap-2">
          {toolButtons.map(({ name, icon, pro }) => (
            <button key={name} className="tool-button">
              {icon}
              {name}
              {pro && proTag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
