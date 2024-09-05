export default function Home() {
  return (
    <div className="page">
      <div className="container bg-gray-200">
        <div className="section">
          <div className="grow md:w-1/5 bg-blue-200">Left Sidebar</div>
          <main className="grow md:w-1/2 bg-red-200">Article</main>
          <div className="grow md:w-1/5 bg-green-200">Right Sidebar</div>
        </div>
      </div>
    </div>
  );
}
