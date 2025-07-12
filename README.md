# Wrapped AnyCoin (wANY) Bridge

This project implements a decentralized token bridge that converts **USDC ↔ AnyCoin**, issuing a **USD-pegged token** called **wANY** for stable debit card payments and DeFi usability.

## Key Components

- `WrappedAnyCoin.sol`: ERC-20 stable token pegged to USD.
- `USDCtoAnyCoinBridge.sol`: Bridge for deposit, swap, and mint.
- DEX integration (Uniswap/PancakeSwap-compatible).
- Optional frontend for wallet interaction.

## Usage

### Install Dependencies

```bash
npm install
