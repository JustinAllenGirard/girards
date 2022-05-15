import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Info from "./routes/Info";
import RSVP from "./routes/RSVP";
import Travel from "./routes/Travel";
import Photos from "./routes/Photos";
import Registry from "./routes/Registry";
import Contact from "./routes/Contact";
import Admin from "./routes/Admin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="info" element={<Info />} />
        <Route path="rsvp" element={<RSVP />} />
        <Route path="travel" element={<Travel />} />
        <Route path="photos" element={<Photos />} />
        <Route path="registry" element={<Registry />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin" element={<Admin />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
