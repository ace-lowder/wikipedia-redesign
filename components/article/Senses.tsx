import ArticleHeading from "./ArticleHeading";
import ArticleLink from "./ArticleLink";
import Hearing from "./Hearing";
import Vision from "./Vision";

const Senses = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 -mb-4">
        <ArticleHeading>Senses</ArticleHeading>
        <ArticleLink>Cat Senses</ArticleLink>
      </div>
      <Vision />
      <Hearing />
    </div>
  );
};

export default Senses;
