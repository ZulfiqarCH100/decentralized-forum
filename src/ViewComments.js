import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
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
        <div className="mx-5 my-4 text-center">
            {toShow ? (
                <div >
                    <h2>{props.post.message}</h2>
                    <h2>{props.post.owner}</h2>
                    <div className="text-left messagePost ml-2 commentDiv">
                        <p>{comments}</p>
                    </div>
                </div>
            ) : (
                <h3>{customMessage}</h3>
            )}
            <div className="col">
            <input className="mr-3 py-2 inputArea"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button className="btn btn-info " onClick={comment}>Add Comment</button>
            </div>
        </div>
    );
}
export default ViewComment;
