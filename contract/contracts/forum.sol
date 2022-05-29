pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract forum {
    uint256 public count = 0;

    struct Post {
        uint256 id;
        uint256 ttlComments;
        address owner;
        string message;
        uint256 likes;
        uint256 dislikes;
        string[] comments;
    }

    struct User {
        address userAddress;
        string name;
        string bio;
        uint256 themeColor;
        bool exists;
    }

    mapping(uint256 => Post) public posts;
    mapping(address => User) public users;

    function makePost(string memory _message) public returns (uint256) {
        Post memory p = Post(
            count,
            0,
            msg.sender,
            _message,
            0,
            0,
            new string[](0)
        );
        posts[count] = p;
        count++;
        return count;
    }

    function getPosts() public view returns (Post[] memory) {
        Post[] memory id = new Post[](count);
        for (uint256 i = 0; i < count; i++) {
            Post storage post = posts[i];
            id[i] = post;
        }
        return id;
    }

    function likePost(uint256 id) public returns (bool values) {
        if (id >= 0 && id <= count) {
            posts[id].likes += 1;
            return true;
        } else {
            return false;
        }
    }

    function dislikePost(uint256 id) public returns (bool values) {
        if (id >= 0 && id <= count) {
            posts[id].dislikes += 1;
            return true;
        } else {
            return false;
        }
    }

    function makeComment(uint256 _postId, string memory _message)
        public
        returns (uint256)
    {
        posts[_postId].comments.push(_message);
        posts[_postId].ttlComments++;
        return 0;
    }

    function getComments(uint256 postId) public view returns (string[] memory) {
        return posts[postId].comments;
    }

    function getUserInfo() public view returns (User memory) {
        return users[msg.sender];
    }

    function userExists() public view returns (bool) {
        if (!users[msg.sender].exists) return false;
        return true;
    }

    function changeUserInfo(
        string memory name,
        string memory bio,
        uint256 theme
    ) public returns (bool) {
        users[msg.sender] = User(msg.sender, name, bio, theme, true);
        return true;
    }
}
