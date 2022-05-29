export const CONTRACT_ADDRESS = "0xFa2466CF4DaC218aCC733d5855A037538C3A3C25";

export const CONTRACT_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "posts",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "ttlComments",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "message",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "likes",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "dislikes",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "users",
        outputs: [
            {
                internalType: "address",
                name: "userAddress",
                type: "address",
            },
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "bio",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "themeColor",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "exists",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "makePost",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getPosts",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "ttlComments",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "message",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "likes",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "dislikes",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string[]",
                        "name": "comments",
                        "type": "string[]"
                    }
                ],
                "internalType": "struct forum.Post[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "likePost",
        "outputs": [
            {
                "internalType": "bool",
                "name": "values",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "dislikePost",
        "outputs": [
            {
                "internalType": "bool",
                "name": "values",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_postId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_message",
                "type": "string"
            }
        ],
        "name": "makeComment",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "postId",
                "type": "uint256"
            }
        ],
        "name": "getComments",
        "outputs": [
            {
                "internalType": "string[]",
                "name": "",
                "type": "string[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        constant: true,
        inputs: [],
        name: "getUserInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "userAddress",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "bio",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "themeColor",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "exists",
                        type: "bool",
                    },
                ],
                internalType: "struct forum.User",
                name: "",
                type: "tuple",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "userExists",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "bio",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "theme",
                type: "uint256",
            },
        ],
        name: "changeUserInfo",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];
