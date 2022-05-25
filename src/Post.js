import React from "react";

function Post(props) {
    return (
        <div style={{ backgroundColor: "red", margin: "5px" }}>
            <h2>{props.post.message}</h2>
            <h2>{props.post.owner}</h2>
        </div>
    );
}

export default Post;
