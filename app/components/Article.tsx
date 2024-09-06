interface ArticleProps {
  articleData: {
    paragraphs: [React.ReactNode];
    panel: React.ReactNode;
  };
}

const Article = ({ articleData }: ArticleProps) => {
  return (
    <div className="w-full flex flex-col gap-4 md:block">
      {articleData.panel}
      {articleData.paragraphs.map((text, index) => (
        <div key={index} className="md:mb-4">
          {text}
        </div>
      ))}
    </div>
  );
};

export default Article;
