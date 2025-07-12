async function simulateDebitSpend(userAddress, amount) {
  const wANY = await ethers.getContract("WrappedAnyCoin");
  const balance = await wANY.balanceOf(userAddress);
  if (balance.gte(amount)) {
    const tx = await wANY.burn(userAddress, amount);
    await tx.wait();
    console.log(`Burned ${ethers.utils.formatUnits(amount, 18)} wANY from ${userAddress}`);
  } else {
    console.log("Insufficient balance to simulate debit spend.");
  }
}

module.exports = simulateDebitSpend;