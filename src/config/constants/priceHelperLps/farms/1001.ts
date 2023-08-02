import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../../types'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: 2,
    lpSymbol: 'ODI-PT1 LP',
    lpAddress: '0xefb4a3fefff58dadf61d6394efaee1de18202adf',
    token: baobabTokens.PT1,
    quoteToken: baobabTokens.odi,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
