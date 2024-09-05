import Contents from "./components/Contents";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <div className="section flex-col flex-col-reverse md:flex-row">
          <div id="left-sidebar" className="grow md:w-1/5">
            <Contents />
          </div>
          <main className="grow md:w-1/2 bg-red-200">Article</main>
          <div id="right-sidebar" className="grow md:w-1/5 bg-green-200">
            Right Sidebar
          </div>
        </div>
      </div>
    </div>
  );
}
