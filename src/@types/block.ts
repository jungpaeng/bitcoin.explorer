interface ITxIn {
  signature: string;
  txOutId: string;
  txOutIndex: number;
}

interface ITxOut {
  address: string;
  amount: number;
}

export interface ITransaction {
  id: string;
  txIns: ITxIn[];
  txOuts: ITxOut[];
}

export interface IBlock {
  data: ITransaction[];
  difficulty: number;
  hash: string;
  index: number;
  nonce: number;
  prevHash: string;
  timeStamp: number;
}
