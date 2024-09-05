import { BsDash, BsListUl } from "react-icons/bs";

interface CollapseHeaderProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const CollapseHeader = ({ children, isOpen, onClick }: CollapseHeaderProps) => {
  return (
    <div
      className={`flex border-b items-center gap-2 font-semibold cursor-pointer ${
        isOpen ? "border-b-gray-300" : "border-b-white"
      }`}
      onClick={onClick}
    >
      <button className="icon-button-sm" onClick={onClick}>
        {isOpen ? (
          <BsDash className="text-gray-500 stroke-[0.6]" size={22} />
        ) : (
          <BsListUl className="text-gray-500 stroke-[0.6]" size={16} />
        )}
      </button>
      {children}
    </div>
  );
};

export default CollapseHeader;
