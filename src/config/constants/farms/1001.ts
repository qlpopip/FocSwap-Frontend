import { baobabTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '../types'

const farms: SerializedFarmConfig[] = [
  {
    pid: 1,
    vaultPid: 3,
    lpSymbol: 'LCG-oUSDT LP',
    lpAddress: '0xaf4753bf31110028e2716738b939643a71a53b96',
    token: baobabTokens.lcg,
    quoteToken: baobabTokens.usdt,
  },
  {
    pid: 2,
    vaultPid: 3,
    lpSymbol: 'KLAY-oUSDT LP',
    lpAddress: '0x0a4588e45da5d43979aa664e9ae15cdedb561ac3',
    token: baobabTokens.weth,
    quoteToken: baobabTokens.usdt,
  },
  {
    pid: 3,
    vaultPid: 3,
    lpSymbol: 'LCG-ODI LP',
    lpAddress: '0x967bb714d5756dc56e7767b20c3c7bc0b962927d',
    token: baobabTokens.lcg,
    quoteToken: baobabTokens.odi,
  },
  
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
