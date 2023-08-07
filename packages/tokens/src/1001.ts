import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_BAOBAB } from './common'
//수정
export const baobabTokens = {
  weth: WETH9[ChainId.BAOBAB],
  odi: new Token(ChainId.BAOBAB, '0x90f193b165159345E0E61703Eb6A25480213480f', 18, 'ODI', 'ODI Token', ''),
  usdt: new Token(ChainId.BAOBAB, '0x80Fc0d8652C784f1C5289FBea90f77Ba474B489f', 18, 'oUSDT', 'oUSDT Token', ''),
  lcg: new Token(ChainId.BAOBAB, '0x5afF4A709530Bd5b21915e5D14a73e8e0F613D1C', 18, 'LCG', 'LCG Token', ''),
  usdc: USDC_BAOBAB
}
