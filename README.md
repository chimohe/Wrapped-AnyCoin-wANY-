AnyCoin Wrapped Token System – README

Overview
AnyCoin is a modular bridge and wrapping protocol that allows users to convert any supported ERC-20 token into a stable, USD-pegged asset called wANY, backed by USDC. wANY can be used for debit card payments, DeFi, or cross-chain transfers, giving volatile tokens real-world utility.

Features
	•	Token Wrapper: Mint USD-pegged wANY from any selected ERC-20 token
	•	Bridge Contracts: Convert USDC to Token to wANY using DEX integration
	•	Debit Card Integration: Burn wANY to settle fiat purchases
	•	Frontend UI: Select, wrap, and manage tokens in a wallet-friendly web interface
	•	Full Test Suite: Includes unit and integration tests for the full bridge flow

Project Structure
anycoin-wrapped-usdc/
	•	contracts/ – Solidity smart contracts
	•	scripts/ – Deployment and utility scripts
	•	test/ – Hardhat tests
	•	frontend/ – React/Next.js web app
	•	docs/ – Markdown documentation
	•	Dockerfile – Docker build script
	•	docker-compose.yml – Dev orchestration
	•	hardhat.config.js – Project config
	•	.env – Environment variables
	•	README.md – This file

Quick Start
Step 1: Install dependencies using your preferred package manager.
Step 2: Compile contracts with Hardhat.
Step 3: Run test suite to validate functionality.
Step 4: Start the frontend application and open it in your browser.

To view the frontend, go to: http://localhost:3000

Docker Quickstart
Build the full environment using Docker:
	•	Run: docker-compose build
	•	Start: docker-compose up

This will start both the backend and frontend inside a Docker container.

Token Wrapping Workflow
	1.	User selects a supported ERC-20 token from the interface
	2.	User deposits USDC
	3.	Smart contracts perform swap via DEX
	4.	USD value of token is calculated
	5.	wANY is minted to the user wallet
	6.	wANY may be spent, used in DeFi, or burned during debit card purchases

Example Scripts
	•	deploy.js – Deploy bridge and wANY token contracts
	•	mint-test.js – Mint tokens for local testing
	•	linkDebitCardMock.js – Simulate a debit card purchase and token burn

Testing
Use the Hardhat test framework to validate functionality.
Tests include token logic, bridge operations, and security access controls.

Environment Variables
Create a .env file in the root directory.
Add your private key and Infura or RPC key.
Example variables:
	•	PRIVATE_KEY
	•	INFURA_API_KEY
Do not commit the .env file to any public repository.

Documentation
Full usage instructions and developer notes can be found in the /docs folder or viewed on GitHub Pages if configured.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributions
Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request. You can help expand token support, improve the UI, or add new bridge functionality.
