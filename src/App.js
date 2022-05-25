import { useEffect, useState } from "react";
import Web3 from "web3";
import React from "react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";

function App() {
    const [account, setAccount] = useState();
    const [forum, setForum] = useState();
    const [counter, setCounter] = useState();

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

    return (
        <div>
            Your account is: {account}
            <h1>Counter is: {counter}</h1>
        </div>
    );
}

export default App;
