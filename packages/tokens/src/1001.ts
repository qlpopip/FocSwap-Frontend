import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_BAOBAB } from './common'
//수정
export const baobabTokens = {
  weth: WETH9[ChainId.BAOBAB],
  odi: new Token(ChainId.BAOBAB, '0xdE2e61AccDe6e7C9a0061D2B80427B6F2710FFEf', 18, 'ODI', 'ODI Token', ''),
  usdt: new Token(ChainId.BAOBAB, '0x80Fc0d8652C784f1C5289FBea90f77Ba474B489f', 18, 'oUSDT', 'oUSDT Token', ''),
  lcg: new Token(ChainId.BAOBAB, '0x5afF4A709530Bd5b21915e5D14a73e8e0F613D1C', 18, 'LCG', 'LCG Token', ''),
  usdc: USDC_BAOBAB
}
