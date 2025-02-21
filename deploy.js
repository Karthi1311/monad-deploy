require("dotenv").config();
const { ethers } = require("hardhat");

const blue = "\x1b[34m";
const green = "\x1b[32m";
const red = "\x1b[31m";
const magenta = "\x1b[35m";
const reset = "\x1b[0m";

function printTitle(title, color = blue) {
  const padding = 4;
  const paddedTitle = " ".repeat(padding) + title.toUpperCase() + " ".repeat(padding);
  const border = "=".repeat(paddedTitle.length);
  console.log(color + border + reset);
  console.log(color + paddedTitle + reset);
  console.log(color + border + reset);
  console.log("");
}

function printMessage(message, color = green) {
  const border = "=".repeat(message.length);
  console.log(color + border + reset);
  console.log(color + message + reset);
  console.log(color + border + reset);
  console.log(""); 
}

function formatSupply(supply) {
  const num = Number(supply);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(0) + "M";
  }
  return supply;
}

async function main() {
  const tokenName = process.env.TOKEN_NAME || "Default Token Name";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "DFT";
  const initialSupply = process.env.INITIAL_SUPPLY || "1000000"; 

  printTitle("Deploying Token", blue);
  console.log("Token Name: " + tokenName);
  console.log("Token Symbol: " + tokenSymbol);
  console.log("Initial Supply: " + formatSupply(initialSupply));
  console.log("");

  const CustomToken = await ethers.getContractFactory("CustomToken");
  const token = await CustomToken.deploy(tokenName, tokenSymbol, initialSupply);
  await token.deployed();

  const deployedName = await token.name();
  const deployedSymbol = await token.symbol();
  const totalSupplyBN = await token.totalSupply();
  const decimals = await token.decimals();
  const totalSupply = ethers.utils.formatUnits(totalSupplyBN, decimals);
  const formattedSupply = formatSupply(totalSupply);

  printMessage("Contract deployed successfully!", green);
  console.log("Token Address: " + magenta + token.address + reset);
  console.log("Token Name: " + deployedName);
  console.log("Token Symbol: " + deployedSymbol);
  console.log("Total Supply: " + formattedSupply);
  console.log("Decimals: " + decimals);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(red + "Error during deployment: " + error + reset);
    process.exit(1);
  });