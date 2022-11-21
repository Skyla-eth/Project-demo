require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" })
require("@nomiclabs/hardhat-etherscan")

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGONSAN_KEY = process.env.POLYGONSAN_KEY

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSAN_KEY
    }
  }
};
