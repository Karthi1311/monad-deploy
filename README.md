
# Monad Token Deployment

To set up and deploy your token, open your terminal in the project directory and run:

`bash
# (For Windows users: If you face script execution errors, run the following command first)
# Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

1. npm install

2. npx hardhat compile

3. npx hardhat run scripts/deploy.js --network monadTestnet
