// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MockDEXRouter {
    address public anycoin;

    constructor(address _anycoin) {
        anycoin = _anycoin;
    }

    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256, // amountOutMin
        address[] calldata path,
        address to,
        uint256
    ) external returns (uint256[] memory amounts) {
        require(path[0] != address(0) && path[1] == anycoin, "Invalid swap path");

        IERC20(path[0]).transferFrom(msg.sender, address(this), amountIn);
        uint256 mockOut = amountIn * 2; // mock conversion rate: 1 USDC → 2 ANY

        IERC20(anycoin).transfer(to, mockOut);

        amounts = new uint256 ;
        amounts[0] = amountIn;
        amounts[1] = mockOut;
    }
}