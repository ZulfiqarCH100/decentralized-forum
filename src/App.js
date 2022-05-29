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
    const [name, setName] = useState();
    const [bio, setBio] = useState();
    const [theme, setTheme] = useState();
    const [userdata, setUserData] = useState([0,0,0,0]);
    const [userload, setIsUserLoad] = useState(false);

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

    async function userdatafunction (){
        let a = await forum.methods.getUserInfo().call();
        setUserData(a);
        if(userdata===undefined){
            console.log("Nope");
        } else {
            console.log(userdata);
            var message = document.getElementById('profile');
            message.style.display = 'block';
            var message = document.getElementById('show-user-details');
            message.style.display = 'none';
            var message = document.getElementById('update-user-btn');
            message.style.display = 'block';
        }
    }

    async function showedituser() {
        var message = document.getElementById('update-user-btn');
        message.style.display = 'none';
        var message = document.getElementById('update-user-fields');
        message.style.display = 'block';
    }

    async function updateuser() {
        var message = document.getElementById('update-user-fields');
        message.style.display = 'none';
        let a = await forum.methods.changeUserInfo(name,bio,theme).send({ from: account });
        userdatafunction();
    }

    return (
        <>
            <div className="navDesign font-weight-bold text-center py-3">
                Welcome back {account}
            </div>

            {/* User Profile My code */}

            <div className="hero my-3">
                <div className="cardValue mx-5 py-4 my-5" style={{paddingLeft:"2%"}}>
                    <button id="show-user-details" className="btn btn-info" onClick={userdatafunction}>User Info</button>
                    <div id="profile" style={{display:"none"}}>
                    <h4>User Details</h4>
                    <p>Name: {userdata[1]}</p>
                    <p>Bio: {userdata[2]}</p>
                    <p>Theme: {userdata[3]}</p>
                    <p>Address: {userdata[0]}</p>
                    </div>
                    <button id="update-user-btn" className="btn btn-info" style={{display:"none"}} onClick={showedituser}>Update User Info</button>

                    <div id="update-user-fields" className="" style={{display:"none"}}>
                        <label>Name:  </label>
                        <input className="py-2 mr-4 mt-4"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input><br></br>
                        
                        <label>Bio:    </label>
                        <input className="py-2 mr-4 mt-4"
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        ></input><br></br>

                        <label>Theme:</label>
                        <input className="py-2 mr-4 mt-4"
                            type="text"
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                        ></input><br></br>
                        <br></br>
                        <button className="btn btn-info" onClick={updateuser}>Update User</button>
                    </div>
                </div>
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
