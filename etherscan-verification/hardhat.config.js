require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config({ path: ".env" })

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY

/** @type import('hardhat/config').HardhatUserConfig */
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
      polygonMumbai: POLYGONSCAN_KEY
    }
  }
};
