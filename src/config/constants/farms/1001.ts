import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  //  {
  //    pid: 1,
  //    lpSymbol: 'KLAY-ODi LP',
  //    lpAddress: '0x7a62962cf415acfa7433d95ae7c1a985d3f809ff',
  //    token: baobabTokens.weth,
  //    quoteToken: baobabTokens.odi,
  //  },
  //  {
  //    pid: 3,
  //    lpSymbol: 'KLAY-oUSDT LP',
  //    lpAddress: '0x37dd33edf120cfd5f0c1b8a553ca16bb5c1b0dac',
  //    token: baobabTokens.weth,
  //    quoteToken: baobabTokens.usdt,
  //  },
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
