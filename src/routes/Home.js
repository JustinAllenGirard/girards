import { Grid } from "@material-ui/core";

export default function Home() {
  return (
    <main>
      <Grid container direction="column" justifyContent="flex-start" alignItems="center">
        <Grid item>
          <img
            src="title-background-top.png"
            alt="top decor"
            width="100%"
            height="auto"
            className="title-image"
          />
        </Grid>
        <Grid item>
          <h1 className="fancy-font-title">Justin & Angie</h1>
        </Grid>
        <Grid item>
          <img
            src="title-background-bottom.png"
            alt="bottom decor"
            width="100%"
            height="auto"
            className="title-image"
          />
        </Grid>
        <Grid item>
          <h2 className="title-date">13 July 2024</h2>
        </Grid>
        <Grid item style={{ width: "80%", marginTop: "20px" }}>
          <p>Gucci Gang</p>
        </Grid>
      </Grid>
    </main>
  );
}
