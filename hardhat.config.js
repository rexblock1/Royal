// require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

require ('@nomiclabs/hardhat-waffle')
require ('@nomiclabs/hardhat-etherscan')


const QUICKNODE_HTTP_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL;
const PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;
const SCAN_KEY = process.env.ETHERSCAN_API_KEY;


/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.11",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    mumbai: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: SCAN_KEY,
    },
  },
};









