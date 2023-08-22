import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'LCG-oUSDT LP',
    lpAddress: '0xc6803af025ae46a0d700991eafddbc3a0f68d151',
    token: baobabTokens.lcg,
    quoteToken: baobabTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'KLAY-oUSDT LP',
    lpAddress: '0x4a70d74cf66b1d8bbeddaceb058943aa78dd2c8b',
    token: baobabTokens.weth,
    quoteToken: baobabTokens.usdt,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'LCG-ODI LP',
  //   lpAddress: '0x967bb714d5756dc56e7767b20c3c7bc0b962927d',
  //   token: baobabTokens.lcg,
  //   quoteToken: baobabTokens.odi,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'ODI-oUSDT LP',
  //   lpAddress: '0x82b8d420afddf79e0bdd2a02ed859ad4ed843944',
  //   token: baobabTokens.odi,
  //   quoteToken: baobabTokens.usdt,
  // },
  
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
