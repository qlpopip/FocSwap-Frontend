import { klaytnTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../../types'

const priceHelperLps: SerializedFarmConfig[] = [
    {
        pid: null,
        lpSymbol: 'USDT-WKLAY LP',
        lpAddress: '0x378bc901891e718c0bddae7245295c6db21bfc7e',
        token: klaytnTokens.usdt,
        quoteToken: klaytnTokens.weth,
      },
]

export default priceHelperLps
