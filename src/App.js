import { useEffect, useState } from "react";
import Web3 from "web3";
import React from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";
import Posts from "./Posts";

function App() {
    const [account, setAccount] = useState();
    const [forum, setForum] = useState();
    const [counter, setCounter] = useState();
    const [posts, setPosts] = useState();
    const [message, setMessage] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

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

            // Then we get total number of contacts for iteration
            const counter = await forum.methods.count().call();
            setCounter(counter);
        }

        load();
    }, []);

    async function post() {
        console.log("Hi im here: " + message);
        //console.log(forum.methods);
        let a = await forum.methods.makePost(message).send({ from: account });
    }

    async function load() {
        let a = await forum.methods.getPosts().call();
        setPosts(a, setIsLoaded(true));
    }

    return (
        <div>
            Your account is: {account}
            <h1>Counter is: {counter}</h1>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></input>
                <button onClick={post}>Post</button>
            </div>
            <div>
                <h1>POSTS</h1>
                <button onClick={load}>Load Posts</button>
                {isLoaded ? <Posts posts={posts} /> : counter}
            </div>
        </div>
    );
}

export default App;
