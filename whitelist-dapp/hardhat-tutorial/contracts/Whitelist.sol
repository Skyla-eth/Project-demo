//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Whitelist {

    uint8 public maxWhitelistAddresses;

    mapping(address => bool) public whitelistAddresses;

    uint8 public numAddressesWhitelisted;

    constructor(uint8 _maxWhitelistAddresses) {
        maxWhitelistAddresses = _maxWhitelistAddresses;
    }

    function addAddressToWhitelist() public {

        require(!whitelistAddresses[msg.sender], "Sender has already been whitelisted");
        require(numAddressesWhitelisted < maxWhitelistAddresses, "More addresses cant be added, limit reached");

        whitelistAddresses[msg.sender] = true;

        numAddressesWhitelisted += 1;
    }
}