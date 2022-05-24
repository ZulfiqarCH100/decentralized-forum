import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { account: "Please Log in with MetaMask" };
    }

    componentWillMount() {
        this.loadBlockchainData();
    }

    async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
    }

    render() {
        return (
            <div className="container">
                <h1>Hello, World!</h1>
                <p>Your account: {this.state.account}</p>
            </div>
        );
    }
}

export default App;
