require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: import.meta.env.VITE_ALCHEMY_SEP_URL,
      accounts: [import.meta.env.VITE_PRIVATE_KEY],
    },
  },
};
