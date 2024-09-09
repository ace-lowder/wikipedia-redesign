import { TbNotes } from "react-icons/tb";

interface ArticleLinkProps {
  children: React.ReactNode;
}

const ArticleLink = ({ children }: ArticleLinkProps) => {
  return (
    <button className="w-fit flex items-center rounded-md bg-slate-100 gap-1 mt-1 py-0.5 px-2 hover:bg-slate-200">
      <TbNotes size={14} className="text-blue-500" /> Main Article:{" "}
      <span className="text-blue-500">{children}</span>
    </button>
  );
};

export default ArticleLink;
