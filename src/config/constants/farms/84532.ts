import { baseTestTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'FOC-USDT LP',
    lpAddress: '0xC8377Fc97baDd2A01893B8a81b3c3F7e0Df3a29e',
    token: baseTestTokens.foc,
    quoteToken: baseTestTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'ETH-USDT LP',
    lpAddress: '0x894A78f92aAacB95bA847b7c33a179C0a7188ae3',
    token: baseTestTokens.weth,
    quoteToken: baseTestTokens.usdt,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'FOC-USDC LP',
  //   lpAddress: '0x15876c6864b86Be47A29B682eE6D9fa2a1b08e3d',
  //   token: baseTestTokens.foc,
  //   quoteToken: baseTestTokens.usdc,
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
