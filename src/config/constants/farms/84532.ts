import { baseTestTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'ETH-USDT LP',
    lpAddress: '0x62cc1fE667525E376AE346A4A714050C7998F885',
    token: baseTestTokens.weth,
    quoteToken: baseTestTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'FOC-USDT LP',
    lpAddress: '0x8a4E28AfBa9824Ac21fD47aC41986fbAEBf80fe4',
    token: baseTestTokens.foc,
    quoteToken: baseTestTokens.usdt,
  },
  {
    pid: 3,
    lpSymbol: 'FOC-USDC LP',
    lpAddress: '0x15876c6864b86Be47A29B682eE6D9fa2a1b08e3d',
    token: baseTestTokens.foc,
    quoteToken: baseTestTokens.usdc,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
