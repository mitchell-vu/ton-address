export interface TransactionApiResponse {
  result: {
    '@type': string;
    utime: number;
    data: string;
    transaction_id: TransactionId;
    fee: string;
    storage_fee: string;
    other_fee: string;
    in_msg: InMsg;
    out_msgs: OutMsg[];
  }[];
}

export interface Transaction {
  '@type': string;
  utime: number;
  data: string;
  transaction_id: TransactionId;
  fee: string;
  storage_fee: string;
  other_fee: string;
  in_msg: InMsg;
  out_msgs: OutMsg[];
}

interface TransactionId {
  '@type': string;
  lt: string;
  hash: string;
}

interface InMsg {
  '@type': string;
  source: string;
  destination: string;
  value: string;
  fwd_fee: string;
  ihr_fee: string;
  created_lt: string;
  body_hash: string;
  msg_data: MsgData;
  message: string;
}

interface MsgData {
  '@type': string;
  body: string;
  init_state: string;
}

interface OutMsg {
  '@type': string;
  source: string;
  destination: string;
  value: string;
  fwd_fee: string;
  ihr_fee: string;
  created_lt: string;
  body_hash: string;
  msg_data: MsgData2;
  message: string;
}

interface MsgData2 {
  '@type': string;
  body: string;
  init_state: string;
}
