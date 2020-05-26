import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  altura: theme.mixins.toolbar,
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography variant="h6">BLOG POSTS POPULARES</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.altura}></div>
    </div>
  );
};

export default Navbar;
