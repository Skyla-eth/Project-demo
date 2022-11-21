const { ethers } = require("hardhat")
const { expect } = require("chai")
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace")

describe("test", function () {
    it("add", async function() {
        const Whitelist = await ethers.getContractFactory("Whitelist")
        const whitelist = await Whitelist.deploy(10)
        await whitelist.deployed()

        await whitelist.addAddressToWhitelist()

        expect(whitelist.addnumber).to.equal(1)
    })
})