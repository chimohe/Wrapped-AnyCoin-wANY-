const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("USDCtoAnyCoinBridge", function () {
  let usdc, anycoin, wANY, bridge, owner, user;

  beforeEach(async function () {
    [owner, user] = await ethers.getSigners();

    // Mock tokens
    const Token = await ethers.getContractFactory("WrappedAnyCoin");
    usdc = await Token.deploy(); await usdc.deployed();
    anycoin = await Token.deploy(); await anycoin.deployed();
    wANY = await Token.deploy(); await wANY.deployed();

    // Mock DEX Router
    const DEXMock = await ethers.getContractFactory("MockDEXRouter");
    const dexRouter = await DEXMock.deploy(anycoin.address);
    await dexRouter.deployed();

    // Deploy bridge
    const Bridge = await ethers.getContractFactory("USDCtoAnyCoinBridge");
    bridge = await Bridge.deploy(usdc.address, anycoin.address, wANY.address, dexRouter.address);
    await bridge.deployed();

    // Give user USDC and approve
    await usdc.mint(user.address, ethers.utils.parseUnits("1000", 18));
    await usdc.connect(user).approve(bridge.address, ethers.utils.parseUnits("1000", 18));
  });

  it("should mint wANY after deposit", async function () {
    await bridge.connect(user).depositUSDC(ethers.utils.parseUnits("1000", 18));
    const balance = await wANY.balanceOf(user.address);
    expect(balance.gt(0)).to.be.true;
  });
});