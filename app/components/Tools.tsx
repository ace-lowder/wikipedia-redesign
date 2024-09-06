"use client";

import { IoLanguage } from "react-icons/io5";

import { useState } from "react";
import CollapseHeader from "./CollapseHeader";

const Tools = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full flex flex-col gap-4">
      <CollapseHeader isOpen={isOpen} onClick={toggle}>
        Tools
      </CollapseHeader>

      {isOpen && (
        <div className="flex flex-col gap-2">
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Languages
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Topic Map
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            My Notes
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Ask WikiPal
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Save Article
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Watch Changes
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Permanent Link
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Short Link
          </button>
          <button className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
            <IoLanguage />
            Cite This Page
          </button>
        </div>
      )}
    </div>
  );
};

export default Tools;
