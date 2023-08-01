import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../../types'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: null,
    lpSymbol: 'WETH-USDC LP',
    lpAddress: '0xf5bf0C34d3c428A74Ceb98d27d38d0036C587200',
    token: baobabTokens.weth,
    quoteToken: baobabTokens.odi,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
