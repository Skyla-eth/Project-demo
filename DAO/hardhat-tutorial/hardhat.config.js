require("@nomiclabs/hardhat-waffle")
require("dotenv").config({ path: ".env" })

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL
const PRIVATE_KRY = process.env.PRIVATE_KRY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KRY]
    }
  }
};
