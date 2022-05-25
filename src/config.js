export const CONTRACT_ADDRESS = "0x1742D9daC6333d43185c665DfC4234aaacaD309f";

export const CONTRACT_ABI = [
    {
        constant: true,
        inputs: [],
        name: "count",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: true,
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "posts",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "string",
                name: "message",
                type: "string",
            },
            {
                internalType: "uint256",
                name: "likes",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "dislikes",
                type: "uint256",
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
                name: "_message",
                type: "string",
            },
        ],
        name: "makePost",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: true,
        inputs: [],
        name: "getPosts",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "owner",
                        type: "address",
                    },
                    {
                        internalType: "string",
                        name: "message",
                        type: "string",
                    },
                    {
                        internalType: "uint256",
                        name: "likes",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "dislikes",
                        type: "uint256",
                    },
                ],
                internalType: "struct forum.Post[]",
                name: "",
                type: "tuple[]",
            },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
];
