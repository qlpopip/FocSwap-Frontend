import { goerliTestnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 3,
    lpSymbol: 'WETH-UNI LP',
    lpAddress: '0xF51BAea3d139Ca5b6541c601411384e8c06481B9',
    token: goerliTestnetTokens.weth,
    quoteToken: goerliTestnetTokens.uni,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
