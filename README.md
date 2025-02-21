# Monad Token Deployment

This project deploys a customizable ERC-20 token to the Monad Testnet using Hardhat. The token's name, symbol, and initial supply are configurable via environment variables. The project is set up to work on Windows, Termux (mobile), and Linux.

---

## Pre-requisites

- **Node.js & npm:** Ensure you have Node.js (v14 or later) and npm installed.
- **Git:** Required to clone the repository.
- **Hardhat:** Installed as a project dependency.
- **A Testnet Wallet:** Make sure your wallet (whose private key you’ll provide) has enough test ETH for gas fees on Monad Testnet.

---


## Windows

1. Open PowerShell or Git Bash.
2. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/monad-deploy.git
   cd monad-deploy

3. (Optional) If you encounter script execution errors run this comment:

   ```bash
    Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned


4. Open and check ( .env )


5. Run the following combined command:
   ```bash
   npm install --no-bin-links && npx hardhat compile
-
   ```bash
   npx hardhat run scripts/deploy.js --network monadTestnet


---

Termux (Mobile)

1. Open Termux and run:
   ```bash
   pkg update && pkg upgrade
-
   ```bash
   pkg install git nodejs nano
-


2. Clone the Repository:
   ```bash
   git clone https://github.com/yourusername/monad-deploy.git
   cd monad-deploy


3. Open and chrck ( .env )
   ```bash
   nano .env
- After fill details
- Save the file by pressing Ctrl+X, then press Y for Yes, and finally Enter.

5. Run the following command:
   ```bash
   npm install && npx hardhat compile 
-
   ```bash
   npx hardhat run scripts/deploy.js --network monadTestnet


---

Linux

1. Open your terminal.


2. Run:
   ```bash
   git clone https://github.com/yourusername/monad-deploy.git
   cd monad-deploy
-

3. open and check ( .env )

4. Run the following command:
   ```bash
   npm install && npx hardhat compile

-
   ```bash
   npx hardhat run scripts/deploy.js --network monadTestnet


---

