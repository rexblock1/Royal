const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const _initBaseURI='ipfs://QmTM2vnd9RX48xBa7Hjr2a9TRw2uPDTLUoWsjieWUhe8Kn/'

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('PepeY00tsYC')
  const nftContract = await nftFactory.attach(
    '0xf066501850C22D468DD27089675C07b00d00Bb9A'
  )

    // Calculate merkle root from the whitelist array
    const leafNodes = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const root = merkleTree.getRoot().toString('hex')
    const leaf = keccak256('0xa93EEd127B40835Ed0B0C8A2108dEED05dC44fA8')
    const proof = merkleTree.getHexProof(leaf).toString('hex')

  
  
  
    console.log('Whitelist root set to:', root)
    console.log('proof is ' , proof)

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
