import { MdEdit } from "react-icons/md";

interface ArticleSubheadingProps {
  children: React.ReactNode;
}

const ArticleSubheading = ({ children }: ArticleSubheadingProps) => {
  return (
    <div className="flex items-center gap-0.5">
      <h3>{children}</h3>
      <button className="icon-button-sm mb-0.5 text-gray-500">
        <MdEdit size={12} />
      </button>
    </div>
  );
};

export default ArticleSubheading;
