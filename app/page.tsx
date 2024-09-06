import ArticleLevels from "./components/ArticleLevels";
import Contents from "./components/Contents";
import Title from "./components/Title";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="w-full flex flex-col flex-col-reverse md:flex-row gap-12">
          <div
            id="left-sidebar"
            className="grow md:w-1/5 max-w-64 flex flex-col gap-6 md:mt-[30px]"
          >
            <Contents />
            <ArticleLevels />
          </div>
          <main className="grow md:w-1/2">
            <Title>Cat</Title>
            Article
          </main>
          <div
            id="right-sidebar"
            className="grow md:w-1/5 max-w-64 bg-green-200 md:mt-[30px]"
          >
            Right Sidebar
          </div>
        </div>
      </div>
    </div>
  );
}
