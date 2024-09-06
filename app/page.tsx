import ArticleLevels from "./components/ArticleLevels";
import Contents from "./components/Contents";
import Title from "./components/Title";
import Tools from "./components/Tools";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="w-full flex flex-col flex-col-reverse md:flex-row gap-12">
          <div
            id="left-sidebar"
            className="grow md:w-1/5 max-w-64 flex flex-col gap-6 md:mt-7"
          >
            <Contents />
            <ArticleLevels />
          </div>
          <main className="grow md:w-1/2">
            <Title>Cat</Title>
          </main>
          <div id="right-sidebar" className="grow md:w-1/5 max-w-64 md:mt-7">
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
}
