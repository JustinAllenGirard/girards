import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import EmailIcon from "@material-ui/icons/Email";
import FlightIcon from "@material-ui/icons/Flight";
import PhotoIcon from "@material-ui/icons/Photo";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PhoneIcon from "@material-ui/icons/Phone";

export default function Nav() {
  const [drawerState, setDrawerState] = React.useState(false);
  const toggleDrawer = (open) => {
    setDrawerState(open);
  };

  return (
    <main>
      <div id="mobile-nav">
        <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
          <Grid item>
            <IconButton aria-label="menu" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Drawer anchor="right" open={drawerState} onClose={() => toggleDrawer(false)}>
          <div onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
            <List style={{ width: "250px" }}>
              <ListItem button key="home" selected={useLocation().pathname === "/"}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <NavLink to="/" className="mobile-nav-item">
                  Home
                </NavLink>
              </ListItem>
              <ListItem button key="info" selected={useLocation().pathname === "/info"}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <NavLink to="/info" className="mobile-nav-item">
                  Info
                </NavLink>
              </ListItem>
              <ListItem button key="rsvp" selected={useLocation().pathname === "/rsvp"}>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <NavLink to="/rsvp" className="mobile-nav-item">
                  RSVP
                </NavLink>
              </ListItem>
              <ListItem button key="flight" selected={useLocation().pathname === "/travel"}>
                <ListItemIcon>
                  <FlightIcon />
                </ListItemIcon>
                <NavLink to="/travel" className="mobile-nav-item">
                  Travel
                </NavLink>
              </ListItem>
              <ListItem button key="photos" selected={useLocation().pathname === "/photos"}>
                <ListItemIcon>
                  <PhotoIcon />
                </ListItemIcon>
                <NavLink to="/photos" className="mobile-nav-item">
                  Photos
                </NavLink>
              </ListItem>
              <ListItem button key="registry" selected={useLocation().pathname === "/registry"}>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <NavLink to="/registry" className="mobile-nav-item">
                  Registry
                </NavLink>
              </ListItem>
              <ListItem button key="contact" selected={useLocation().pathname === "/contact"}>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <NavLink to="/contact" className="mobile-nav-item">
                  Contact
                </NavLink>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
      <div id="desktop-nav">
        <nav>
          <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start">
            <Grid item className="nav-item">
              <NavLink to="/">Home</NavLink>
            </Grid>
            <Grid item className="nav-item">
              <NavLink to="/info">Info</NavLink>
            </Grid>
            <Grid item className="nav-item">
              <NavLink to="/rsvp">RSVP</NavLink>
            </Grid>
            <Grid item className="nav-item">
              <NavLink to="/travel">Travel</NavLink>
            </Grid>
            <Grid item className="nav-item">
              <NavLink to="/photos">Photos</NavLink>
            </Grid>
            <Grid item className="nav-item">
              <NavLink to="/registry">Registry</NavLink>
            </Grid>
            <Grid item className="nav-item">
              <NavLink to="/contact">Contact</NavLink>
            </Grid>
          </Grid>
        </nav>
      </div>
    </main>
  );
}
