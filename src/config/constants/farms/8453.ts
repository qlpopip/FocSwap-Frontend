import { baseTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  //   {
  //     pid: 1,
  //     lpSymbol: 'FOC-USDC LP',
  //     lpAddress: '',
  //     token: baseTokens.foc,
  //     quoteToken: baseTokens.usdc,
  //   },
  //   {
  //     pid: 2,
  //     lpSymbol: 'ETH-USDT LP',
  //     lpAddress: '',
  //     token: baseTokens.weth,
  //     quoteToken: baseTokens.usdc,
  //   },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
