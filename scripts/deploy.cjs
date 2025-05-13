// scripts/deploy.js
// Deploys the DMCP contract to the selected network

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contract with address:", deployer.address);

  const DMCP = await ethers.getContractFactory("DMCP");
  const dmcp = await DMCP.deploy();
  await dmcp.deployed();

  console.log("DMCP deployed to:", dmcp.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
