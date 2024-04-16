import { ChainId, Token, WETH9 } from '@pancakeswap/sdk'
import { USDT_KLAYTN } from './common'
// 수정
export const klaytnTokens = {
  weth: WETH9[ChainId.KLAYTN],
  usdt: USDT_KLAYTN,
}
