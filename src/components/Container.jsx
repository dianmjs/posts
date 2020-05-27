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
} from "@material-ui/core";
import ExpandLessTwoToneIcon from "@material-ui/icons/ExpandLessTwoTone";
import ExpandMoreTwoToneIcon from "@material-ui/icons/ExpandMoreTwoTone";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  arrow: {
    direction: "column",
    justify: "center",
    alignItems: "center",
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
                <Grid item xs={6} sm={4}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.post_image_url}
                      className={classes.large}
                    />
                  </ListItemAvatar>
                </Grid>
                <Grid item container className={classes.arrow} xs={4} sm={2}>
                  <ListItemIcon>
                    <IconButton
                      onClick={(e) => props.IncrementItem(e, props.id)}
                    >
                      <ExpandLessTwoToneIcon color="primary" />
                    </IconButton>

                    {item.votes}
                    <IconButton>
                      <ExpandMoreTwoToneIcon color="primary" />
                    </IconButton>
                  </ListItemIcon>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Link href={item.url}>{item.title}</Link>
                  <ListItemText>{item.description}</ListItemText>
                  <ListItemAvatar>
                    Escrito por : <Avatar src={item.writer_avatar_url} />
                  </ListItemAvatar>
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
