const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  const WrappedAnyCoin = await ethers.getContractFactory("WrappedAnyCoin");
  const wANY = await WrappedAnyCoin.deploy();
  await wANY.deployed();
  console.log("WrappedAnyCoin deployed to:", wANY.address);

  const USDCtoAnyCoinBridge = await ethers.getContractFactory("USDCtoAnyCoinBridge");
  const usdcAddress = "0x...";        // replace with deployed USDC token address
  const anycoinAddress = "0x...";     // replace with deployed AnyCoin address
  const dexRouterAddress = "0x...";   // replace with Uniswap/PancakeSwap router

  const bridge = await USDCtoAnyCoinBridge.deploy(usdcAddress, anycoinAddress, wANY.address, dexRouterAddress);
  await bridge.deployed();
  console.log("Bridge deployed to:", bridge.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});