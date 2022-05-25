var forum = artifacts.require("./forum.sol");

module.exports = function(deployer) {
    deployer.deploy(forum);
};
