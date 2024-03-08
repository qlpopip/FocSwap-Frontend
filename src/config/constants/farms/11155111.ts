import { sepoliaTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  // {
  //   pid: 1,
  //   lpSymbol: 'ETH-FOC LP',
  //   lpAddress: '0x339003825449ecC6A02309Fb2396d56a51244FA8',
  //   token: sepoliaTokens.weth,
  //   quoteToken: sepoliaTokens.foc,
  // },
  // {
  //   pid: 2,
  //   lpSymbol: 'ETH-USDC LP',
  //   lpAddress: '0x1af1a4EeCc1C22e682Df5290ee4a53eabFbfe0D9',
  //   token: sepoliaTokens.weth,
  //   quoteToken: sepoliaTokens.usdc,
  // },
  //   {
  //     pid: 2,
  //     lpSymbol: 'KLAY-oUSDT LP',
  //     lpAddress: '0x4A70d74Cf66B1d8bbEddacEB058943Aa78DD2C8B',
  //     token: klaytnTokens.weth,
  //     quoteToken: klaytnTokens.usdt,
  //   },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
