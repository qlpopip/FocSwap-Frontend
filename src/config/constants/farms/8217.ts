import { klaytnTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
//   {
//     pid: 1,
//     lpSymbol: 'LCG-oUSDT LP',
//     lpAddress: '0xc6803af025ae46a0d700991eafddbc3a0f68d151',
//     token: klaytnTokens.lcg,
//     quoteToken: klaytnTokens.usdt,
//   },
//   {
//     pid: 2,
//     lpSymbol: 'KLAY-oUSDT LP',
//     lpAddress: '0x4A70d74Cf66B1d8bbEddacEB058943Aa78DD2C8B',
//     token: klaytnTokens.weth,
//     quoteToken: klaytnTokens.usdt,
//   },
  
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
