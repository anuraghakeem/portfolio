const hre = require("hardhat");

async function main() {
  const Blaze = await hre.ethers.getContractFactory("Blaze");
  const blaze = await Blaze.deploy();

  await blaze.deployed();

  console.log("Token deployed to:", blaze.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });