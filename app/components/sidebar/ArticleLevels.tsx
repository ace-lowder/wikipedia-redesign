"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CollapseHeader from "../CollapseHeader";

const ArticleLevels = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full flex flex-col gap-4">
      <CollapseHeader isOpen={isOpen} onClick={toggle}>
        Top-level Articles
      </CollapseHeader>

      {isOpen && (
        <ul className="text-gray-700 space-y-1">
          <li className="flex items-center justify-between">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              Extant Carnivora Species Test
            </a>
            <button className="icon-button-sm -mr-2">
              <IoIosArrowDown className="mt-1" size={12} />
            </button>
          </li>
          <li className="flex items-center justify-between font-bold pl-4">
            Cats
            <button className="icon-button-sm -mr-2">
              <IoIosArrowDown className="mt-1" size={12} />
            </button>
          </li>
          <li className="flex items-center justify-between pl-8">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              Breeds
            </a>
            <button className="icon-button-sm -mr-2">
              <IoIosArrowDown className="mt-1" size={12} />
            </button>
          </li>
          <li className="flex items-center justify-between pl-12">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              American Curl
            </a>
          </li>
          <li className="flex items-center justify-between pl-12">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              Sphynx
            </a>
          </li>
          <li className="flex items-center justify-between pl-12">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              German Rex
            </a>
          </li>
          <li className="flex items-center justify-between pl-8">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              Felinology
            </a>
            <button className="icon-button-sm -mr-2">
              <IoIosArrowDown className="mt-1" size={12} />
            </button>
          </li>
          <li className="flex items-center justify-between pl-12">
            <a className="overflow-hidden text-ellipsis whitespace-nowrap pr-2">
              Anatomy
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ArticleLevels;
