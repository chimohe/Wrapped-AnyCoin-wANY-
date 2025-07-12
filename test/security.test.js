const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Security - Ownership & Access", function () {
  let wANY, owner, attacker;

  beforeEach(async function () {
    [owner, attacker] = await ethers.getSigners();
    const WrappedAnyCoin = await ethers.getContractFactory("WrappedAnyCoin");
    wANY = await WrappedAnyCoin.deploy();
    await wANY.deployed();
  });

  it("should only allow owner to mint", async function () {
    await expect(wANY.connect(attacker).mint(attacker.address, 1000)).to.be.revertedWith("Ownable: caller is not the owner");
  });

  it("should only allow owner to burn", async function () {
    await wANY.mint(attacker.address, 1000);
    await expect(wANY.connect(attacker).burn(attacker.address, 1000)).to.be.revertedWith("Ownable: caller is not the owner");
  });
});