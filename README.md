# Monad Token Deployment

This project deploys a customizable ERC-20 token to the Monad Testnet using Hardhat.

## Quick Setup Instructions

Open your terminal in the project directory and run the following command:

```bash
# (For Windows users: If you face script execution errors, run the following command first)
# Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

npm install && npx hardhat compile && npx hardhat run scripts/deploy.js --network monadTestnet
