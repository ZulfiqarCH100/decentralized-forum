import { useEffect, useState } from "react";
import "./post.css"
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
        <>
            <div className="mx-5 my-4 text-center">
                {can_view ? (
                    <div>
                        <ViewComment
                            post={props.post.id}
                            account={account}
                            forum={forum}
                        ></ViewComment>
                        <button className="btn btn-dark" onClick={() => setView(false)}>Back</button>
                    </div>
                ) : (
                    <div className="cardValue px-4 py-5" >
                        <h5 className="text-center userId">{props.post.owner}</h5>
                        <p className="messagePost text-left ml-5 mt-3">{props.post.message}</p>
                        <p className="likeAndDislike text-left ml-5">
                            {"Likes: " +
                                props.post.likes +
                                " Dislikes: " +
                                props.post.dislikes}
                        </p>
                        <div className="text-left ml-5">
                            <button className="btn btn-primary buttons mr-1" onClick={likepost}>Like Post</button>
                            <button className="btn btn-danger buttons mx-1" onClick={dislikepost}>Dislike Post</button>
                            <button className="btn btn-dark buttons mx-1"
                                onClick={() => {
                                    console.log("here");
                                    setView(true);
                                }}
                            >
                                Comments
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Post;
