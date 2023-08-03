import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 3,
    lpSymbol: 'WKLAY-ODI LP',
    lpAddress: '0xb3948b426e9482c5f38d4880af584c95cd56f42b',
    token: baobabTokens.odi,
    quoteToken: baobabTokens.weth,
  },
  {
    pid: 2,
    vaultPid: 3,
    lpSymbol: 'ODI-PT1 LP',
    lpAddress: '0xefb4a3fefff58dadf61d6394efaee1de18202adf',
    token: baobabTokens.PT1,
    quoteToken: baobabTokens.odi,
  },
  {
    pid: 3,
    vaultPid: 3,
    lpSymbol: 'WKLAY-USDC LP',
    lpAddress: '0x378bc901891e718c0bddae7245295c6db21bfc7e',
    token: baobabTokens.weth,
    quoteToken: baobabTokens.usdc,
  },
  {
    pid: 4,
    vaultPid: 3,
    lpSymbol: 'PT1-WKLAY LP',
    lpAddress: '0x88397ebeb6056483c40d6aad5b87a4ecb1fe5c72',
    token: baobabTokens.PT1,
    quoteToken: baobabTokens.weth,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
