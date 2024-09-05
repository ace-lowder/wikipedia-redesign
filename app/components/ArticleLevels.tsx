"use client";

import { useState } from "react";
import CollapseHeader from "./CollapseHeader";

const ArticleLevels = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full flex flex-col gap-4">
      <CollapseHeader isOpen={isOpen} onClick={toggle}>
        Top-level Articles
      </CollapseHeader>
    </div>
  );
};

export default ArticleLevels;
