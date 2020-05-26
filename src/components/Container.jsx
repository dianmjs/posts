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
} from "@material-ui/core";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
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
                <Grid item xs={2}>
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.post_image_url}
                      className={classes.large}
                    />
                  </ListItemAvatar>
                </Grid>
                <Grid item xs={1}>
                  <ListItemIcon>
                    <ArrowDropUpIcon />
                    {item.votes}
                    <ArrowDropDownIcon />
                  </ListItemIcon>
                </Grid>
                <Grid item xs={4}>
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
