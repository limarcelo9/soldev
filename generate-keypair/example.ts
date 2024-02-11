import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`)
const address = new PublicKey('4RCB9SAY2iQUnzUFVpMGcd3f9r5S7egepTdRiYmSujwK');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`)
console.log(`✅ Finished!`)