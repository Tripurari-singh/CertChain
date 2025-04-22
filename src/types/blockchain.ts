export interface Certificate {
  studentName: string;
  rollNumber: string;
  degree: string;
  marks: number;
  institutionName: string;
  issueDate: Date;
}

export interface Block {
  timestamp: number;
  certificate: Certificate;
  previousHash: string;
  hash: string;
  nonce: number;
}

export interface BlockchainState {
  chain: Block[];
  addBlock: (certificate: Certificate) => void;
  verifyChain: () => boolean;
  getBlock: (hash: string) => Block | undefined;
  searchCertificates: (query: string) => Block[];
}