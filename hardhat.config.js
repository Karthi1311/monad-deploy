require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  paths: {
    sources: "./contracts"
  },
  networks: {
    monadTestnet: {
      url: process.env.MONAD_RPC_URL || "",
      chainId: process.env.MONAD_CHAIN_ID ? parseInt(process.env.MONAD_CHAIN_ID) : 12345,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  }
};