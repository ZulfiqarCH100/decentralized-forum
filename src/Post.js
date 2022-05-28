import { useEffect, useState } from "react";
import Web3 from "web3";
import React from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";
import ViewComment from "./ViewComments";
function Post(props) {
    const [can_view, setView] = useState(false);
    const [account, setAccount] = useState();
    const [forum, setForum] = useState();
    useEffect(() => {
        async function load() {
            //Logging in with metamask
            const web3 = new Web3(
                Web3.givenProvider || "http://localhost:7545"
            );
            const accounts = await web3.eth.requestAccounts();
            setAccount(accounts[0]);

            // Instantiate smart contract using ABI and address.
            const forum = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

            // set contact list to state variable.
            setForum(forum);
        }

        load();
    }, []);
    async function likepost() {
        await forum.methods.likePost(props.post.id).send({ from: account });
    }
    async function dislikepost() {
        await forum.methods.dislikePost(props.post.id).send({ from: account });
    }

    return (
        <div
            style={{ backgroundColor: "red", margin: "5px", cursor: "pointer" }}
        >
            {can_view ? (
                <div>
                    <ViewComment
                        post={props.post.id}
                        account={account}
                        forum={forum}
                    ></ViewComment>
                    <button onClick={() => setView(false)}>Back</button>
                </div>
            ) : (
                <div>
                    <h2>{props.post.message}</h2>
                    <h2>{props.post.owner}</h2>
                    <h2>
                        {"Likes: " +
                            props.post.likes +
                            " Dislikes: " +
                            props.post.dislikes}
                    </h2>
                    <button onClick={likepost}>Like Post</button>
                    <button onClick={dislikepost}>Dislike Post</button>
                    <button
                        onClick={() => {
                            console.log("here");
                            setView(true);
                        }}
                    >
                        Comments
                    </button>
                </div>
            )}
        </div>
    );
}

export default Post;
