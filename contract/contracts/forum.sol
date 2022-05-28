pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract forum {
    uint256 public count = 0;

    struct Post {
        uint256 id;
        uint ttlComments;
        address owner;
        string message;
        uint256 likes;
        uint256 dislikes;
        string[] comments;
    }

    mapping(uint256 => Post) public posts;

    function makePost(string memory _message) public returns (uint256) {
        Post memory p = Post(count, 0, msg.sender, _message, 0, 0, new string[](0));
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

    function makeComment(uint _postId, string memory _message) public returns (uint) {
        posts[_postId].comments.push( _message);
        posts[_postId].ttlComments ++;
        return 0;
    }

    function getComments(uint postId) public view returns (string[] memory) {
        return posts[postId].comments;
    }    
}
