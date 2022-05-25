import React from "react";
import Post from "./Post";

function Posts(props) {
    let posts = props.posts;
    let calls = posts.map((post) => {
        return <Post post={post} />;
    });

    return <div>{calls}</div>;
}

export default Posts;
