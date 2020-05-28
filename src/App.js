import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { ThemeProvider, makeStyles, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import theme from "./components/Theme";
import Data from "./Data/Posts.json";

const useStyle = makeStyles({
  boton: {
    margin: "3px 4px 19px 17px",
    justifyContent: "center",
  },
  borderButton: {
    cursor: "not-allowed",
    pointerEvents: "auto",
  },
});

export default function App() {
  const [post, setPost] = useState(Data);
  const [filter, setFilter] = useState(true);
  const classes = useStyle();

  //Ordena ASC
  const sortByIdAsc = () => {
    const sortList = [...post].sort((a, b) => {
      return a.votes - b.votes;
    });
    setPost(sortList);
    setFilter({
      filter: false,
    });
  };

  //Ordena Desc
  const sortByIdDesc = () => {
    const sortDesc = [...post].sort((a, b) => {
      return b.votes - a.votes;
    });
    setPost(sortDesc);
    setFilter({
      filter: true,
    });
  };
  //incrementa el voto
  const IncrementItem = (param) => {
    console.log(param);
    const postVoteUpdate = post.map((posts) => {
      if (posts.id === param) {
        posts.votes++;
      }
      return posts;
    });
    setPost(postVoteUpdate);
    filter ? sortByIdDesc() : sortByIdAsc();
  };

  //Diminuye el voto
  const decrease = (param) => {
    const postVoteUpdate = post.map((posts) => {
      if (posts.id === param) {
        posts.votes--;
      }
      return posts;
    });
    setPost(postVoteUpdate);
    filter ? sortByIdDesc() : sortByIdAsc();
  };

  useEffect(() => {
    filter ? sortByIdDesc() : sortByIdAsc();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container spacing={2} className={classes.boton}>
        <Grid item xs={6} sm={4}>
          <Button
            className={classes.borderButton}
            variant="outlined"
            color="primary"
            onClick={sortByIdAsc}
            focusVisible={!filter}
          >
            Ascendente
          </Button>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Button
            className={classes.borderButton}
            variant="outlined"
            color="secondary"
            onClick={sortByIdDesc}
            focusVisible={filter}
          >
            Descendente
          </Button>
        </Grid>
      </Grid>
      <Container
        post={post}
        IncrementItem={IncrementItem}
        decrease={decrease}
      />
    </ThemeProvider>
  );
}
