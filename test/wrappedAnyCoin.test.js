const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WrappedAnyCoin", function () {
  let wANY, owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();
    const WrappedAnyCoin = await ethers.getContractFactory("WrappedAnyCoin");
    wANY = await WrappedAnyCoin.deploy();
    await wANY.deployed();
  });

  it("should mint tokens", async function () {
    await wANY.mint(user.address, ethers.utils.parseUnits("500", 18));
    const balance = await wANY.balanceOf(user.address);
    expect(balance.toString()).to.equal(ethers.utils.parseUnits("500", 18).toString());
  });

  it("should burn tokens", async function () {
    await wANY.mint(user.address, ethers.utils.parseUnits("500", 18));
    await wANY.burn(user.address, ethers.utils.parseUnits("200", 18));
    const balance = await wANY.balanceOf(user.address);
    expect(balance.toString()).to.equal(ethers.utils.parseUnits("300", 18).toString());
  });
});