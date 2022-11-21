const { ethers } = require("hardhat")
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants")

async function main () {
  const FakeNFTMarketplace = await ethers.getContractFactory("FakeNFTMarketplace")
  const fakeNftMarkrtpalce = await FakeNFTMarketplace.deploy()
  await fakeNftMarkrtpalce.deployed()

  console.log("FakeNFTMarketplace deployed to:", fakeNftMarkrtpalce.address)

  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO")
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarkrtpalce.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
      value: ethers.utils.parseEther("0.1")
    }
  )
  await cryptoDevsDAO.deployed()

  console.log("CryptoDevsDAO deployed to:", cryptoDevsDAO.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })