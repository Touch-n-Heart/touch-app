import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import { Ed25519Keypair } from '@mysten/sui.js/keypairs/ed25519';
// import { fromB64 } from '@mysten/sui.js/utils';
// import * as dotenv from 'dotenv';
// dotenv.config();

// 从环境变量读取network和secretKey
// TODO: get from .env file
// const network = process.env.NETWORK || 'devnet';
// const secretKey = process.env.PRIVATE_KEY || '';
const network = 'devnet'
// const secretKey = 'suiprivkey1qztpyny837pgzp8ntwjkrjwqn9guqv0e400e5eyldfq70fc3rpzyyggxe76'

// /** 这里把base64编码的secretKey转换为字节数组后截掉第一个元素，是因为第一位是一个私钥类型的标记位，后续派生签名者时不需要 **/
// const secretKeyBytes = fromB64(secretKey).slice(1); // 发起方账户私钥
// const signer = Ed25519Keypair.fromSecretKey(secretKeyBytes, ); // 生成签名者

// const mnemonic = 'inmate grid multiply problem bleak unusual armor exchange blade agree cross tilt'
const mnemonic = 'ocean swallow exile fence front hundred gun joke present turn brain obscure'
// from mnemonic
const signer = Ed25519Keypair.deriveKeypair(mnemonic)

const suiClient = new SuiClient({ url: getFullnodeUrl(network) });

export { suiClient, signer, network }