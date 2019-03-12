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
  amount: number;
  from: string;
  id: string;
  timeStamp: number;
  to: string;
  txIns: ITxIn[];
  txOuts: ITxOut[];
}

export interface IBlock {
  amount: number;
  data: ITransaction[];
  difficulty: number;
  hash: string;
  index: number;
  nonce: number;
  prevHash: string;
  timeStamp: number;
}
