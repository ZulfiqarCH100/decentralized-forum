import React, { useState } from "react";
import ViewComment from "./ViewComments";
function Post(props) {
  const [can_view, setView] = useState(false);
  return (
    <div
      style={{ backgroundColor: "red", margin: "5px", cursor: "pointer" }}
      onClick={() => {
        setView(!can_view);
      }}
    >
      {can_view ? (
        <div>
          <ViewComment post={props.post}></ViewComment>
        </div>
      ) : (
        <div>
          <h2>{props.post.message}</h2>
          <h2>{props.post.owner}</h2>
        </div>
      )}
    </div>
  );
}

export default Post;
