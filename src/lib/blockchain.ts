import SHA256 from 'crypto-js/sha256';
import { create } from 'zustand';
import { Block, BlockchainState, Certificate } from '../types/blockchain';

const calculateHash = (block: Omit<Block, 'hash'>): string => {
  return SHA256(
    block.timestamp +
    JSON.stringify(block.certificate) +
    block.previousHash +
    block.nonce
  ).toString();
};

const useBlockchainStore = create<BlockchainState>((set, get) => ({
  chain: [],
  
  addBlock: (certificate: Certificate) => {
    const { chain } = get();
    const block: Block = {
      timestamp: Date.now(),
      certificate,
      previousHash: chain.length ? chain[chain.length - 1].hash : '0',
      hash: '',
      nonce: 0
    };

    // Simple Proof of Work
    while (true) {
      block.hash = calculateHash(block);
      if (block.hash.substring(0, 2) === '00') break;
      block.nonce++;
    }

    set({ chain: [...chain, block] });
  },

  verifyChain: () => {
    const { chain } = get();
    
    for (let i = 1; i < chain.length; i++) {
      const currentBlock = chain[i];
      const previousBlock = chain[i - 1];

      // Verify hash
      if (currentBlock.hash !== calculateHash({
        timestamp: currentBlock.timestamp,
        certificate: currentBlock.certificate,
        previousHash: currentBlock.previousHash,
        nonce: currentBlock.nonce
      })) {
        return false;
      }

      // Verify chain link
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  },

  getBlock: (hash: string) => {
    const { chain } = get();
    return chain.find(block => block.hash === hash);
  },

  searchCertificates: (query: string) => {
    const { chain } = get();
    const lowercaseQuery = query.toLowerCase();
    
    return chain.filter(block => 
      block.certificate.studentName.toLowerCase().includes(lowercaseQuery) ||
      block.certificate.rollNumber.toLowerCase().includes(lowercaseQuery)
    );
  }
}));

export default useBlockchainStore;