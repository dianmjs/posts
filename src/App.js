import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { ThemeProvider, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import theme from "./components/Theme";
import Data from "./Data/Posts.json";

const useStyle = makeStyles({
  boton: {
    justifyContent: "center",
    height: 48,
    padding: "0 30px",
    margin: "15px 64px 35px 302px",
  },
});

export default function App() {
  const [post, setPost] = useState(Data);
  const classes = useStyle();

  const sortById = () => {
    const sortList = [...post].sort((a, b) => {
      return a.id - b.id;
    });
    setPost(sortList);
    console.log(sortList);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar post={post} />

      <Button
        variant="outlined"
        color="primary"
        className={classes.boton}
        onClick={sortById}
      >
        Ascendente
      </Button>

      <Button variant="contained" color="secondary" className={classes.boton}>
        Descendente
      </Button>
      <Container />
    </ThemeProvider>
  );
}
