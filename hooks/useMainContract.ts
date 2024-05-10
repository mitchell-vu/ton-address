// import { useEffect, useState } from "react";
// import { ContractManager } from "../contracts/ContractManager";
// import { useTonClient } from "./useTonClient";
// import { useAsyncInitialize } from "./useAsyncInitialize";
// import { Address, OpenedContract } from "ton-core";

// export function useContractManager() {
//   const client = useTonClient();
//   const [contractData, setContractData] = useState<null | {
//     balance: number;
//     owner_address: Address;
//   }>();
//   const mainContract = useAsyncInitialize(async () => {
//     if (!client) return;
//     const contract = new ContractManager();
//     return client.open(contract) as OpenedContract<ContractManager>;
//   }, [client]);
//   useEffect(() => {
//     async function getValue() {
//       if (!mainContract) return;
//       setContractData(null);
//       const balance = await mainContract.getBalance();
//       const address = await mainContract.getBalance();
//       setContractData({
//         balance: balance,
//         owner_address: address,
//       });

//     }
//     getValue();
//   }, [mainContract]);
//   return {
//     contract_address: mainContract?.address.toString(),
//     ...contractData,
//   };
// }