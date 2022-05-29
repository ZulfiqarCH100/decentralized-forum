import { useEffect, useState } from "react";
import Web3 from "web3";
import React from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";
import Posts from "./Posts";
import "./App.css"
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
        <>
            <div className="navDesign font-weight-bold text-center py-3">
                Welcome back {account}
            </div>
            <div className="hero text-center my-3">

                <div className="cardValue mx-5 py-4 my-5">
                    <h3 className="text-center mt-2">Add a new Post</h3>
                    <div className="col">
                        <input className="py-2 inputArea mr-4 mt-4"
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></input>
                        <button className="btn btn-info" onClick={post}>Add Post</button>
                    </div>
                </div>
                <div>
                    <h1>POSTS</h1>
                    <button className="btn btn-outline-dark" onClick={load}>Load Previous Posts </button>
                    {isLoaded ? <Posts posts={posts} /> : counter}
                </div>
            </div>
        </>
    );
}

export default App;
