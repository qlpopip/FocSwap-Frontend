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
    lpAddress: '0xd527939a7edc167614c100e255939329d4198f1d',
    token: klaytnTokens.lcg,
    quoteToken: klaytnTokens.oETH,
  },
  {
    pid: 2,
    lpSymbol: 'oETH-oUSDT LP',
    lpAddress: '0xdc1fdbd7e3523f2c8c0c160f30e47383fb34cf1e',
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
