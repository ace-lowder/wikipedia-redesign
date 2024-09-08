import { MdEdit } from "react-icons/md";

interface ArticleHeadingProps {
  children: React.ReactNode;
}

const ArticleHeading = ({ children }: ArticleHeadingProps) => {
  return (
    <div className="flex items-center gap-0.5 border-b">
      <h2>{children}</h2>
      <button className="icon-button-sm mb-0.5 text-gray-500">
        <MdEdit size={12} />
      </button>
    </div>
  );
};

export default ArticleHeading;
