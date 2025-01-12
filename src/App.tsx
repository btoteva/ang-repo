import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <p className="alert alert-primary">test</p>
      <p><a href="https://docs.google.com/spreadsheets/d/15FMQEoZWwJPu135razYwwV-aALZdKBkhvpHYOBaEkKs/edit?gid=0#gid=0">Немски глаголи в минало перфектно време</a></p>
    </>
  );
}

export default App;
