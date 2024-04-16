import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_BASE } from './common'
// 수정
export const baseTokens = {
  weth: WETH9[ChainId.BASE],
  foc: new Token(ChainId.BASE, '0xDA11e185fF18674A633441Ca954D0f55289Cf7E7', 18, 'FOC', 'FOC Token', ''),
  usdc: USDC_BASE,
}
