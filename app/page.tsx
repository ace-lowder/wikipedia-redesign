import ArticleLevels from "./components/sidebar/ArticleLevels";
import Contents from "./components/sidebar/Contents";
import Options from "./components/article/Options";
import Title from "./components/article/Title";
import Tools from "./components/sidebar/Tools";
import Overview from "./components/article/Overview";
import Senses from "./components/article/Senses";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="w-full flex flex-col flex-col-reverse md:flex-row gap-6 md:gap-12">
          <div
            id="left-sidebar"
            className="grow min-w-full md:min-w-0 md:w-1/5 max-w-64 flex flex-col gap-6 md:mt-7"
          >
            <Contents />
            <ArticleLevels />
          </div>
          <main className="grow min-w-full md:min-w-0 md:w-1/2">
            <Title>Cat</Title>
            <Options />
            <div className="flex flex-col gap-6 md:gap-12">
              <Overview />
              <Senses />
            </div>
          </main>
          <div
            id="right-sidebar"
            className="grow min-w-full md:min-w-0 md:w-1/5 max-w-64 md:mt-7"
          >
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
}
