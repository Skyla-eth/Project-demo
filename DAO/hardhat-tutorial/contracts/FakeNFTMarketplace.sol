//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FakeNFTMarketplace {

    mapping(uint256 => address) public tokens;

    uint256 nftprice = 0.1 ether;

    function purchase(uint256 _tokenId) external payable {
        require(msg.value == nftprice, "This NFT costs 0.1 ether");
        tokens[_tokenId] = msg.sender;
    }

    function getPrice() external view returns(uint256) {
        return nftprice;
    }

    function avaliable(uint256 _tokenId) external view returns(bool) {
        if(tokens[_tokenId] == address(0)) {
            return true;
        } else {
            return false;
        }
    }
}