import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            import("./utils").then((x) => {
              console.log(x.add(50, 100));
            });
          }}
        >
          Topla
        </button>
        <button
          onClick={() => {
            import("./converToUpper").then((x) => {
              console.log(x.convertToUpper("emir"));
            });
          }}
        >
          Büyüt
        </button>
      </header>
    </div>
  );
}

export default App;
