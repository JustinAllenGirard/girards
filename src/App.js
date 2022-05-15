import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <Link to="/rsvp">RSVP</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/registry">Registry</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
