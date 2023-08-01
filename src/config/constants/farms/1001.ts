import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 3,
    lpSymbol: 'WKLAY-ODI LP',
    lpAddress: '0xb3948b426e9482c5f38d4880af584c95cd56f42b',
    token: baobabTokens.weth,
    quoteToken: baobabTokens.odi,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
