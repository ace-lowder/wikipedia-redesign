import ArticleHeading from "../ArticleHeading";
import Hearing from "./Hearing";
import Vision from "./Vision";

const Senses = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <ArticleHeading>Senses</ArticleHeading>
        <p>Main Article: Cat Senses</p>
      </div>
      <Hearing />
      <Vision />
    </div>
  );
};

export default Senses;
