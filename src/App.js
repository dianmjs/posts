import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import { ThemeProvider, makeStyles, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";
import theme from "./components/Theme";
import Data from "./Data/Posts.json";

const useStyle = makeStyles({
  boton: {
    marginTop: 12,
    justifyContent: "center",
  },
});

export default function App() {
  const [post, setPost] = useState(Data);
  const classes = useStyle();

  const sortByIdAsc = () => {
    const sortList = [...post].sort((a, b) => {
      return a.votes - b.votes;
    });
    setPost(sortList);
    console.log(sortList);
  };

  const sortByIdDesc = () => {
    const sortDesc = [...post].sort((a, b) => {
      return b.votes - a.votes;
    });
    setPost(sortDesc);
  };

  const IncrementItem = (e, param) => {
    console.log(param);
    const postVoteUpdate = post.map((posts) => {
      if (post.id === param) {
        post.votes++;
        e.preventDefault();
      }
      return posts;
    });
    setPost(postVoteUpdate);
    console.log(postVoteUpdate);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container spacing={2} className={classes.boton}>
        <Grid item xs={6} sm={4}>
          <Button variant="outlined" color="primary" onClick={sortByIdAsc}>
            Ascendente
          </Button>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Button variant="contained" color="secondary" onClick={sortByIdDesc}>
            Descendente
          </Button>
        </Grid>
      </Grid>
      <Container post={post} IncrementItem={IncrementItem} />
    </ThemeProvider>
  );
}
