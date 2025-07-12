// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./WrappedAnyCoin.sol";
import "./interfaces/IDEXRouter.sol";

contract USDCtoAnyCoinBridge is Ownable {
    IERC20 public usdc;
    IERC20 public anycoin;
    WrappedAnyCoin public wANY;
    IDEXRouter public dexRouter;

    constructor(address _usdc, address _anycoin, address _wANY, address _dexRouter) {
        usdc = IERC20(_usdc);
        anycoin = IERC20(_anycoin);
        wANY = WrappedAnyCoin(_wANY);
        dexRouter = IDEXRouter(_dexRouter);
    }

    function depositUSDC(uint256 amount) external {
        require(usdc.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        usdc.approve(address(dexRouter), amount);

        address ;
        path[0] = address(usdc);
        path[1] = address(anycoin);

        uint256[] memory amounts = dexRouter.swapExactTokensForTokens(
            amount,
            0,
            path,
            address(this),
            block.timestamp + 300
        );

        uint256 anycoinAmount = amounts[1];
        uint256 usdValue = getAnyCoinToUSD(anycoinAmount);
        wANY.mint(msg.sender, usdValue);
    }

    function getAnyCoinToUSD(uint256 anycoinAmount) internal pure returns (uint256) {
        return anycoinAmount / 1e6; // placeholder, mock 1 ANY = 1 USD
    }
}