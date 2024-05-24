import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519'

// 从环境变量读取network和secretKey
// const secretKey = import.meta.env.VITE_PRIVATE_KEY || '';
const MNEMONIC = import.meta.env.VITE_MNEMONIC
console.log(MNEMONIC)

// /** 这里把base64编码的secretKey转换为字节数组后截掉第一个元素，是因为第一位是一个私钥类型的标记位，后续派生签名者时不需要 **/
// const secretKeyBytes = fromB64(secretKey).slice(1); // 发起方账户私钥
// const signer = Ed25519Keypair.fromSecretKey(secretKeyBytes, ); // 生成签名者

// from mnemonic
const signer = Ed25519Keypair.deriveKeypair(MNEMONIC)

export { signer }
