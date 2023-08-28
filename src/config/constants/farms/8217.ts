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
    token: klaytnTokens.oETH,
    quoteToken: klaytnTokens.lcg,
  },
  {
    pid: 2,
    lpSymbol: 'oETH-oUSDT LP',
    lpAddress: '0xdC1fDBD7e3523f2c8C0c160F30e47383FB34Cf1e',
    token: klaytnTokens.oETH,
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
