import { saigonTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'RON-FOC LP',
    lpAddress: '0x35e953437908ef6e8ce35ab025612a236c8acb09',
    token: saigonTokens.weth,
    quoteToken: saigonTokens.foc,
  },
  {
    pid: 2,
    lpSymbol: 'RON-USDC LP',
    lpAddress: '0xac1750d5613c6db372108dc9d0543ab4a9310919',
    token: saigonTokens.weth,
    quoteToken: saigonTokens.usdc,
  },
  {
    pid: 3,
    lpSymbol: 'FOC-USDC LP',
    lpAddress: '0x9037046fe73b27daccc4a63ced0af06b5f8c71e1',
    token: saigonTokens.foc,
    quoteToken: saigonTokens.usdc,
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
