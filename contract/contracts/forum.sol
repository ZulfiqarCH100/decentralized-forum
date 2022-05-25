pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract forum {
    uint public count = 0;

    struct Post {
        uint id;
        address owner;
        string message;
        uint likes;
        uint dislikes;
    }

    mapping (uint => Post) public posts;

    
    function makePost(string memory _message) public returns (uint) {
        posts[count] = Post(count, msg.sender, _message, 0, 0);
        count++;
        return count;
    }

    function getPosts() public view returns (Post[] memory){
      Post[] memory id = new Post[](count);
      for (uint i = 0; i < count; i++) {
          Post storage post = posts[i];
          id[i] = post;
      }
      return id;
  }
}
