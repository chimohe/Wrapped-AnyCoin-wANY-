const { ethers } = require("hardhat");

async function main() {
  const [user] = await ethers.getSigners();
  const wANY = await ethers.getContract("WrappedAnyCoin");

  const amount = ethers.utils.parseUnits("100", 18);
  const tx = await wANY.mint(user.address, amount);
  await tx.wait();

  console.log(`Minted ${ethers.utils.formatUnits(amount, 18)} wANY to ${user.address}`);
}

main().catch(console.error);