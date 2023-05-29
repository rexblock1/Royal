const hre = require("hardhat");

const { getAmountInWei } = require('../ulits/helper-scripts');
// const _initBaseURI = "ipfs://QmYG397NbS5FLxNbo2oavBSSid5MwJ6jXidxpDgQgDdJL9/";

async function main() {
  // Deploy the contract
  const pepeY00tsYC = await hre.ethers.getContractFactory("ROYALTY");
  // const baseURI = "ipfs://QmeHfivPyobBjSXtVUv2VHCMmugDRfZ7Qv7QfkrG4BWLQz"

  // Get accounts
  const [deployer] = await hre.ethers.getSigners();

  const artist = deployer.address;


  const deployedVerifyContract = await pepeY00tsYC.deploy(artist);
  // const PepeY00tsYC = await pepeY00tsYC.deploy(_initBaseURI);
  await deployedVerifyContract.deployed();

  console.log("deployedVerifyContract deployed to:", deployedVerifyContract.address);



  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(40000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedVerifyContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
