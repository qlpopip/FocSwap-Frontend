import { klaytnTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
   {
     pid: 1,
     lpSymbol: 'KLAY-oUSDT LP',
     lpAddress: '0x07cae31cebfb44961f7bf6619e5f05aa5df8d749',
     token: klaytnTokens.weth,
     quoteToken: klaytnTokens.usdt,
   },
   {
    pid: 3,
    lpSymbol: 'LCG-oETH LP',
    lpAddress: '0xd527939A7edC167614c100e255939329D4198f1d',
    token: klaytnTokens.lcg,
    quoteToken: klaytnTokens.oETH,
  },
  {
    pid: 2,
    lpSymbol: 'oETH-oUSDT LP',
    lpAddress: '0xdC1fDBD7e3523f2c8C0c160F30e47383FB34Cf1e',
    token: klaytnTokens.oETH,
    quoteToken: klaytnTokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'ODi-oUSDT LP',
    lpAddress: '0x5376ff23e11341ba428c0bbd3a84549a1912bbd6',
    token: klaytnTokens.odi,
    quoteToken: klaytnTokens.usdt,
  },
  {
    pid: 5,
    lpSymbol: 'ODi-LCG LP',
    lpAddress: '0xf286d08631406366e759cfec60dd7afed91ac2df',
    token: klaytnTokens.odi,
    quoteToken: klaytnTokens.lcg,
  },
  {
    pid: 6,
    lpSymbol: 'LCG-oUSDT LP',
    lpAddress: '0xcd0b6a4418170d33e6d23625c24ebefea19ce388',
    token: klaytnTokens.lcg,
    quoteToken: klaytnTokens.usdt,
  },
//   {
//     pid: 2,
//     lpSymbol: 'KLAY-oUSDT LP',
//     lpAddress: '0x4A70d74Cf66B1d8bbEddacEB058943Aa78DD2C8B',
//     token: klaytnTokens.weth,
//     quoteToken: klaytnTokens.usdt,
//   },
  
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
