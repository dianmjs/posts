import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";

const Navbar = () => {
  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography>BLOG POSTS POPULARES</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
