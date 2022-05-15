import "./App.css";
import { Outlet } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
        <Grid item className="full-width-container">
          <Nav />
        </Grid>
        <Grid item className="full-width-container">
          <Outlet />
        </Grid>
        <Grid item className="full-width-container">
          <Typography variant="body2" style={{ textAlign: "center" }}>
            Copyright © {new Date().getFullYear()} Justin Girard
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
