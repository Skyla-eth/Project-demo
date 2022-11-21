const { ethers } = require("hardhat")
const hre = require("hardhat")
require("dotenv").config({ path: ".env" })

async function main() {
  const verifyContract = await ethers.getContractFactory("Verify")
  const deployedVerifyContract = await verifyContract.deploy()
  await deployedVerifyContract.deployed()

  console.log("Verify Contract Address:", deployedVerifyContract.address)
  console.log("Sleeping...")

  await sleep(10000)

  console.log("1")

  await hre.run("verify:verify", {
    address: deployedVerifyContract.address,
    constructorArguments: []
  })
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })