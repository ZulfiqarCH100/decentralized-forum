import React from "react";
import { useState, useEffect } from "react";
function ViewComment(props) {
    const [comments, setComments] = useState();
    const [toShow, setToShow] = useState(false);
    const [message, setMessage] = useState();
    const [customMessage, setCustomMessage] = useState("");
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        async function load() {
            let a = await props.forum.methods.getComments(props.post).call();
            console.log(a.length);
            setComments(a);
            if (a.length > 0) setToShow(true);
            else setCustomMessage("No Comments");
        }

        load();
    }, [refresh]);

    async function comment() {
        await props.forum.methods
            .makeComment(props.post, message)
            .send({ from: props.account });
        setRefresh(!refresh);
    }

    return (
        <div>
            {toShow ? (
                <div style={{ backgroundColor: "red", margin: "5px" }}>
                    <h2>{props.post.message}</h2>
                    <h2>{props.post.owner}</h2>
                    <div style={{ color: "white", marginLeft: "50px" }}>
                        <h3>{comments}</h3>
                    </div>
                </div>
            ) : (
                <h1>{customMessage}</h1>
            )}

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button onClick={comment}>Post</button>
        </div>
    );
}
export default ViewComment;
