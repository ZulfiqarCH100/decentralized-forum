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
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
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
    let a = await forum.methods.likePost(props.post.id).send({ from: account });
  }
  async function dislikepost() {
    let a = await forum.methods
      .dislikePost(props.post.id)
      .send({ from: account });
  }

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
          <h2>
            {"Likes: " + props.post.likes + " Dislikes: " + props.post.dislikes}
          </h2>
          <button onClick={likepost}>Like Post</button>
          <button onClick={dislikepost}>Dislike Post</button>
        </div>
      )}
    </div>
  );
}

export default Post;
