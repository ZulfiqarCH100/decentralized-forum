import React from "react";
function ViewComment(props) {
  return (
    <div style={{ backgroundColor: "red", margin: "5px" }}>
      <h2>{props.post.message}</h2>
      <h2>{props.post.owner}</h2>
      <div style={{ color: "white", marginLeft: "50px" }}>
        <h3>Comments</h3>
      </div>
    </div>
  );
}
export default ViewComment;
