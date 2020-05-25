import React from "react";
import Data from "../Data/Posts.json";

const Container = () => {
  return (
    <div container>
      {Data.map((posting) => (
        <div key={posting.id}>
          <h1>{posting.title}</h1>
          <p>{posting.description}</p>
          <p>{posting.url}</p>
          <p>{posting.votes}</p>
          <p>{posting.writer_avatar_url}</p>
          <p>{posting.post_image_url}</p>
        </div>
      ))}
    </div>
  );
};

export default Container;
