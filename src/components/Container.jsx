import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
  Link,
  makeStyles,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandLessTwoToneIcon from "@material-ui/icons/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  arrow: {
    "& > *": {
      margin: theme.spacing(1),
    },
    alignItems: "center",
    display: "inline-flex",
  },
  button: {
    textAlign: "center",
  },
}));

export default function Container(props) {
  const classes = useStyles();

  return (
    <div>
      <List>
        {props.post.map((item) => {
          return (
            <ListItem key={item.id}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={6} sm={2} md={2}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.post_image_url}
                      className={classes.large}
                    />
                  </ListItemAvatar>
                </Grid>
                <Grid item xs={4} sm={3} md={2}>
                  <div className={classes.button}>
                    <IconButton onClick={() => props.IncrementItem(item.id)}>
                      <ExpandLessTwoToneIcon color="primary" />
                    </IconButton>
                    <ListItemText>{item.votes}</ListItemText>
                    <IconButton onClick={() => props.decrease(item.id)}>
                      <ExpandMoreTwoToneIcon color="primary" />
                    </IconButton>
                  </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                  <Link href={item.url}>{item.title}</Link>
                  <ListItemText>{item.description}</ListItemText>

                  <div className={classes.arrow}>
                    <ListItemText>Escrito por :</ListItemText>
                    <Avatar src={item.writer_avatar_url} />
                  </div>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
