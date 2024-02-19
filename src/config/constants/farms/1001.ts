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
    lpAddress: '0x4A70d74Cf66B1d8bbEddacEB058943Aa78DD2C8B',
    token: baobabTokens.weth,
    quoteToken: baobabTokens.usdt,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'LCG-FOC LP',
  //   lpAddress: '0x967bb714d5756dc56e7767b20c3c7bc0b962927d',
  //   token: baobabTokens.lcg,
  //   quoteToken: baobabTokens.odi,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'FOC-oUSDT LP',
  //   lpAddress: '0x82b8d420afddf79e0bdd2a02ed859ad4ed843944',
  //   token: baobabTokens.odi,
  //   quoteToken: baobabTokens.usdt,
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
