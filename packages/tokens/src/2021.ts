import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_SAIGON, USDC_SAIGON } from './common'
// 수정
export const saigonTokens = {
  weth: WETH9[ChainId.SAIGON],
  foc: new Token(ChainId.SAIGON, '0xcBff9d27af2e13Df19C9082276764426DC50eFF7', 18, 'FOC', 'FOC Token', ''),
  usdt: USDT_SAIGON,
  usdc: USDC_SAIGON,
}
