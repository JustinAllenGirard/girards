import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/someRoute">Some Route</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
