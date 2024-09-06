import { TbNotes } from "react-icons/tb";

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <div className="flex items-end justify-between border-b">
      <div className="flex items-end gap-2 p-2">
        <TbNotes size={24} className="stroke-2 mb-1.5" />
        <h1>{children}</h1>
      </div>
      <div className="flex items-center relative top-[1px]">
        <button className="bg-white border-l border-t border-r rounded-t-lg text-xl p-2">
          Article
        </button>
        <button className="text-xl p-2">Talk</button>
      </div>
    </div>
  );
};

export default Title;
